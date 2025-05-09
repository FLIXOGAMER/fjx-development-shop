import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import DiscordWidget from '../components/DiscordWidget';
import Loader from '../components/Loader';
import { fetchProducts, fetchCategories } from '../api/tebexApi';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // In production, we'd use the actual API functions
        // const [productsData, categoriesData] = await Promise.all([
        //   fetchProducts(),
        //   fetchCategories()
        // ]);
        
        // For demo purposes, we'll simulate API calls with a delay
        setTimeout(() => {
          // Mock data - would be replaced by actual API data
          const mockProducts = [
            { 
              id: 101, 
              name: "Advanced Server Manager", 
              price: 24.99, 
              category: 1, 
              description: "Manage your server with our premium plugin. Includes advanced features for administration and monitoring.",
              image: "/api/placeholder/600/400"
            },
            { 
              id: 102, 
              name: "Custom Game Framework", 
              price: 49.99, 
              category: 1, 
              description: "A fully-featured game framework with modular components and extensive documentation.",
              image: "/api/placeholder/600/400"
            },
            { 
              id: 201, 
              name: "Enhanced Graphics Pack", 
              price: 14.99, 
              category: 2, 
              description: "Improve your game's visual fidelity with our enhanced graphics mod pack.",
              image: "/api/placeholder/600/400"
            },
            { 
              id: 301, 
              name: "Custom Development (10 hours)", 
              price: 199.99, 
              category: 3, 
              description: "Get personalized development services from our experienced team.",
              image: "/api/placeholder/600/400"
            }
          ];
          
          const mockCategories = [
            { id: 1, name: "Premium Plugins", order: 1 },
            { id: 2, name: "Game Mods", order: 2 },
            { id: 3, name: "Development Services", order: 3 }
          ];
          
          // Get featured products (for demo, we'll use the first 4)
          setFeaturedProducts(mockProducts.slice(0, 4));
          setCategories(mockCategories);
          setLoading(false);
        }, 800);
        
      } catch (err) {
        setError("Failed to load data. Please try again later.");
        setLoading(false);
      }
    };
    
    loadData();
  }, []);
  
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Products */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check out our most popular development solutions trusted by thousands of customers around the world.
            </p>
          </div>
          
          {loading ? (
            <Loader message="Loading featured products..." />
          ) : error ? (
            <div className="text-center text-red-500 py-8">{error}</div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
              <div className="text-center mt-10">
                <Link 
                  to="/shop" 
                  className="btn btn-primary"
                >
                  View All Products
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our comprehensive range of development solutions tailored to meet your specific needs.
            </p>
          </div>
          
          {loading ? (
            <Loader message="Loading categories..." />
          ) : error ? (
            <div className="text-center text-red-500 py-8">{error}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link 
                  key={category.id}
                  to={`/shop?category=${category.id}`}
                  className="card hover-lift group px-6 py-12 text-center"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-primary-600 transition-colors duration-200">
                    {category.name}
                  </h3>
                  <div className="mt-2 inline-block">
                    <span className="btn btn-outline group-hover:border-primary-500 group-hover:text-primary-600">
                      Browse Products
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* About Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About <span className="gradient-text">FJX Development</span>
              </h2>
              <p className="text-gray-600 mb-4">
                FJX Development is a team of passionate developers dedicated to creating high-quality plugins, mods, and custom development solutions for gaming servers and applications.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is to provide exceptional tools that enhance user experience, optimize performance, and unlock new possibilities for developers and server owners alike.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 text-primary-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-2 text-gray-700">Premium quality code with regular updates</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 text-primary-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-2 text-gray-700">Dedicated support through Discord</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 text-primary-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-2 text-gray-700">Custom development tailored to your needs</span>
                </li>
              </ul>
            </div>
            
            {/* Discord Widget */}
            <div>
              <DiscordWidget />
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-r from-secondary-500/20 to-primary-500/20 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Enhance Your Development?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Browse our products, join our community, or get in touch for custom development services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/shop" className="btn btn-primary text-lg px-8 py-3">
              Shop Now
            </Link>
            <a href="#discord" className="btn btn-outline border-white/20 text-white hover:bg-white/10 text-lg px-8 py-3">
              Join our Community
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;