import { ReactNode } from "react";
import * as S from "./styles";

interface IMainContentProps {
  children: ReactNode;
  isVisible: boolean;
  handleCloseMenu: () => void;
}

const MainContent = ({
  children,
  isVisible,
  handleCloseMenu,
}: IMainContentProps) => {
  return (
    <S.MainContentWrapper isVisible={isVisible} onClick={handleCloseMenu}>
      {children}

      <S.Overlay />
    </S.MainContentWrapper>
  );
};

export default MainContent;
