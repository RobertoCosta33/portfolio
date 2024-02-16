import {
  Card,
  CardContent,
  Divider,
  IconButton,
  Tooltip,
  TooltipProps,
  Typography,
  styled,
  tooltipClasses,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { IGetRepoInfosProps } from "@/pages/api/GithubServices";
import { ContentCopy } from "@mui/icons-material";
import * as S from "./styles";

const RepositoriesTemplate = () => {
  const [repoInfos, setRepoInfos] = useState<IGetRepoInfosProps[]>([]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  useEffect(() => {
    const getMenuItems = async () => {
      const { data } = await axios.get("/api/GithubServices");
      setRepoInfos(data);
    };

    getMenuItems();
  }, []);

  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      fontSize: theme.typography.pxToRem(14),
      padding: "0.8rem",
    },
  }));

  return (
    <>
      <S.TitleWrapper>
        <Typography variant="h1">Repositórios</Typography>
      </S.TitleWrapper>
      
      <S.ContactsWrapper>
        {repoInfos.map(({ id, name, description, html_url }) => (
          <div key={id}>
            <article>
              <S.Card variant="elevation">
                <S.CardContent>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.2rem",
                    }}
                  >
                    <Typography variant="h2">Nome: {name}: </Typography>

                    <HtmlTooltip
                      title={`Copiar link do repositório: ${name}`}
                      arrow
                      placement="top"
                    >
                      <IconButton onClick={() => handleCopy(html_url)}>
                        <ContentCopy fontSize="small" />
                      </IconButton>
                    </HtmlTooltip>
                  </div>

                  <S.Divider />

                  {description && (
                    <HtmlTooltip title={`${description}`} arrow placement="top">
                      <S.Typography>Descrição: {description}</S.Typography>
                    </HtmlTooltip>
                  )}
                </S.CardContent>
              </S.Card>
            </article>
          </div>
        ))}
      </S.ContactsWrapper>
    </>
  );
};

export default RepositoriesTemplate;
