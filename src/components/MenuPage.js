import React from 'react';
import MenuCategory from './MenuCategory';

const MenuPage = ({ userInfo, menuData, openCategories, onToggleCategory, onAddToCart }) => {
  return (
    <main className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Menu Grid</h1>
          <p className="text-gray-600">
            {userInfo?.name ? `Welcome ${userInfo.name}! Choose from our delicious menu` : 'Choose from our delicious menu'}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {Object.entries(menuData).map(([category, items]) => (
            <MenuCategory
              key={category}
              category={category}
              items={items}
              isOpen={openCategories[category]}
              onToggle={onToggleCategory}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MenuPage;