import MediaMatch from "../MediaMatch";
import { Menu, Close } from "@mui/icons-material";
import * as S from "./styles";
import { useMenu } from "@/contexts/MenuContext";

interface INavbarProps {
  children?: React.ReactNode;
}

const Navbar = ({ children }: INavbarProps) => {
  const { visible, setIsVisible } = useMenu();
  const mediaMath = MediaMatch();

  return (
    <S.NavbarWrapper>
      {mediaMath.isDesktop && children}

      {!mediaMath.isDesktop && (
        <S.NavbarContent>
          <div>
            {!visible && <Menu onClick={() => setIsVisible(!visible)} />}
            {visible && <Close onClick={() => setIsVisible(false)} />}
          </div>

          <div>{children}</div>
        </S.NavbarContent>
      )}
    </S.NavbarWrapper>
  );
};

export default Navbar;
