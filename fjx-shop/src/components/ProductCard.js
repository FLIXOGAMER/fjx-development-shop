import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { id, name, price, description, image } = product;
  
  // Function to handle checkout
  const handleCheckout = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Redirect to Tebex checkout
    window.open(`https://checkout.tebex.io/package/${id}`, '_blank');
  };
  
  return (
    <div className="card hover-lift overflow-hidden group">
      {/* Product Image */}
      <Link to={`/product/${id}`} className="block overflow-hidden">
        <div className="h-48 w-full overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      
      {/* Product Content */}
      <div className="p-5">
        <Link to={`/product/${id}`}>
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-200">
            {name}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold gradient-text">
            ${price.toFixed(2)}
          </span>
          
          <div className="flex space-x-2">
            <Link 
              to={`/product/${id}`} 
              className="btn btn-outline text-sm px-4 py-2"
            >
              Details
            </Link>
            <button 
              onClick={handleCheckout}
              className="btn btn-primary text-sm px-4 py-2 flex items-center"
              aria-label="Buy now"
            >
              <ShoppingCart size={16} className="mr-1" />
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;