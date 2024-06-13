/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ReactGA from "react-ga";
//import { Icon } from "@iconify/react";
//import hardSkillsIcons from "../data/hardSkillsIcons";
import image from "../styles/images/PersonalPhoto.PNG";

import Header from "../components/Header";
import SocialMedia from "../components/SocialMedia";

import "../styles/pages/about.scss";

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
        {language ? "English" : " Portugues "}
      </button>
      <section className="about">
        <div className="container">
          <div className="texts">
            {language ? (
              <section className="about-text">
                <p>
                  <span>Olá,</span>{" "}
                </p>

                <p>
                  Desenvolvedor Front End com experiência profissional nos
                  principais frameworks <span>javascript/typescript</span> como
                  <span> Vue.js, Angular e React</span>
                </p>

                <p>
                  Atua no mercado desde 2018, trabalhando em correção de bugs,
                  criação de telas e novas funcionalidades em vários sistemas.
                  No ano de 2022 e 2023 trabalhou especialmente no ramo de
                  telecomunicações na empresa Netcracker. Em 2021 e 2022 atuou
                  em sistemas de concursos públicos, que elaborava provas e
                  organizava locais de exames na empresa Fundação Carlos Chagas,
                  entre outras experiências também trabalhou na criação de
                  E-commerces na empresa Seller Face
                </p>

                <p>
                  Tem experiência em backend nas linguagens PHP e Node.js, mas
                  sempre atuou como full-satck em projetos menores free lancer
                </p>
                <p>
                  Atua no mercado desde 2018, trabalhando em correção de bugs,
                  criação de telas e novas funcionalidades em vários sistemas.
                  No ano de 2022 e 2023 trabalhou especialmente no ramo de
                  telecomunicações na empresa Netcracker. Em 2021 e 2022 atuou
                  em sistemas de concursos públicos, que elaborava provas e
                  organizava locais de exames na empresa Fundação Carlos Chagas,
                  entre outras experiências também trabalhou na criação de
                  E-commerces na empresa Seller Face
                </p>
              </section>
            ) : (
              <section>
                <p>
                  <span>Hi,</span>{" "}
                </p>

                <p>
                  Front End Developer with professional experience in major{" "}
                  <span>JavaScript/TypeScript frameworks</span> such as
                  <span> Vue.js, Angular, and React.</span>
                </p>

                <p>
                  I've been active in the market since 2018, focusing on bug
                  fixing, UI/UX design, and implementing new features across
                  various systems. In the years 2022 and 2023, I've been
                  primarily engaged in the telecommunications sector at
                  Netcracker. During 2021 and 2022, I contributed to public
                  examination systems, developing test materials and
                  coordinating examination venues at Fundação Carlos Chagas.
                  Prior to these roles, I've also contributed to E-commerce
                  projects at Seller Face company.
                </p>

                <p>
                  While my background includes some knowledge of backend
                  technologies like PHP and Node.js, my professional roles have
                  predominantly centered around frontend responsibilities. Any
                  backend experience I possess has been mainly utilized in
                  freelance projects.
                </p>
              </section>
            )}
          </div>
          <div className="profile-image">
            <img src={image} alt="profile" />
          </div>
        </div>
        {/* <section className="about-skills">
          <p className="about-skills-p">SKILLS</p>
          <div className="about-skill">
            {hardSkillsIcons.map((icon, index) => (
              <div key={index} className="about-div-icon">
                <Icon icon={icon.icon} className={icon.className} />
                <p className="about-icon-text">{icon.title}</p>
              </div>
            ))}
          </div>
        </section> */}

        <SocialMedia />
      </section>
    </div>
  );
};

export default About;
