/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import image from '../styles/images/PersonalPhoto.PNG';
import PropTypes from 'prop-types';
import SkillTraining from '../components/SkillTraining';

const Profile = ({ language }) => {
  return (
    <div className="container">
      <div className="texts item1">
        {language ? (
          <section className="about-text">
            <p>
              <span>Olá,</span>{' '}
            </p>

            <p>
              Desenvolvedor Front End com experiência profissional nos
              principais frameworks <span>javascript/typescript</span> como
              <span> Vue.js, Angular e React</span>
            </p>

            <p>
              Atua no mercado desde 2018, trabalhando em correção de bugs,
              criação de telas e novas funcionalidades em vários sistemas. No
              ano de 2022 e 2023 trabalhou especialmente no ramo de
              telecomunicações na empresa Netcracker. Em 2021 e 2022 atuou em
              sistemas de concursos públicos, que elaborava provas e organizava
              locais de exames na empresa Fundação Carlos Chagas, entre outras
              experiências também trabalhou na criação de E-commerces na empresa
              Seller Face
            </p>

            <p>
              Tem experiência em backend nas linguagens PHP e Node.js, mas
              sempre atuou como full-satck em projetos como free lancer
            </p>
            <p>
              " Eu acredito que todos os processos podem ser simplificados o
              otimizados trazendo ganho e oportunidades para toda a sociedade.
              Exatamente por isso sou tão facinado por escrever código. Porque é
              de forma prática o caminho onde qualquer um com boa vontade e
              disciplina transforma o mundo e a vida das pessoas, saindo do
              discursso teórico sustentado por tantos lideres e politicos ao
              redor do mundo, com a promessas irreais. Programar é realmente ter
              a oportunidade de transformar ideias em soluções que mudam a vida
              das pessoas, e cria um mundo senão melhor, mas mais interessante e
              funcional "
            </p>
          </section>
        ) : (
          <section>
            <p>
              <span>Hi,</span>{' '}
            </p>

            <p>
              Front End Developer with professional experience in major{' '}
              <span>JavaScript/TypeScript frameworks</span> such as
              <span> Vue.js, Angular, and React.</span>
            </p>
            <p>
              I've been active in the market since 2018, focusing on bug fixing,
              UI/UX design, and implementing new features across various
              systems. In the years 2022 and 2023, I've been primarily engaged
              in the telecommunications sector at Netcracker. During 2021 and
              2022, I contributed to public examination systems, developing test
              materials and coordinating examination venues at Fundação Carlos
              Chagas. Prior to these roles, I've also contributed to E-commerce
              projects at Seller Face company.
            </p>

            <p>
              While my background includes some knowledge of backend
              technologies like PHP and Node.js, my professional roles have
              predominantly centered around frontend responsibilities. Any
              backend experience I possess has been mainly utilized in freelance
              projects.
            </p>
          </section>
        )}
        <SkillTraining />
      </div>
      <div className="profile-image item2">
        <img src={image} alt="profile" />
      </div>
    </div>
  );
};

Profile.propTypes = {
  language: PropTypes.bool.isRequired,
};
export default Profile;
