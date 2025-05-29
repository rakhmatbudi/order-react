import React from 'react';
import { X, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose, currentPage, onNavigate, userRegistered }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-xl">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">Serendipity</span>
            <button onClick={onClose} className="text-gray-500">
              <X size={24} />
            </button>
          </div>
        </div>
        <nav className="p-4">
          <div className="space-y-4">
            {userRegistered && (
              <button 
                onClick={() => { onNavigate('menu'); onClose(); }}
                className={`block w-full text-left hover:text-gray-900 ${currentPage === 'menu' ? 'text-gray-900 font-semibold' : 'text-gray-700'}`}
              >
                Menu
              </button>
            )}
            <a href="#" className="block text-gray-700 hover:text-gray-900">FAQ</a>
            <a href="#" className="block text-gray-700 hover:text-gray-900">Tentang Kami</a>
          </div>
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-center mb-4">
            <p className="text-sm text-gray-600 mb-2">Follow Us!</p>
            <div className="flex justify-center space-x-3">
              <Facebook size={20} className="text-blue-600" />
              <Twitter size={20} className="text-blue-400" />
              <Instagram size={20} className="text-pink-600" />
              <Youtube size={20} className="text-red-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;