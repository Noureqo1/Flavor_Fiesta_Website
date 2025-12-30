import React, { useState } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';
import './VideoSection.css';

const VideoSection = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoUrl = data?.video?.url || 'https://www.youtube.com/embed/ipG1hKtvILw';

  return (
    <section id="video" className="video-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">App Preview</span>
          <h2>Watch How It Works</h2>
          <p className="section-subtitle">
            See our app in action and discover how easy it is to find and cook amazing recipes
          </p>
        </div>

        <div className="video-container">
          {!isPlaying ? (
            <div className="video-thumbnail" onClick={() => setIsPlaying(true)}>
              <div className="thumbnail-content">
                <div className="video-icon-wrapper">
                  <span className="video-icon">🍳</span>
                </div>
                <h3>Flavor Fiesta App Demo</h3>
                <p>Click to watch the video</p>
              </div>
              <button className="play-button">
                <FaPlay />
              </button>
              <div className="video-overlay"></div>
            </div>
          ) : (
            <div className="video-player">
              <button className="close-video" onClick={() => setIsPlaying(false)}>
                <FaTimes />
              </button>
              <iframe
                src={`${videoUrl}?autoplay=1`}
                title="App Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>

        <div className="video-features">
          <div className="video-feature">
            <span className="feature-num">01</span>
            <h4>Browse & Search</h4>
            <p>Find recipes by ingredients, cuisine, or cooking time</p>
          </div>
          <div className="video-feature">
            <span className="feature-num">02</span>
            <h4>Cooking Timer</h4>
            <p>Built-in timer keeps you on track while cooking</p>
          </div>
          <div className="video-feature">
            <span className="feature-num">03</span>
            <h4>Cloud Sync</h4>
            <p>Save and sync your recipes across all devices</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
