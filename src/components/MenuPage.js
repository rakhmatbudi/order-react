import React from 'react';
import MenuCategory from './MenuCategory';

const MenuPage = ({ userInfo, menuData, openCategories, onToggleCategory, onAddToCart }) => {
  return (
    <main className="py-8">
      <div className="container mx-auto px-4">
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