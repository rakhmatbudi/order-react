import React, { useState } from 'react';
import { Wallet } from 'lucide-react';

const CheckoutForm = ({ onOrderComplete, userInfo }) => {
  const [formData, setFormData] = useState({
    paymentMethod: 'cash'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No validation needed - just process the order
    onOrderComplete(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-6">
      <div>
        <h3 className="text-lg font-semibold border-b pb-3 mb-4 flex items-center">
          <Wallet className="mr-3 text-blue-600" size={20} />
          Payment Method
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="cash"
              checked={formData.paymentMethod === 'cash'}
              onChange={handleInputChange}
              className="text-blue-600"
            />
            <span>Cash</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={formData.paymentMethod === 'card'}
              onChange={handleInputChange}
              className="text-blue-600"
            />
            <span>Credit Card</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              checked={formData.paymentMethod === 'paypal'}
              onChange={handleInputChange}
              className="text-blue-600"
            />
            <span>PayPal</span>
          </label>
        </div>
      </div>

      <div className="text-center pt-4">
        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Order Now!
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;