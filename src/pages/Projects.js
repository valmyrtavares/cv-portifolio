import React from 'react';
//import { Icon } from '@iconify/react';
import Header from '../components/Header';
import ListProjects from './ListProjects';

import '../styles/pages/projects.scss';

const Projects = () => {  
    return (
      <div className="dark-background">
        <Header/>
        {/* <div className="header-social-media">
          
          <section className="header-social-media-section">
            <a href="https://www.linkedin.com/in/danielle-lsilva/" target="_blank" rel="noopener noreferrer">
              <Icon icon="akar-icons:linkedin-fill" />
            </a>
            <a href="https://github.com/daniellelsilva" target="_blank" rel="noopener noreferrer">
              <Icon icon="bi:github" />
            </a>
            <a href="https://www.instagram.com/ls_danielle/" target="_blank" rel="noopener noreferrer">
              <Icon icon="bi:instagram" />
            </a>

            <a href="mailto:danielle.luisasilva@gmail.com" target="_blank" rel="noopener noreferrer">
              <Icon icon="ant-design:mail-outlined" />
            </a>
          </section>
        </div> */}
        
        <div className="project">

        <section className='project-thumbnail-section'>
          <ListProjects />
        </section>
        
      </div>
      </div>
      
    )
  
}
export default Projects
