import { ReactNode } from "react";
import * as S from "./styles";
import { Typography } from "@mui/material";

interface IMainContentProps {
  children: ReactNode;
}

const MainContent = ({ children }: IMainContentProps) => {
  return (
    <S.MainContentWrapper>
      <Typography variant="h1">MainContent</Typography>
      {children}
    </S.MainContentWrapper>
  );
};

export default MainContent;
