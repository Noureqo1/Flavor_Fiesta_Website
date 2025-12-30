import React from 'react';
import { FaSearch, FaPlusCircle, FaClipboardList, FaClock, FaBell, FaUserShield, FaCloud, FaMoon } from 'react-icons/fa';
import './Description.css';

const Description = ({ appInfo }) => {
  const features = [
    {
      icon: <FaSearch />,
      title: 'Browse & Search Recipes',
      description: 'Easily find recipes by name, ingredients, or cuisine type.'
    },
    {
      icon: <FaPlusCircle />,
      title: 'Add Custom Recipes',
      description: 'Create and save your own custom recipes to your collection.'
    },
    {
      icon: <FaClipboardList />,
      title: 'Cooking Checklists',
      description: 'Create step-by-step cooking checklists for organized meal prep.'
    },
    {
      icon: <FaClock />,
      title: 'Built-in Timer',
      description: 'Never overcook again with our built-in cooking timer.'
    },
    {
      icon: <FaBell />,
      title: 'Cooking Reminders',
      description: 'Get notifications for cooking reminders and timers.'
    },
    {
      icon: <FaUserShield />,
      title: 'User Authentication',
      description: 'Secure sign up and login to protect your recipes.'
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Sync',
      description: 'Sync your recipes across devices with Firebase.'
    },
    {
      icon: <FaMoon />,
      title: 'Theme Support',
      description: 'Switch between light and dark mode for comfortable viewing.'
    }
  ];

  return (
    <section id="features" className="description">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Features</span>
          <h2>Everything You Need to Cook Amazing Meals</h2>
          <p className="section-subtitle">
            Flavor Fiesta is your ultimate kitchen companion with all the features you need.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Description;
