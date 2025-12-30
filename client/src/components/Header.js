import React from 'react';
import { FaUtensils } from 'react-icons/fa';
import './Header.css';

const Header = ({ appInfo }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <FaUtensils className="logo-icon" />
          <span>{appInfo?.name || 'Flavor Fiesta'}</span>
        </div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#screenshots">Screenshots</a>
          <a href="#video">Video</a>
          <a href="#download">Download</a>
          <a href="#team">Team</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
