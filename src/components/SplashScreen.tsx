import React from 'react';
import './SplashScreen.css';

const SplashScreen: React.FC = () => {
  return (
    <div id="container">
      <div className='triangle-orange'></div>
      <div className='triangle-dark'></div>
      <img src="/assets/logos/logo-company.svg" alt="Logo" className="logo-img" />
    </div>
  );
};

export default SplashScreen;