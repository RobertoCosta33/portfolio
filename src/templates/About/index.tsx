import { Typography } from "@mui/material";
import * as S from "./styles";

const AboutTemplate = () => {
  return (
    <S.AboutWrapper>
      <S.TitleWrapper>
        <Typography variant="h1">Um pouco sobre mim</Typography>
      </S.TitleWrapper>
      <article>
        <Typography>
          Olá! Sou Roberto Barbosa Costa, um apaixonado por tecnologia e
          desenvolvimento web. Com 33 anos de idade, sou pai orgulhoso de uma
          adorável filhinha chamada Sofia Araújo Costa e marido dedicado da
          incrível Mirela Araújo, com quem compartilho minha jornada há mais de
          uma década.
        </Typography>
      </article>

      <article>
        <Typography>
          Minha trajetória profissional é uma mistura de experiências
          enriquecedoras. Comecei como serralherio, mergulhando nas
          complexidades da criação com metal por seis anos. Também desfrutei das
          brisas do mar como garçom de praia, uma experiência que me ensinou a
          lidar com diversas situações de forma ágil e eficaz. Além disso,
          trabalhei em um hortifruti de um supermercado, onde aprimorei minhas
          habilidades de comunicação e atendimento ao cliente. Em seguida segui
          como auxiliar de serviços gerais em um prédio, onde aprendi a
          valorizar a importância do trabalho em equipe e a dedicação ao
          serviço.
        </Typography>
      </article>

      <article>
        <Typography>
          Apesar dos desafios, nunca desisti de perseguir meus objetivos
          educacionais. Concluí o ensino médio aos 31 anos e dei início à minha
          jornada acadêmica na Universidade São Judas Tadeu, onde estudo Análise
          e Desenvolvimento de Sistemas. Este passo foi crucial para abrir
          portas para minha atual carreira como desenvolvedor frontend na
          Medroom, onde estou desde julho de 2022.
        </Typography>
      </article>

      <article>
        <Typography>
          Na Medroom, tenho o privilégio de trabalhar em uma equipe competente,
          onde aprendo e me desenvolvo diariamente. Minhas principais áreas de
          atuação incluem HTML, CSS, JavaScript, TypeScript e Next.js. Além
          disso, sou versado em metodologias ágeis como Scrum e Kanban, que têm
          sido fundamentais para aprimorar nossa eficiência e colaboração.
        </Typography>
      </article>

      <article>
        <Typography>
          Como profissional de desenvolvimento, entendo a importância do
          controle de versionamento de código, e sou habilidoso em Git,
          utilizando repositórios como GitHub, GitLab e Bitbucket para gerenciar
          nossos projetos de forma eficiente e colaborativa.
        </Typography>
      </article>
    </S.AboutWrapper>
  );
};

export default AboutTemplate;
