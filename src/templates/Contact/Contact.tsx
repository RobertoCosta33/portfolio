import {
  Divider,
  Icon,
  IconButton,
  Tooltip,
  TooltipProps,
  Typography,
  styled,
  tooltipClasses,
} from "@mui/material";
import { ContentCopy } from "@mui/icons-material";
import articles from "./articles";
import * as S from "./styles";

const ContactTemplate = () => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      fontSize: theme.typography.pxToRem(14),
      padding: "0.8rem",
    },
  }));

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

              <HtmlTooltip
                title={`Copiar contato: ${text}`}
                arrow
                placement="top"
              >
                <IconButton onClick={() => handleCopy(text || "")}>
                  <ContentCopy fontSize="small" />
                </IconButton>
              </HtmlTooltip>
            </article>

            <Divider sx={{ width: "100%", bgcolor: "ActiveBorder" }} />
          </div>
        );
      })}
    </S.ContactsWrapper>
  );
};

export default ContactTemplate;
