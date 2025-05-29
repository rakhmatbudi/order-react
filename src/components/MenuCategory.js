import React from 'react';
import MenuItem from './MenuItem';

const MenuCategory = ({ category, items, isOpen, onToggle, onAddToCart }) => {
  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => onToggle(category)}
        className="w-full text-left bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div className="relative h-32 overflow-hidden">
          <img 
            src="/api/placeholder/800/200" 
            alt={category}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-2xl font-bold text-white">{category}</h2>
          </div>
        </div>
      </button>
      
      {isOpen && (
        <div className="p-6 bg-white">
          <div className="grid grid-cols-1 gap-4">
            {items.map(item => (
              <MenuItem key={item.id} item={item} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuCategory;