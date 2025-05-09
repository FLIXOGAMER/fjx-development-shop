import axios from 'axios';

// Base URL for API calls, defined in .env
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '/api';

// Create Axios instance with common config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Fetch all products from Tebex API
 * @returns {Promise<Array>} Array of product objects
 */
export const fetchProducts = async () => {
  try {
    const response = await apiClient.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

/**
 * Fetch a specific product by ID
 * @param {number|string} id - Product ID
 * @returns {Promise<Object>} Product object
 */
export const fetchProductById = async (id) => {
  try {
    const response = await apiClient.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
};

/**
 * Fetch all categories from Tebex API
 * @returns {Promise<Array>} Array of category objects
 */
export const fetchCategories = async () => {
  try {
    const response = await apiClient.get('/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

/**
 * Fetch products by category
 * @param {number|string} categoryId - Category ID
 * @returns {Promise<Array>} Array of product objects in the category
 */
export const fetchProductsByCategory = async (categoryId) => {
  try {
    const response = await apiClient.get(`/categories/${categoryId}/products`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching products for category ${categoryId}:`, error);
    throw error;
  }
};

/**
 * Generate Tebex checkout URL for a product
 * @param {number|string} productId - Product ID
 * @returns {string} Checkout URL
 */
export const generateCheckoutUrl = (productId) => {
  return `https://checkout.tebex.io/package/${productId}`;
};

/**
 * Handle webhook event from Tebex
 * This would be implemented on the server-side in a production environment
 * @param {Object} webhookData - Data received from Tebex webhook
 */
export const handleWebhook = async (webhookData) => {
  // This function would normally be implemented on the server-side
  // Here for demonstration only
  console.log('Received webhook data:', webhookData);
  
  // Webhook types: https://docs.tebex.io/store/webhooks
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
};

// Create named export for default
const tebexApi = {
  fetchProducts,
  fetchProductById,
  fetchCategories,
  fetchProductsByCategory,
  generateCheckoutUrl,
  handleWebhook,
};

export default tebexApi;
