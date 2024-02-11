import {
  Divider,
  Link,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Typography,
} from "@mui/material";
import {
  Home,
  Info,
  Mail,
  Code,
  ThreeDRotation,
  Edit,
  List,
  Description,
} from "@mui/icons-material";
import * as S from "./styles";

const MenuList = () => {
  const listItems = [
    { text: "Home", icon: <Home />, id: "1", href: "/" },
    { text: "Sobre", icon: <Info />, id: "2", href: "/sobre" },
    { text: "Contato", icon: <Mail />, id: "3", href: "/contato" },
    { text: "Repositórios", icon: <Code />, id: "4", href: "/repositorios" },
  ];

  const demoItems = [
    {
      text: "Projetos 3D",
      icon: <ThreeDRotation />,
      id: "5",
      href: "/projetos_3d",
    },
    { text: "CRUD", icon: <Edit />, id: "6", href: "/crud" },
    { text: "Lista", icon: <List />, id: "7", href: "/lista" },
    { text: "Formulário", icon: <Description />, id: "8", href: "/formulario" },
  ];

  return (
    <S.Menu>
      {listItems.map(({ text, icon, id, href }) => (
        <Link href={href} key={id} underline="none">
          <MenuItem divider>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>
              <Typography variant="h6">{text}</Typography>
            </ListItemText>
          </MenuItem>
        </Link>
      ))}

      <Divider sx={{ margin: "4rem 0" }}>
        <Typography variant="h6">Exemplos</Typography>
      </Divider>

      {demoItems.map(({ text, icon, id, href }) => (
        <Link href={href} key={id} underline="none">
          <MenuItem divider>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>
              <Typography variant="h6">{text}</Typography>
            </ListItemText>
          </MenuItem>
        </Link>
      ))}
    </S.Menu>
  );
};

export default MenuList;
