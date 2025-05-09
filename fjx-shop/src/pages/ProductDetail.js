import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Tag } from 'lucide-react';
import Loader from '../components/Loader';
// Importe für Demonstrationszwecke auskommentiert, da wir Mock-Daten verwenden
// import { fetchProductById } from '../api/tebexApi';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        
        // In production, we'd use the actual API function
        // const productData = await fetchProductById(id);
        
        // For demo purposes, we'll simulate API call with a delay
        setTimeout(() => {
          // Mock data - would be replaced by actual API data
          const mockProducts = {
            '101': { 
              id: 101, 
              name: "Advanced Server Manager", 
              price: 24.99, 
              category: 1,
              categoryName: "Premium Plugins",
              description: "Manage your server with our premium plugin. Includes advanced features for administration and monitoring.",
              longDescription: "The Advanced Server Manager is a comprehensive solution for server administrators who need robust tools to manage their gaming servers. With an intuitive interface and powerful features, this plugin simplifies complex tasks and provides real-time monitoring capabilities.\n\nKey Features:\n• User-friendly admin panel with customizable dashboard\n• Real-time server performance monitoring\n• Advanced user management and permission system\n• Comprehensive logging and analytics\n• Scheduled tasks and automated backups\n• Resource optimization tools\n• Multi-server support with centralized management\n\nThis plugin is regularly updated with new features and improvements based on community feedback. Technical support is provided through our Discord community.",
              image: "/api/placeholder/800/500",
              version: "2.5.1",
              lastUpdated: "2024-04-15",
              requirements: [
                "Java 8 or higher",
                "Server version 1.16.5 or higher",
                "Minimum 2GB RAM recommended"
              ],
              features: [
                "Intuitive Admin Panel",
                "Performance Monitoring",
                "User Management",
                "Scheduled Tasks",
                "Automated Backups",
                "Analytics Dashboard"
              ]
            },
            '102': { 
              id: 102, 
              name: "Custom Game Framework", 
              price: 49.99, 
              category: 1,
              categoryName: "Premium Plugins",
              description: "A fully-featured game framework with modular components and extensive documentation.",
              longDescription: "Our Custom Game Framework provides developers with a robust foundation for creating custom minigames and gameplay experiences. Built with flexibility and performance in mind, this framework significantly reduces development time and allows you to focus on creating unique gameplay mechanics.\n\nKey Features:\n• Modular component system for quick game creation\n• Extensive API for custom gameplay mechanics\n• Built-in game state management\n• Player data persistence and statistics tracking\n• Customizable UI components\n• Integration with popular plugins and platforms\n• Comprehensive documentation and code examples\n\nThis framework is ideal for server owners looking to offer unique gameplay experiences to their players. Regular updates ensure compatibility with the latest game versions and introduce new features based on developer feedback.",
              image: "/api/placeholder/800/500",
              version: "3.1.2",
              lastUpdated: "2024-03-22",
              requirements: [
                "Java 8 or higher",
                "Server version 1.17.1 or higher",
                "Minimum 4GB RAM recommended"
              ],
              features: [
                "Modular Components",
                "Game State Management",
                "Statistics Tracking",
                "UI Components",
                "Developer API",
                "Extensive Documentation"
              ]
            },
            '201': { 
              id: 201, 
              name: "Enhanced Graphics Pack", 
              price: 14.99, 
              category: 2,
              categoryName: "Game Mods",
              description: "Improve your game's visual fidelity with our enhanced graphics mod pack.",
              longDescription: "Transform your gaming experience with our Enhanced Graphics Pack. This comprehensive collection of mods and resource packs brings stunning visual improvements without compromising performance.\n\nThis graphics pack includes:\n• High-resolution textures (up to 128x)\n• Enhanced lighting and shadow effects\n• Improved water reflections and animations\n• Realistic weather effects\n• Redesigned UI elements\n• Custom sound enhancements\n• Performance optimization configurations\n\nOur graphics pack is designed to work seamlessly with most popular servers and other mods. Regular updates ensure compatibility with the latest game versions and introduce new visual enhancements.",
              image: "/api/placeholder/800/500",
              version: "4.2.0",
              lastUpdated: "2024-05-01",
              requirements: [
                "Game version 1.18.2 or higher",
                "Minimum 8GB RAM recommended",
                "Dedicated GPU with 4GB VRAM or higher"
              ],
              features: [
                "HD Textures",
                "Enhanced Lighting",
                "Water Reflections",
                "Weather Effects",
                "UI Improvements",
                "Sound Enhancements"
              ]
            },
            '301': { 
              id: 301, 
              name: "Custom Development (10 hours)", 
              price: 199.99, 
              category: 3,
              categoryName: "Development Services",
              description: "Get personalized development services from our experienced team.",
              longDescription: "Our Custom Development service provides you with direct access to our team of experienced developers to create tailored solutions for your specific needs. This 10-hour package allows you to describe your requirements, and our team will work closely with you to bring your ideas to life.\n\nService includes:\n• Initial consultation to understand your requirements\n• Regular progress updates and feedback sessions\n• Clean, optimized, and well-documented code\n• Testing and quality assurance\n• Implementation support\n• 30-day support period after delivery\n\nThis service is ideal for custom plugins, game mechanics, server features, or any development task that requires specialized expertise. Our team has extensive experience in game development, server optimization, and creating unique gameplay experiences.",
              image: "/api/placeholder/800/500",
              version: "Service Package",
              lastUpdated: "Always Current",
              requirements: [
                "Detailed project specifications",
                "Reasonable scope for 10 hours of development time",
                "Availability for feedback and testing"
              ],
              features: [
                "Experienced Developers",
                "Custom Solutions",
                "Regular Updates",
                "Quality Assurance",
                "Implementation Support",
                "30-Day Support Period"
              ]
            }
          };
          
          const foundProduct = mockProducts[id];
          
          if (foundProduct) {
            setProduct(foundProduct);
            setLoading(false);
          } else {
            setError("Product not found.");
            setLoading(false);
          }
        }, 800);
        
      } catch (err) {
        setError("Failed to load product details. Please try again later.");
        setLoading(false);
      }
    };
    
    loadProduct();
  }, [id]);
  
  // Function to handle checkout
  const handleCheckout = () => {
    // In production, redirect to Tebex checkout
    window.open(`https://checkout.tebex.io/package/${id}`, '_blank');
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container">
        {loading ? (
          <Loader message="Loading product details..." />
        ) : error ? (
          <div className="text-center">
            <div className="bg-white rounded-xl shadow-soft p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{error}</h2>
              <Link to="/shop" className="btn btn-primary inline-flex items-center">
                <ArrowLeft size={16} className="mr-2" />
                Back to Shop
              </Link>
            </div>
          </div>
        ) : (
          <div>
            {/* Breadcrumbs */}
            <div className="mb-8">
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                  <li className="inline-flex items-center">
                    <Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <Link to="/shop" className="ml-1 text-gray-600 hover:text-primary-600 transition-colors">
                        Shop
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <Link to={`/shop?category=${product.category}`} className="ml-1 text-gray-600 hover:text-primary-600 transition-colors">
                        {product.categoryName}
                      </Link>
                    </div>
                  </li>
                  <li aria-current="page">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="ml-1 text-gray-500 font-medium">
                        {product.name}
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
            
            {/* Product Details */}
            <div className="bg-white rounded-xl shadow-soft overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Product Image */}
                <div className="overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Product Info */}
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <Link 
                      to={`/shop?category=${product.category}`}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-sm font-medium"
                    >
                      <Tag size={14} className="mr-1" />
                      {product.categoryName}
                    </Link>
                  </div>
                  
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                  
                  <div className="flex items-center mb-6">
                    <span className="text-3xl font-bold gradient-text mr-4">
                      ${product.price.toFixed(2)}
                    </span>
                    
                    <div className="text-sm text-gray-600 flex flex-col">
                      <span>Version: {product.version}</span>
                      <span>Updated: {product.lastUpdated}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <button 
                      onClick={handleCheckout}
                      className="btn btn-primary flex-1 flex items-center justify-center"
                    >
                      <ShoppingCart size={18} className="mr-2" />
                      Buy Now
                    </button>
                    
                    <Link 
                      to="/support"
                      className="btn btn-outline flex-1 flex items-center justify-center"
                    >
                      Contact Support
                    </Link>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Requirements</h3>
                    <ul className="space-y-2 mb-6">
                      {product.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 mt-0.5 text-primary-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                          <span className="ml-2 text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Extended Description */}
              <div className="p-8 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Description</h2>
                    
                    {product.longDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-700 mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Key Features</h3>
                    <ul className="space-y-3 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 mt-0.5 text-primary-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                          <span className="ml-2 text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to="/shop"
                      className="btn btn-outline w-full flex items-center justify-center mt-4"
                    >
                      <ArrowLeft size={16} className="mr-2" />
                      Back to Shop
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
