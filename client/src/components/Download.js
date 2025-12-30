import React from 'react';
import { FaApple, FaAndroid, FaDownload } from 'react-icons/fa';
import cookbookIcon from '../assets/imeges/cook-book.png';
import './Download.css';

const Download = ({ appInfo }) => {
  return (
    <section id="download" className="download">
      <div className="container">
        <div className="download-content">
          <div className="download-info">
            <div className="app-icon">
              <img src={cookbookIcon} alt="Flavor Fiesta" />
            </div>
            <div className="app-details">
              <h3>{appInfo?.name || 'Flavor Fiesta'}</h3>
              <p className="version">Version {appInfo?.version || '1.0.0'}</p>
            </div>
          </div>

          <div className="download-text">
            <h2>Download Now & Start Cooking!</h2>
            <p>
              Join food lovers who have discovered the joy of cooking with Flavor Fiesta. 
              Available on iOS and Android devices.
            </p>
          </div>

          <div className="download-buttons">
            <a href={appInfo?.appStoreLink || '#'} className="store-button apple">
              <FaApple className="store-icon" />
              <div className="store-text">
                <span className="small">Download on the</span>
                <span className="large">App Store</span>
              </div>
            </a>
            <a href={appInfo?.playStoreLink || 'https://drive.usercontent.google.com/download?id=1bKssqRRi11Ld7-wMK9sLWzPdOrg73U0R&export=download&authuser=0'} className="store-button google">
              <FaAndroid className="store-icon" />
              <div className="store-text">
                <span className="small">GET IT ON</span>
                <span className="large">Android</span>
              </div>
            </a>
          </div>

          <div className="download-qr">
            <div className="qr-placeholder">
              <FaDownload />
              <p>Scan QR Code</p>
            </div>
            <p className="qr-text">Scan with your phone camera to download</p>
          </div>
        </div>

        <div className="download-features">
          <div className="download-feature">
            <span className="check">✓</span>
            <span>Free to download</span>
          </div>
          <div className="download-feature">
            <span className="check">✓</span>
            <span>No ads</span>
          </div>
          <div className="download-feature">
            <span className="check">✓</span>
            <span>Offline access</span>
          </div>
          <div className="download-feature">
            <span className="check">✓</span>
            <span>Regular updates</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
