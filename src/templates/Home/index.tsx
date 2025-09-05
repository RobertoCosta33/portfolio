import { Typography } from "@mui/material";
import * as S from "./styles";

const HomeTemplate = () => {
  return (
    <S.HomeWrapper>
      TESTANDO!!!
      <S.TitleWrapper>
        <Typography variant="h1">Bem-vindo ao meu portfólio!</Typography>
      </S.TitleWrapper>

      <article>
        <Typography>
          Este portfólio é um reflexo do meu compromisso com o crescimento
          contínuo e a excelência profissional. Aqui, você encontrará exemplos
          dos meus projetos mais recentes, demonstrando minha paixão pela
          criação de soluções web inovadoras e funcionais.
        </Typography>
      </article>

      <article>
        <Typography>
          Estou empolgado para compartilhar minha jornada e minhas habilidades
          com você. Explore meu portfólio e sinta-se à vontade para entrar em
          contato comigo para discutir oportunidades de colaboração ou projetos
          interessantes. Estou ansioso para conectarmos e fazer coisas incríveis
          juntos.
        </Typography>
      </article>
    </S.HomeWrapper>
  );
};

export default HomeTemplate;
