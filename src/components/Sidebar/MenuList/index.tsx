import {
  Link,
  ListItemIcon,
  ListItemText,
  MenuList as Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Home, Info, Mail, Code } from "@mui/icons-material";
import { useRouter } from "next/router";

const MenuList = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const listItems = [
    { text: "Home", icon: <Home />, id: "1", href: "/" },
    { text: "Sobre", icon: <Info />, id: "2", href: "/sobre" },
    { text: "Contato", icon: <Mail />, id: "3", href: "/contato" },
    { text: "Repositórios", icon: <Code />, id: "4", href: "/repositorios" },
  ];

  return (
    <Menu>
      {listItems.map(({ text, icon, id, href }) => (
        <Link href={href} key={id} underline="none">
          <MenuItem
            sx={{
              padding: "0.8rem",
            }}
            divider
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>
              <Typography variant="h6">{text}</Typography>
            </ListItemText>
          </MenuItem>
        </Link>
      ))}
    </Menu>
  );
};

export default MenuList;
