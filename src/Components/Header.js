import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">FREE SHIPPING ON ALL ORDERS ABOVE Rs 1099/-</div>
      <nav>
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#shop">SHOP</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#faqs">FAQs</a></li>
          <li><a href="#connect">CONNECT</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
