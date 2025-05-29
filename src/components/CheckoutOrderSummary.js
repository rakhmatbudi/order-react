import React from 'react';
import { ShoppingCart, Edit, Trash2 } from 'lucide-react';

const CheckoutOrderSummary = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const delivery = 0.00;
  const discount = subtotal > 50 ? subtotal * 0.1 : 0;
  const total = subtotal + delivery - discount;

  return (
    <div className="bg-white shadow-lg rounded-lg sticky top-24">
      <div className="bg-gray-900 text-white p-4 rounded-t-lg">
        <h3 className="text-lg font-semibold">Your Order</h3>
      </div>
      
      <div className="p-4">
        {cartItems.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <ShoppingCart size={48} className="mx-auto mb-4 opacity-50" />
            <p>Your cart is empty...</p>
          </div>
        ) : (
          <>
            <div className="space-y-3 mb-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-start justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-gray-500 text-xs">{item.description}</p>
                    <p className="text-gray-500 text-xs">Qty: {item.quantity}</p>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <span className="font-semibold text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                    <div className="flex space-x-1">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <Edit size={14} />
                      </button>
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-400 hover:text-red-600"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Order total:</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery:</span>
                <span className="font-semibold">${delivery.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount (10%):</span>
                  <span className="font-semibold">-${discount.toFixed(2)}</span>
                </div>
              )}
              <hr className="my-2" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutOrderSummary;