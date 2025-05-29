import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Plus, Minus, Facebook, Twitter, Instagram, Youtube, User, Package, Wallet, Edit, Trash2, Bookmark, CheckCircle } from 'lucide-react';

// Mock data for menu items
const menuData = {
  Burgers: [
    { id: 1, name: 'Beef Burger', description: 'Beef, cheese, potato, onion, fries', price: 9.00, image: '/api/placeholder/300/200' },
    { id: 2, name: 'Broccoli Burger', description: 'Beef, cheese, potato, onion, fries', price: 9.00, image: '/api/placeholder/300/200' },
    { id: 3, name: 'Chicken Burger', description: 'Chicken, cheese, potato, onion, fries', price: 9.00, image: '/api/placeholder/300/200' },
    { id: 4, name: 'Creste di Galli', description: 'Pasta, cheese, tomatoes, herbs', price: 13.00, image: '/api/placeholder/300/200' },
    { id: 5, name: 'Chicken Wings', description: 'Crispy wings with special sauce', price: 13.00, image: '/api/placeholder/300/200' },
    { id: 6, name: 'Nigiri-sushi', description: 'Fresh fish, seasoned rice', price: 13.00, image: '/api/placeholder/300/200' }
  ],
  Pasta: [
    { id: 7, name: 'Spaghetti Carbonara', description: 'Pasta, eggs, cheese, bacon', price: 12.00, image: '/api/placeholder/300/200' },
    { id: 8, name: 'Penne Arrabbiata', description: 'Pasta, tomatoes, chili, garlic', price: 11.00, image: '/api/placeholder/300/200' }
  ],
  Pizza: [
    { id: 9, name: 'Margherita', description: 'Tomato, mozzarella, basil', price: 14.00, image: '/api/placeholder/300/200' },
    { id: 10, name: 'Pepperoni', description: 'Tomato, mozzarella, pepperoni', price: 16.00, image: '/api/placeholder/300/200' }
  ],
  Sushi: [
    { id: 11, name: 'California Roll', description: 'Crab, avocado, cucumber', price: 15.00, image: '/api/placeholder/300/200' },
    { id: 12, name: 'Salmon Nigiri', description: 'Fresh salmon, seasoned rice', price: 18.00, image: '/api/placeholder/300/200' }
  ],
  Desserts: [
    { id: 13, name: 'Tiramisu', description: 'Coffee, mascarpone, cocoa', price: 8.00, image: '/api/placeholder/300/200' },
    { id: 14, name: 'Chocolate Cake', description: 'Rich chocolate, cream', price: 7.00, image: '/api/placeholder/300/200' }
  ],
  Drinks: [
    { id: 15, name: 'Fresh Orange Juice', description: '100% natural orange juice', price: 4.00, image: '/api/placeholder/300/200' },
    { id: 16, name: 'Coffee', description: 'Freshly brewed coffee', price: 3.00, image: '/api/placeholder/300/200' }
  ]
};

// Header Component
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
                Soup
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
          <button 
            onClick={() => onNavigate(userRegistered ? 'menu' : 'landing')}
            className="text-xl font-bold text-gray-800"
          >
            Soup
          </button>
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

// Registration Form Component
const RegistrationForm = ({ onRegistrationComplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
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
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      onRegistrationComplete(formData);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md mx-auto">
      {/* Header */}
      <div className="relative bg-gray-900 text-white p-6">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/api/placeholder/400/200')"
          }}
        ></div>
        <div className="relative text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Bookmark className="text-white" size={32} />
          </div>
          <h2 className="text-2xl font-bold mb-2">Registrasi</h2>
          <p className="text-gray-300">Silakan daftarkan kontak anda.</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
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
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
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
              <span>Daftar</span>
              <CheckCircle className="ml-2" size={20} />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

// Landing Page Component
const LandingPage = ({ onRegistrationComplete }) => {
  return (
    <div className="min-h-screen relative">
      {/* Video Background Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Video Placeholder */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/api/placeholder/1920/1080')",
            filter: 'brightness(0.4)'
          }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <RegistrationForm onRegistrationComplete={onRegistrationComplete} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Menu Item Component
const MenuItem = ({ item, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex">
      <img src={item.image} alt={item.name} className="w-32 h-32 object-cover flex-shrink-0" />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
          <p className="text-gray-600 text-sm mb-3">{item.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">
            <span className="text-gray-500 text-sm">from</span> ${item.price.toFixed(2)}
          </span>
          <button 
            onClick={() => onAddToCart(item)}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded text-sm transition-colors"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Menu Category Component
const MenuCategory = ({ category, items, isOpen, onToggle, onAddToCart }) => {
  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => onToggle(category)}
        className="w-full text-left bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div className="relative h-32 overflow-hidden">
          <img 
            src="/api/placeholder/800/200" 
            alt={category}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-2xl font-bold text-white">{category}</h2>
          </div>
        </div>
      </button>
      
      {isOpen && (
        <div className="p-6 bg-white">
          <div className="grid grid-cols-1 gap-4">
            {items.map(item => (
              <MenuItem key={item.id} item={item} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Cart Panel Component
const CartPanel = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const delivery = 0.00;
  const total = subtotal + delivery;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Your Cart</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <ShoppingCart size={48} className="mx-auto mb-4 opacity-50" />
                <p>Your cart is empty...</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center space-x-3 bg-gray-50 p-3 rounded">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-gray-600 text-xs">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded text-xs"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded text-xs"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <button 
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {cartItems.length > 0 && (
            <div className="border-t p-4">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Order total:</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery:</span>
                  <span className="font-semibold">${delivery.toFixed(2)}</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button 
                onClick={onCheckout}
                className="w-full bg-gray-800 text-white py-3 rounded hover:bg-gray-900 transition-colors"
              >
                Go to checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Checkout Order Summary Component
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

// Checkout Form Component
const CheckoutForm = ({ onOrderComplete, userInfo }) => {
  const [formData, setFormData] = useState({
    firstName: userInfo?.name?.split(' ')[0] || '',
    lastName: userInfo?.name?.split(' ').slice(1).join(' ') || '',
    street: '',
    city: '',
    phone: userInfo?.phone || '',
    email: userInfo?.email || '',
    deliveryTime: 'asap',
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
    const requiredFields = ['firstName', 'lastName', 'street', 'city', 'phone', 'email'];
    const missingFields = requiredFields.filter(field => !formData[field].trim());
    
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return;
    }
    
    onOrderComplete(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-6">
      <div>
        <h3 className="text-lg font-semibold border-b pb-3 mb-4 flex items-center">
          <User className="mr-3 text-blue-600" size={20} />
          Basic Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Street and Number *</label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold border-b pb-3 mb-4 flex items-center">
          <Package className="mr-3 text-blue-600" size={20} />
          Delivery
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Time</label>
            <select
              name="deliveryTime"
              value={formData.deliveryTime}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="asap">As fast as possible</option>
              <option value="1hour">In one hour</option>
              <option value="2hours">In two hours</option>
            </select>
          </div>
        </div>
      </div>

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

// Mobile Menu Component
const MobileMenu = ({ isOpen, onClose, currentPage, onNavigate, userRegistered }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-xl">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">Soup</span>
            <button onClick={onClose} className="text-gray-500">
              <X size={24} />
            </button>
          </div>
        </div>
        <nav className="p-4">
          <div className="space-y-4">
            <button 
              onClick={() => { onNavigate('landing'); onClose(); }}
              className={`block w-full text-left hover:text-gray-900 ${currentPage === 'landing' ? 'text-gray-900 font-semibold' : 'text-gray-700'}`}
            >
              Home
            </button>
            {userRegistered && (
              <button 
                onClick={() => { onNavigate('menu'); onClose(); }}
                className={`block w-full text-left hover:text-gray-900 ${currentPage === 'menu' ? 'text-gray-900 font-semibold' : 'text-gray-700'}`}
              >
                Menu
              </button>
            )}
            <a href="#" className="block text-gray-700 hover:text-gray-900">About</a>
            <a href="#" className="block text-gray-700 hover:text-gray-900">Contact</a>
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

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-4">Soup</div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">Latest News</h3>
            <div className="space-y-3">
              <div>
                <a href="#" className="text-white hover:text-gray-300 text-sm block">
                  How to create effective web design?
                </a>
                <span className="text-gray-400 text-xs">February 14, 2015</span>
              </div>
              <div>
                <a href="#" className="text-white hover:text-gray-300 text-sm block">
                  Awesome weekend in Polish mountains!
                </a>
                <span className="text-gray-400 text-xs">February 14, 2015</span>
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
          Copyright Soup 2024©. Made with React.
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const RestaurantApp = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [userRegistered, setUserRegistered] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [openCategories, setOpenCategories] = useState({ Burgers: true });
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = (page) => {
    setCurrentPage(page);
    setIsCartOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleRegistrationComplete = (formData) => {
    console.log('Registration completed with data:', formData);
    setUserInfo(formData);
    setUserRegistered(true);
    setCurrentPage('menu'); // Explicitly set the page to menu
  };

  const toggleCategory = (category) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const addToCart = (item) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    navigate('checkout');
  };

  const handleOrderComplete = (formData) => {
    alert(`Thank you ${formData.firstName}! Your order has been placed successfully. You will receive a confirmation email shortly.`);
    setCartItems([]);
    navigate('menu');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onRegistrationComplete={handleRegistrationComplete} />;

      case 'menu':
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
                    onToggle={toggleCategory}
                    onAddToCart={addToCart}
                  />
                ))}
              </div>
            </div>
          </main>
        );

      case 'checkout':
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
                    onUpdateQuantity={updateQuantity}
                    onRemoveItem={removeFromCart}
                  />
                </div>
                <div className="lg:col-span-2">
                  <CheckoutForm 
                    onOrderComplete={handleOrderComplete} 
                    userInfo={userInfo}
                  />
                </div>
              </div>
            </div>
          </main>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage !== 'landing' && (
        <Header 
          cartItems={cartItems}
          onCartToggle={() => setIsCartOpen(true)}
          onMobileMenuToggle={() => setIsMobileMenuOpen(true)}
          currentPage={currentPage}
          onNavigate={navigate}
          userRegistered={userRegistered}
        />
      )}
      
      {renderCurrentPage()}

      {currentPage !== 'landing' && <Footer />}

      {userRegistered && (
        <CartPanel
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
          onCheckout={handleCheckout}
        />
      )}

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentPage={currentPage}
        onNavigate={navigate}
        userRegistered={userRegistered}
      />
    </div>
  );
};

export default RestaurantApp;