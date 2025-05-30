import React, { useState } from 'react';
import { Bookmark, CheckCircle } from 'lucide-react';

const RegistrationForm = ({ onRegistrationComplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tableNumber: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.tableNumber.trim()) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      onRegistrationComplete(formData);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md mx-auto">
      <div className="relative bg-gray-900 text-white p-6">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/api/placeholder/400/200')"
          }}
        ></div>
        <div className="relative text-center">
          <div className="text-center md:text-left">
            <img 
              src="/images/logos/logo-light.svg" 
              alt="Serendipity Restaurant Logo" 
              className="h-36 mb-0 mx-auto md:mx-0"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">Ordering System</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Meja:</label>
          <input
            type="text"
            name="tableNumber"
            value={formData.tableNumber}
            onChange={handleInputChange}
            placeholder="Contoh: A1, B5, 12"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nama:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">No Telepon:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">E-mail:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Processing...
            </div>
          ) : (
            <>
              <span>Lanjut</span>
              <CheckCircle className="ml-2" size={20} />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;