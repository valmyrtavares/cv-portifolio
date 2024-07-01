/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ReactGA from 'react-ga';
import Profile from '../components/Profile';
import Header from '../components/Header';
import SocialMedia from '../components/SocialMedia';
//import SkillTraining from "../components/SkillTraining";

import '../styles/pages/about.scss';

const About = () => {
  const [language, setLanguage] = React.useState(true);

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  function handleLaguage() {
    language ? setLanguage(false) : setLanguage(true);
  }

  return (
    <div className="all-about">
      <Header />
      <button onClick={handleLaguage}>
        {language ? 'English' : ' Portugues '}
      </button>
      <section className="about">
        <Profile language={language} />

        <SocialMedia />
      </section>
    </div>
  );
};

export default About;
