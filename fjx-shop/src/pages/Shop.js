import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import Loader from '../components/Loader';
// Importe für Demonstrationszwecke auskommentiert, da wir Mock-Daten verwenden
// import { fetchProducts, fetchCategories } from '../api/tebexApi';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  
  // Parse category from URL query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    
    if (categoryParam) {
      setSelectedCategory(parseInt(categoryParam));
    } else {
      setSelectedCategory(null);
    }
  }, [location.search]);
  
  // Load products and categories
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
              id: 103, 
              name: "Database Manager Pro", 
              price: 19.99, 
              category: 1, 
              description: "Efficiently manage your databases with our intuitive plugin interface.",
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
              id: 202, 
              name: "Custom Character Models", 
              price: 29.99, 
              category: 2, 
              description: "Unique, high-quality character models designed by professional artists.",
              image: "/api/placeholder/600/400"
            },
            { 
              id: 301, 
              name: "Custom Development (10 hours)", 
              price: 199.99, 
              category: 3, 
              description: "Get personalized development services from our experienced team.",
              image: "/api/placeholder/600/400"
            },
            { 
              id: 302, 
              name: "Server Optimization", 
              price: 149.99, 
              category: 3, 
              description: "Our experts will optimize your server for maximum performance and stability.",
              image: "/api/placeholder/600/400"
            }
          ];
          
          const mockCategories = [
            { id: 1, name: "Premium Plugins", order: 1 },
            { id: 2, name: "Game Mods", order: 2 },
            { id: 3, name: "Development Services", order: 3 }
          ];
          
          setProducts(mockProducts);
          setCategories(mockCategories);
          setLoading(false);
        }, 800);
        
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      }
    };
    
    loadData();
  }, []);
  
  // Filter products by category
  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products;
  
  // Handler for category change
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    
    // Update URL query params without page reload
    const searchParams = new URLSearchParams(location.search);
    if (categoryId === null) {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    
    // Update URL with new search params
    window.history.pushState(
      {},
      '',
      `${window.location.pathname}?${searchParams.toString()}`
    );
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container">
        {/* Shop Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our collection of premium plugins, game mods, and development services.
          </p>
        </div>
        
        {loading ? (
          <Loader message="Loading products..." />
        ) : error ? (
          <div className="text-center text-red-500 py-8">{error}</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar with Categories */}
            <div className="lg:col-span-1">
              <CategoryFilter 
                categories={categories} 
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
              />
            </div>
            
            {/* Product Grid */}
            <div className="lg:col-span-3">
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-xl shadow-soft p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">No products found</h3>
                  <p className="text-gray-600 mb-4">
                    There are no products in this category yet.
                  </p>
                  <button 
                    onClick={() => handleCategoryChange(null)}
                    className="btn btn-primary"
                  >
                    View All Products
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
