import { ReactNode } from "react";
import * as S from "./styles";
import { useMenu } from "@/contexts/MenuContext";

interface IMainContentProps {
  children: ReactNode;
}

const MainContent = ({ children }: IMainContentProps) => {
  const { visible, setIsVisible } = useMenu();

  return (
    <S.MainContentWrapper visible={visible} onClick={() => setIsVisible(false)}>
      {children}

      <S.Overlay />
    </S.MainContentWrapper>
  );
};

export default MainContent;
