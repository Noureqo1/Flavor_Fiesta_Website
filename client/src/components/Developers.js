import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './Developers.css';

const Developers = ({ data }) => {
  const defaultTeam = [
    { name: 'Nour Eldin Mohamed', role: 'Fullstack Mobile Developer', avatar: '👨‍💻', github: 'https://github.com/Noureqo1' },
    { name: 'Rana Hazem Almahdy', role: 'Fullstack Mobile Developer', avatar: '👩‍💻', github: 'https://github.com/rana7azem' },
    { name: 'Wafaa Abdulrazek', role: 'Fullstack Mobile Developer', avatar: '👩‍💻', github: 'https://github.com/wafaaabdulrazek' },
    { name: 'Hala Mohamed Salah', role: 'Fullstack Mobile Developer', avatar: '👩‍💻', github: 'https://github.com/HalaMohamed1' }
  ];

  const team = data?.team || defaultTeam;

  return (
    <section id="team" className="developers">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Made With ❤️</span>
          <h2>Meet the Developers</h2>
          <p className="section-subtitle">
            The talented developers who brought Flavor Fiesta to life
          </p>
        </div>

        <div className="team-grid">
          {team.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="member-avatar">
                <span>{member.avatar || '👤'}</span>
              </div>
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <div className="member-socials">
                <a href={member.github || '#'} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developers;
