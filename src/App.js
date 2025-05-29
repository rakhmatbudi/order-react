import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import MenuPage from './components/MenuPage';
import CheckoutPage from './components/CheckoutPage';
import FAQPage from './components/FAQPage';
import CartPanel from './components/CartPanel';
import MobileMenu from './components/MobileMenu';
import { menuData } from './data/menuData';

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
    setCurrentPage('menu');
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
    alert(`Pesanan sudah kami terima dan akan segera kami antar. Terimakasih!`);
    setCartItems([]);
    navigate('menu');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onRegistrationComplete={handleRegistrationComplete} />;

      case 'menu':
        return (
          <MenuPage 
            userInfo={userInfo}
            menuData={menuData}
            openCategories={openCategories}
            onToggleCategory={toggleCategory}
            onAddToCart={addToCart}
          />
        );

      case 'checkout':
        return (
          <CheckoutPage 
            cartItems={cartItems}
            userInfo={userInfo}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeFromCart}
            onOrderComplete={handleOrderComplete}
          />
        );

      case 'faq':
        return <FAQPage />;

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