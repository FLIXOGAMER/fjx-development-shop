import React from 'react';

const Loader = ({ size = 'medium', message = 'Loading...' }) => {
  const sizeClasses = {
    small: 'w-6 h-6 border-2',
    medium: 'w-10 h-10 border-3',
    large: 'w-16 h-16 border-4',
  };
  
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div 
        className={`${sizeClasses[size]} rounded-full border-gray-300 border-t-primary-600 animate-spin`}
      ></div>
      {message && (
        <p className="mt-4 text-gray-600">{message}</p>
      )}
    </div>
  );
};

export default Loader;