import React from 'react';
import CheckoutForm from './CheckoutForm';
import CheckoutOrderSummary from './CheckoutOrderSummary';

const CheckoutPage = ({ cartItems, userInfo, onUpdateQuantity, onRemoveItem, onOrderComplete }) => {
  return (
    <main className="py-8">
      <div className="relative bg-gray-900 text-white py-16 mb-8">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/api/placeholder/1200/400')"
          }}
        ></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl ml-auto">
            <h1 className="text-4xl font-bold mb-2">Checkout</h1>
            <p className="text-gray-300">Complete your order details</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-start-3 lg:row-start-1">
            <CheckoutOrderSummary
              cartItems={cartItems}
              onUpdateQuantity={onUpdateQuantity}
              onRemoveItem={onRemoveItem}
            />
          </div>
          <div className="lg:col-span-2">
            <CheckoutForm 
              onOrderComplete={onOrderComplete} 
              userInfo={userInfo}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;