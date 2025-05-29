import React from 'react';

const MenuItem = ({ item, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex">
      <img src={item.image} alt={item.name} className="w-32 h-32 object-cover flex-shrink-0" />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
          <p className="text-gray-600 text-sm mb-3">{item.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">
            <span className="text-gray-500 text-sm">from</span> ${item.price.toFixed(2)}
          </span>
          <button 
            onClick={() => onAddToCart(item)}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded text-sm transition-colors"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;