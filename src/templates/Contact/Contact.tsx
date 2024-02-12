import { Divider, Icon, IconButton, Typography } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";
import articles from './articles'
import * as S from "./styles";

const ContactTemplate = () => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <S.ContactsWrapper>
      <S.TitleWrapper>
        <Typography variant="h1">Meus contatos</Typography>
      </S.TitleWrapper>

      {articles.map(({ id, icon, text }) => {
        return (
          <div key={id}>
            <article>
              <Typography>
                <Icon>{icon}</Icon>
              </Typography>
              <Typography>{text}</Typography>

              <IconButton onClick={() => handleCopy(text || "")}>
                <ContentCopy fontSize="small" />
              </IconButton>
            </article>

            <Divider sx={{ width: "100%" }} variant="fullWidth" />
          </div>
        );
      })}
    </S.ContactsWrapper>
  );
};

export default ContactTemplate;
