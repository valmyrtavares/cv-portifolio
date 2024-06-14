import React from "react";
//import { Icon } from '@iconify/react';
import Header from "../components/Header";
//import ListProjects from './ListProjects';
import gif from "../assets/SegundoGifTeste.gif"; // Importando o GIF

import "../styles/pages/projects.scss";

const Projects = () => {
  return (
    <div className="dark-background">
      <Header />
      <section>
        <h1>Projeto CMS Angular Casa de veraneio</h1>
        <div className="project-container">
          <img src={gif} alt="Gif do projeto" />
          <div>
            <p style={{ color: "white" }}>
              Esse é um projeto sobre uma casa de veraneio com CMS que
              proporciona o completo gerenciamento pelo administrador do
              empreendimento para adicionar imagens, promoções, parcerias, redes
              sociais no estilo wordpress.{" "}
            </p>
            <p>
              Foi completamente construído com Angular e Mobile First. Aqui
              temos uma breve apresentação das partes principais do projeto
              facilitando o entendimento desde o design até o código de todas as
              partes.
            </p>
            <p>
              O backend foi todo desenvolvido com as ferramentas realtime e
              storage da plataforma firebase do google, criando toda a parte
              administrativa do usuário, fazendo com que as todas as imagens
              possam ser selecionadas diretamente da plataforma do usuário tanto
              no desktop quanto no mobile.
            </p>
            <a src="www.google.com">Documentação do projeto</a>
          </div>
          <img src={gif} alt="Gif do projeto" />
          <div>
            <p style={{ color: "white" }}>
              Esse é um projeto sobre uma casa de veraneio com CMS que
              proporciona o completo gerenciamento pelo administrador do
              empreendimento para adicionar imagens, promoções, parcerias, redes
              sociais no estilo wordpress.{" "}
            </p>
            <p>
              Foi completamente construído com Angular e Mobile First. Aqui
              temos uma breve apresentação das partes principais do projeto
              facilitando o entendimento desde o design até o código de todas as
              partes.
            </p>
            <p>
              O backend foi todo desenvolvido com as ferramentas realtime e
              storage da plataforma firebase do google, criando toda a parte
              administrativa do usuário, fazendo com que as todas as imagens
              possam ser selecionadas diretamente da plataforma do usuário tanto
              no desktop quanto no mobile.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Projects;
