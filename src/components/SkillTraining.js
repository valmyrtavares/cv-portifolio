import React from 'react';
import { Icon } from '@iconify/react';
import hardSkillsIcons from '../data/hardSkillsIcons';
import '../styles/pages/about.scss';

const SkillTraining = () => {
  return (
    <section className="about-container about-skills">
      <p className="about-skills-p">SKILLS</p>
      <div className="about-skill">
        {hardSkillsIcons.map((icon, index) => (
          <div key={index} className="about-div-icon">
            <Icon icon={icon.icon} className={`${icon.className} icon-class`} />
            <p className="about-icon-text">{icon.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillTraining;
