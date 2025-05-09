import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="bg-white rounded-xl shadow-soft p-4 sticky top-24">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
      
      <ul className="space-y-2">
        <li>
          <button
            className={`w-full text-left py-2 px-3 rounded-lg transition-colors duration-200 ${
              selectedCategory === null
                ? 'bg-primary-50 text-primary-600 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => onCategoryChange(null)}
          >
            All Products
          </button>
        </li>
        
        {categories.map((category) => (
          <li key={category.id}>
            <button
              className={`w-full text-left py-2 px-3 rounded-lg transition-colors duration-200 ${
                selectedCategory === category.id
                  ? 'bg-primary-50 text-primary-600 font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => onCategoryChange(category.id)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;