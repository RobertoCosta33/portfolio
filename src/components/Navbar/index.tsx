import * as S from "./styles";

interface INavbarProps {
  children?: React.ReactNode;
}

const Navbar = ({ children }: INavbarProps) => {
  return <S.NavbarWrapper>{children}</S.NavbarWrapper>;
};

export default Navbar;
