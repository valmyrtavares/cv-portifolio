import React from 'react';
//import { Icon } from '@iconify/react';
import Header from '../components/Header';
//import ListProjects from './ListProjects';
import desk from '../assets/desktop.gif'; // Importando o GIF
import mobile from '../assets/mobile.gif'; // Importando o GIF

import '../styles/pages/projects.scss';

const Projects = () => {
  return (
    <div className="dark-background">
      <Header />
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
        <div className="project-text">
          <p>
            Esse é um projeto sobre uma casa de veraneio com CMS que proporciona
            o completo gerenciamento pelo administrador do empreendimento para
            adicionar imagens, promoções, parcerias, redes sociais no estilo
            wordpress.{' '}
          </p>
          <p>
            Foi completamente construído com Angular e Mobile First. Aqui temos
            uma breve apresentação das partes principais do projeto facilitando
            o entendimento desde o design até o código de todas as partes.
          </p>
          <p>
            O backend foi todo desenvolvido com as ferramentas realtime e
            storage da plataforma firebase do google, criando toda a parte
            administrativa do usuário, fazendo com que as todas as imagens
            possam ser selecionadas diretamente da plataforma do usuário tanto
            no desktop quanto no mobile. O backend foi todo desenvolvido com as
            ferramentas realtime e storage da plataforma firebase do google,
            criando toda a parte administrativa do usuário, fazendo com que as
            todas as imagens possam ser selecionadas diretamente da plataforma
            do usuário tanto no desktop quanto no mobile.
          </p>
          <p>
            O backend foi todo desenvolvido com as ferramentas realtime e
            storage da plataforma firebase do google, criando toda a parte
            administrativa do usuário, fazendo com que as todas as imagens
            possam ser selecionadas diretamente da plataforma do usuário tanto
            no desktop quanto no mobile. O backend foi todo desenvolvido com as
            ferramentas realtime e storage da plataforma firebase do google,
            criando toda a parte administrativa do usuário, fazendo com que as
            todas as imagens possam ser selecionadas diretamente da plataforma
            do usuário tanto no desktop quanto no mobile.
          </p>
          <a src="www.google.com">Documentação do projeto</a>
        </div>
      </section>
    </div>
  );
};
export default Projects;
