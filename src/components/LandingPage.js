import React from 'react';
import RegistrationForm from './RegistrationForm';

const LandingPage = ({ onRegistrationComplete }) => {
  return (
    <div className="min-h-screen relative">
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/api/placeholder/1920/1080')",
            filter: 'brightness(0.4)'
          }}
        ></div>
        
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
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

export default LandingPage;