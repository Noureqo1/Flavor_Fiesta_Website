import React, { useState } from 'react';
import { FaUtensils, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = ({ appInfo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <FaUtensils className="logo-icon" />
          <span>{appInfo?.name || 'Flavor Fiesta'}</span>
        </div>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#screenshots" onClick={() => setIsMenuOpen(false)}>Screenshots</a>
          <a href="#video" onClick={() => setIsMenuOpen(false)}>Video</a>
          <a href="#download" onClick={() => setIsMenuOpen(false)}>Download</a>
          <a href="#team" onClick={() => setIsMenuOpen(false)}>Team</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
