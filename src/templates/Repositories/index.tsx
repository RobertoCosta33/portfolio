import {
  Divider,
  IconButton,
  Tooltip,
  TooltipProps,
  Typography,
  styled,
  tooltipClasses,
} from "@mui/material";
import * as S from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { IGetRepoInfosProps } from "@/pages/api/GithubServices";
import { ContentCopy } from "@mui/icons-material";

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
    <S.ContactsWrapper>
      <S.TitleWrapper>
        <Typography variant="h1">Repositórios</Typography>
      </S.TitleWrapper>

      {repoInfos.map(({ id, name, html_url }) => (
        <div key={id}>
          <article>
            <Typography variant="h2">{name}: </Typography>

            <HtmlTooltip
              title={`Copiar link do repositório: ${name}`}
              arrow
              placement="top"
            >
              <IconButton onClick={() => handleCopy(html_url || "")}>
                <ContentCopy fontSize="small" />
              </IconButton>
            </HtmlTooltip>
          </article>

          <Divider sx={{ width: "100%", bgcolor: "ActiveBorder" }} />
        </div>
      ))}
    </S.ContactsWrapper>
  );
};

export default RepositoriesTemplate;
