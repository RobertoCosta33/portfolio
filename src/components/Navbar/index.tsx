import MediaMatch from "../MediaMatch";
import { Menu, Close } from "@mui/icons-material";
import * as S from "./styles";

interface INavbarProps {
  children?: React.ReactNode;
  isVisible?: boolean;
  handleToggleMenu?: () => void;
}

const Navbar = ({ children, isVisible, handleToggleMenu }: INavbarProps) => {
  const mediaMath = MediaMatch();

  return (
    <S.NavbarWrapper>
      {mediaMath.isDesktop && children}

      {!mediaMath.isDesktop && (
        <S.NavbarContent>
          <div>
            {!isVisible && <Menu onClick={handleToggleMenu} />}
            {isVisible && <Close onClick={handleToggleMenu} />}
          </div>

          <div>{children}</div>
        </S.NavbarContent>
      )}
    </S.NavbarWrapper>
  );
};

export default Navbar;
