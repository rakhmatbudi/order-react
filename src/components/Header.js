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
                {userRegistered && (
                  <button 
                    onClick={() => onNavigate('menu')}
                    className={`hover:text-gray-900 ${currentPage === 'menu' ? 'text-gray-900 font-semibold' : 'text-gray-700'}`}
                  >
                    Menu
                  </button>
                )}
                <button 
                  onClick={() => onNavigate('faq')}
                  className={`hover:text-gray-900 ${currentPage === 'faq' ? 'text-gray-900 font-semibold' : 'text-gray-700'}`}
                >
                  FAQ
                </button>
                <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
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

      {/* Mobile Header - Fixed Height */}
      <header className="md:hidden bg-white shadow-sm sticky top-0 z-50 h-16">
        <div className="flex items-center justify-between h-full px-4">
          <div className="flex items-center justify-center w-12 h-12">
            <button onClick={onMobileMenuToggle} className="text-gray-700 p-2">
              <Menu size={24} />
            </button>
          </div>
          
          <div className="flex-1 flex justify-center items-center px-4">
            <img 
              src="/images/logos/logo-horizontal-dark.svg" 
              alt="Serendipity Restaurant Logo" 
              className="max-h-36 max-w-full object-contain"
            />
          </div>
          
          <div className="flex items-center justify-center w-12 h-12">
            {userRegistered && (
              <button onClick={onCartToggle} className="relative text-gray-700 p-2">
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;