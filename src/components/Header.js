import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

const Header = ({ cartItems, onCartToggle, onMobileMenuToggle, currentPage, onNavigate, userRegistered }) => {
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => onNavigate(userRegistered ? 'menu' : 'landing')}
                className="text-2xl font-bold text-gray-800 hover:text-gray-600"
              >
                Serendipity
              </button>
              <nav className="hidden lg:flex space-x-6">
                <button 
                  onClick={() => onNavigate('landing')}
                  className={`hover:text-gray-900 ${currentPage === 'landing' ? 'text-gray-900 font-semibold' : 'text-gray-700'}`}
                >
                  Home
                </button>
                {userRegistered && (
                  <button 
                    onClick={() => onNavigate('menu')}
                    className={`hover:text-gray-900 ${currentPage === 'menu' ? 'text-gray-900 font-semibold' : 'text-gray-700'}`}
                  >
                    Menu
                  </button>
                )}
                <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              {userRegistered && (
                <>
                  <button 
                    onClick={() => onNavigate('menu')}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200"
                  >
                    Order
                  </button>
                  <button 
                    onClick={onCartToggle}
                    className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                  >
                    <div className="relative">
                      <ShoppingCart size={20} />
                      {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                          {cartCount}
                        </span>
                      )}
                    </div>
                    <span>${cartTotal.toFixed(2)}</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={onMobileMenuToggle} className="text-gray-700">
            <Menu size={24} />
          </button>
          <img 
            src="/images/logos/logo-horizontal-dark.svg" 
            alt="Serendipity Restaurant Logo" 
            className="h-24"
          />
          {userRegistered && (
            <button onClick={onCartToggle} className="relative text-gray-700">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;