import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Screenshots.css';
import screenshot1 from '../assets/imeges/Screenshot_1766897677.png';
import screenshot2 from '../assets/imeges/Screenshot_1766897706.png';
import screenshot3 from '../assets/imeges/Screenshot_1766897714.png';
import screenshot4 from '../assets/imeges/Screenshot_1766897724.png';
import screenshot5 from '../assets/imeges/Screenshot_1766897738.png';
import screenshot6 from '../assets/imeges/Screenshot_1767084533.png';

const Screenshots = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Default screenshots if API data isn't loaded
  const defaultScreenshots = [
    { id: 1, title: 'Home Screen', image: screenshot1 },
    { id: 2, title: 'Recipe Details', image: screenshot2 },
    { id: 3, title: 'Search & Filter', image: screenshot3 },
    { id: 4, title: 'Meal Planner', image: screenshot4 },
    { id: 5, title: 'Shopping List', image: screenshot5 },
    { id: 6, title: 'Profile', image: screenshot6 }
  ];

  const screenshots = data?.screenshots || defaultScreenshots;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="screenshots" className="screenshots">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">App Screenshots</span>
          <h2>See the App in Action</h2>
          <p className="section-subtitle">
            Explore our beautifully designed interface that makes cooking a joy
          </p>
        </div>

        <div className="screenshots-carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>
            <FaChevronLeft />
          </button>

          <div className="carousel-container">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {screenshots.map((screenshot, index) => (
                <div className="screenshot-slide" key={screenshot.id}>
                  <div className="phone-frame">
                    <div className="phone-notch"></div>
                    <div className="screenshot-content">
                      {screenshot.image ? (
                        <img src={screenshot.image} alt={screenshot.title} className="screenshot-image" />
                      ) : (
                        <div className="mock-screen">
                          <span className="screen-emoji">{screenshot.emoji || '📱'}</span>
                          <h4>{screenshot.title}</h4>
                          <div className="mock-content">
                            <div className="mock-item"></div>
                            <div className="mock-item"></div>
                            <div className="mock-item"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="screenshot-title">{screenshot.title}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn next" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>

        <div className="carousel-dots">
          {screenshots.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <div className="screenshots-grid">
          {screenshots.slice(0, 4).map((screenshot, index) => (
            <div className="screenshot-thumb" key={screenshot.id}>
              <div className="thumb-content">
                {screenshot.image ? (
                  <img src={screenshot.image} alt={screenshot.title} className="thumb-image" />
                ) : (
                  <>
                    <span className="thumb-emoji">{screenshot.emoji || '📱'}</span>
                    <p>{screenshot.title}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
