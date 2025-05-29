import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <img 
              src="/images/logos/logo-light.svg" 
              alt="Serendipity Restaurant Logo" 
              className="h-48 mb-0 mx-auto md:mx-0"
            />
          </div>
          <div>
            <div className="space-y-3">
              <div>
                <a href="#" className="text-white hover:text-gray-300 text-sm block">
                  Alamat
                </a>
                <span className="text-gray-400 text-xs">Jalan Durian Barat III no 10, Kelurahan Jagakarsa</span>
              </div>
              <div>
                <a href="#" className="text-white hover:text-gray-300 text-sm block">
                  Whatsapp
                </a>
                <span className="text-gray-400 text-xs">082-12345-8276</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">Subscribe Us!</h3>
            <div className="flex mb-4">
              <input 
                type="email" 
                placeholder="Your email..." 
                className="flex-1 px-3 py-2 text-gray-900 rounded-l"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-3">
              <Facebook size={20} className="text-blue-600 cursor-pointer hover:text-blue-500" />
              <Twitter size={20} className="text-blue-400 cursor-pointer hover:text-blue-300" />
              <Instagram size={20} className="text-pink-600 cursor-pointer hover:text-pink-500" />
              <Youtube size={20} className="text-red-600 cursor-pointer hover:text-red-500" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
          Copyright by Serendipity ©2024.
        </div>
      </div>
    </footer>
  );
};

export default Footer;