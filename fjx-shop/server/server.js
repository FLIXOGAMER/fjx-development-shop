const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Tebex API configuration
const TEBEX_API_URL = process.env.TEBEX_API_URL || 'https://plugin.tebex.io/';
const TEBEX_SECRET_KEY = process.env.TEBEX_SECRET_KEY;

// Create axios instance for Tebex API
const tebexAPI = axios.create({
  baseURL: TEBEX_API_URL,
  headers: {
    'X-Tebex-Secret': TEBEX_SECRET_KEY,
    'Content-Type': 'application/json'
  }
});

/**
 * Validate that the TEBEX_SECRET_KEY is set
 * @returns {boolean} Whether the key is valid
 */
const validateApiKey = () => {
  if (!TEBEX_SECRET_KEY) {
    console.error('TEBEX_SECRET_KEY is not set in environment variables');
    return false;
  }
  return true;
};

// API Routes

/**
 * Get all products from Tebex
 */
app.get('/api/products', async (req, res) => {
  if (!validateApiKey()) {
    return res.status(500).json({ 
      error: 'API key not configured',
      message: 'Please set TEBEX_SECRET_KEY in your .env file'
    });
  }
  
  try {
    const response = await tebexAPI.get('/listing');
    
    // Transform response data to match our frontend structure
    const packages = response.data.packages || [];
    const products = packages.map(pkg => ({
      id: pkg.id,
      name: pkg.name,
      price: pkg.price,
      category: pkg.category.id,
      categoryName: pkg.category.name,
      description: pkg.short_description || '',
      image: pkg.image || '/api/placeholder/600/400',
      // Add any other fields needed
    }));
    
    res.json(products);
  } catch (error) {
    console.error('Error fetching products from Tebex:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to fetch products', 
      message: error.message 
    });
  }
});

/**
 * Get a specific product by ID
 */
app.get('/api/products/:id', async (req, res) => {
  if (!validateApiKey()) {
    return res.status(500).json({ 
      error: 'API key not configured',
      message: 'Please set TEBEX_SECRET_KEY in your .env file'
    });
  }
  
  const { id } = req.params;
  
  try {
    const response = await tebexAPI.get(`/package/${id}`);
    
    // Transform response data to match our frontend structure
    const pkg = response.data;
    const product = {
      id: pkg.id,
      name: pkg.name,
      price: pkg.price,
      category: pkg.category.id,
      categoryName: pkg.category.name,
      description: pkg.short_description || '',
      longDescription: pkg.description || '',
      image: pkg.image || '/api/placeholder/800/500',
      version: pkg.version || '1.0.0',
      lastUpdated: pkg.lastUpdated || new Date().toISOString().split('T')[0],
      requirements: pkg.requirements || ['No specific requirements'],
      features: pkg.features || ['Basic functionality'],
      // Add any other fields needed
    };
    
    res.json(product);
  } catch (error) {
    console.error(`Error fetching product ${id} from Tebex:`, error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to fetch product', 
      message: error.message 
    });
  }
});

/**
 * Get all categories from Tebex
 */
app.get('/api/categories', async (req, res) => {
  if (!validateApiKey()) {
    return res.status(500).json({ 
      error: 'API key not configured',
      message: 'Please set TEBEX_SECRET_KEY in your .env file'
    });
  }
  
  try {
    const response = await tebexAPI.get('/categories');
    
    // Transform response data to match our frontend structure
    const categories = response.data.data.map(category => ({
      id: category.id,
      name: category.name,
      order: category.order
    }));
    
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories from Tebex:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to fetch categories', 
      message: error.message 
    });
  }
});

/**
 * Get products by category
 */
app.get('/api/categories/:id/products', async (req, res) => {
  if (!validateApiKey()) {
    return res.status(500).json({ 
      error: 'API key not configured',
      message: 'Please set TEBEX_SECRET_KEY in your .env file'
    });
  }
  
  const { id } = req.params;
  
  try {
    const response = await tebexAPI.get('/listing');
    
    // Filter packages by category ID
    const packages = response.data.packages || [];
    const products = packages
      .filter(pkg => pkg.category.id === parseInt(id))
      .map(pkg => ({
        id: pkg.id,
        name: pkg.name,
        price: pkg.price,
        category: pkg.category.id,
        categoryName: pkg.category.name,
        description: pkg.short_description || '',
        image: pkg.image || '/api/placeholder/600/400',
        // Add any other fields needed
      }));
    
    res.json(products);
  } catch (error) {
    console.error(`Error fetching products for category ${id} from Tebex:`, error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to fetch products for category', 
      message: error.message 
    });
  }
});

/**
 * Webhook endpoint for Tebex events
 */
app.post('/api/webhook', (req, res) => {
  const webhookData = req.body;
  
  // Log webhook data (in production, you would process this)
  console.log('Received webhook from Tebex:', webhookData);
  
  // Process webhook based on type
  switch (webhookData.type) {
    case 'payment.completed':
      // Handle payment completion
      console.log('Payment completed for order:', webhookData.order);
      break;
    case 'payment.refunded':
      // Handle refund
      console.log('Payment refunded for order:', webhookData.order);
      break;
    case 'payment.disputed':
      // Handle dispute
      console.log('Payment disputed for order:', webhookData.order);
      break;
    default:
      console.log('Unhandled webhook type:', webhookData.type);
  }
  
  // Acknowledge receipt of webhook
  res.status(200).json({ success: true });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
  
  // Check if API key is configured
  if (!TEBEX_SECRET_KEY) {
    console.warn('Warning: TEBEX_SECRET_KEY is not set. API calls will fail.');
  }
});