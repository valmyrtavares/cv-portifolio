/* eslint-disable react/no-unescaped-entities */
import React from 'react';
//import { Icon } from '@iconify/react';
import Header from '../components/Header';
//import ListProjects from './ListProjects';
import desk from '../assets/desktop.gif'; // Importando o GIF
import mobile from '../assets/mobile.gif'; // Importando o GIF
import SocialMedia from '../components/SocialMedia';

import '../styles/pages/projects.scss';

const Projects = () => {
  const [language, setLanguage] = React.useState(true);
  function handleLaguage() {
    language ? setLanguage(false) : setLanguage(true);
  }

  return (
    <div className="dark-background">
      <Header />
      <button onClick={handleLaguage}>
        {language ? 'English' : ' Portugues '}
      </button>
      <section>
        <h1>Projeto CMS Angular Casa de veraneio</h1>
        <div className="project-container">
          <div>
            <h1 className="inside-title">Desktop</h1>
            <img src={desk} alt="Gif do projeto" />
          </div>
          <div>
            <h1 className="inside-title">Mobile</h1>
            <img src={mobile} alt="Gif do projeto" />
          </div>
        </div>
        {language ? (
          <div className="project-text">
            <p>
              Esse é um projeto sobre uma casa de veraneio com CMS que
              proporciona o completo gerenciamento pelo administrador do
              empreendimento para adicionar imagens, promoções, parcerias, redes
              sociais no estilo wordpress.{' '}
            </p>
            <p>
              Foi completamente construído com Angular com uma abordagem Mobile
              First, mas também tem com uma versão para desktop . A Home tem um
              formato inicial de land page, com uma grande página vertical onde
              se pode chamar as seções de objetos da casa, interiores,
              promoções, opiniões dos clientes Aqui eu ofereço uma{' '}
              <a
                href="https://docs.google.com/document/d/11DM5CFHE5VNcDCnbtJU0A14ib3OCgvuLlhsZemB-TQg/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                documentação
              </a>{' '}
              breve das partes principais do projeto facilitando o entendimento
              desde o design até o código de todas as partes.
            </p>
            <p>
              O backend foi todo desenvolvido com as ferramentas realtime e
              storage da plataforma Firebase do google, criando toda a parte
              administrativa do usuário, fazendo com que as todas as imagens
              possam ser selecionadas diretamente da plataforma do usuário tanto
              no desktop quanto no mobile. Uma solução simples e robusta para
              que o foco do projeto possa ficar no frontend.
            </p>
            <p>
              Nesse outro link você pode acessar o projeto real, navegando pelo
              projeto e tendo acesso a toda parte administrativa.{' '}
              <a
                href="https://valmyrtavares.github.io/whitehouse.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINK DO PROJETO
              </a>
            </p>
          </div>
        ) : (
          <div className="project-text">
            <p>
              This project focuses on a vacation house with a CMS, allowing the
              administrator to fully manage images, promotions, partnerships,
              and social media, much like WordPress.{' '}
            </p>
            <p>
              Built entirely with Angular using a Mobile First approach, it also
              includes a desktop version. The homepage features a landing page
              layout, with a long vertical page where you can navigate through
              sections for house amenities, interiors, promotions, and customer
              reviews. Here’s a brief{' '}
              <a
                href="https://docs.google.com/document/d/11DM5CFHE5VNcDCnbtJU0A14ib3OCgvuLlhsZemB-TQg/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                documentation
              </a>{' '}
              overview of the main parts of the project, providing clarity from
              design to code for all sections.
            </p>
            <p>
              The backend is developed using Google's Firebase platform,
              leveraging its real-time and storage tools to handle the entire
              user administration. This allows images to be selected directly
              from the user's platform, both on desktop and mobile. It’s a
              simple yet robust solution, enabling the project's focus to remain
              on the frontend.
            </p>
            <p>
              In this other link, you can access the live project, navigate
              through it, and explore the entire administrative section.{' '}
              <a
                href="https://valmyrtavares.github.io/whitehouse.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PROJECT LINK
              </a>
            </p>
          </div>
        )}

        <SocialMedia />
      </section>
    </div>
  );
};
export default Projects;
