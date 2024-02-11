import { ReactNode } from "react";
import * as S from "./styles";

interface IMainContentProps {
  children: ReactNode;
}

const MainContent = ({ children }: IMainContentProps) => {
  return (
    <S.MainContentWrapper>
      {children}
    </S.MainContentWrapper>
  );
};

export default MainContent;
