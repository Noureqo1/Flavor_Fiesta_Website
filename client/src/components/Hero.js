import React from 'react';
import { FaApple, FaAndroid } from 'react-icons/fa';
import Lottie from 'lottie-react';
import foodLoadingAnimation from '../assets/animations/Food Loading.json';
import cookbookIcon from '../assets/imeges/cook-book.png';
import './Hero.css';

const Hero = ({ appInfo }) => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-shape shape-1"></div>
        <div className="hero-shape shape-2"></div>
        <div className="hero-shape shape-3"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{appInfo?.tagline || 'Discover Delicious Recipes Every Day'}</h1>
            <p className="hero-subtitle">
              Cook amazing meals with step-by-step instructions, video tutorials, 
              and personalized meal planning. Your kitchen companion awaits!
            </p>
            <div className="hero-buttons">
              <a href="#download" className="btn btn-primary">
                <FaApple /> iOS
              </a>
              <a href="#download" className="btn btn-secondary">
                <FaAndroid /> Android
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-icon-large">
                  <img src={cookbookIcon} alt="Flavor Fiesta" />
                </div>
                <h3>Flavor Fiesta</h3>
                <p>Your Kitchen Companion</p>
                <div className="loading-animation">
                  <Lottie animationData={foodLoadingAnimation} loop={true} style={{ width: 120, height: 120 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
