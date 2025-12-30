import React from 'react';
import { FaUtensils, FaHeart, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = ({ appInfo }) => {
  const currentYear = new Date().getFullYear();

  const developers = [
    { name: 'Nour Eldin Mohamed', github: 'https://github.com/Noureqo1' },
    { name: 'Rana Hazem Almahdy', github: 'https://github.com/rana7azem' },
    { name: 'Wafaa Abdulrazek', github: 'https://github.com/wafaaabdulrazek' },
    { name: 'Hala Mohamed Salah', github: 'https://github.com/HalaMohamed1' }
  ];

  const appGithub = 'https://github.com/rana7azem/food_recipes_app';

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <FaUtensils className="logo-icon" />
              <span>{appInfo?.name || 'Flavor Fiesta'}</span>
            </div>
            <p>Your ultimate kitchen companion for discovering and cooking delicious recipes from around the world.</p>
            <a href={appGithub} className="app-github-link" target="_blank" rel="noopener noreferrer">
              <FaGithub /> View on GitHub
            </a>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#screenshots">Screenshots</a></li>
              <li><a href="#video">Video</a></li>
              <li><a href="#download">Download</a></li>
              <li><a href="#team">Team</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Developers</h4>
            <ul>
              {developers.map((dev, index) => (
                <li key={index}>
                  <a href={dev.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="dev-github-icon" /> {dev.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Flavor Fiesta. All rights reserved.
          </p>
          <p className="made-with">
            Made with <FaHeart className="heart-icon" /> by the Flavor Fiesta Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
