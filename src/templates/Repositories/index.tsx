import { Typography } from "@mui/material";
import * as S from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { IGetRepoInfosProps } from "@/pages/api/GithubServices";

const RepositoriesTemplate = () => {
  const [repoInfos, setRepoInfos] = useState<IGetRepoInfosProps[]>([]);

  useEffect(() => {
    const getMenuItems = async () => {
      const { data } = await axios.get("/api/GithubServices");
      setRepoInfos(data);
    };

    getMenuItems();
  }, [repoInfos]);
  
  console.log('repoInfos', repoInfos)

  return (
    <S.ContactsWrapper>
      <S.TitleWrapper>
        <Typography variant="h1">Repositórios</Typography>
      </S.TitleWrapper>

      {
        repoInfos.map((repo) => (
          <article key={repo.id}>
            <Typography variant="h2">{repo.name}</Typography>
            <Typography variant="h3">{repo.description}</Typography>
          </article>
        ))
      }

      <article>
        <Typography variant="h2">Nome do repositório</Typography>
        <Typography variant="h3">Descrição do repositório</Typography>
      </article>
    </S.ContactsWrapper>
  );
};

export default RepositoriesTemplate;
