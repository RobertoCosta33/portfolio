import {
  Divider,
  Link,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Typography,
} from "@mui/material";
import * as S from "./styles";
import { useEffect, useState } from "react";
import { IMenuItemsProps } from "@/pages/api/RedirectMenuItemsService";
import { IExamplesItemsProps } from "@/pages/api/RedirectExamplesItemsService";
import axios from "axios";
import { getIcon } from "./iconMenus";
import MediaMatch from "@/components/MediaMatch";

const MenuList = () => {
  const { isSmartphone } = MediaMatch();

  const [menuItems, setMenuItems] = useState<IMenuItemsProps[]>([]);
  const [exampleItems, setExampleItems] = useState<IExamplesItemsProps[]>([]);

  useEffect(() => {
    const getMenuItems = async () => {
      const { data } = await axios.get("/api/RedirectMenuItemsService");
      setMenuItems(data);
    };

    getMenuItems();
  }, []);

  useEffect(() => {
    const getExamplesItems = async () => {
      const { data } = await axios.get("/api/RedirectExamplesItemsService");
      setExampleItems(data);
    };

    getExamplesItems();
  }, []);

  return (
    <S.Menu>
      {menuItems.map(({ text, id, icon, href }) => (
        <Link href={href} key={id} underline="none">
          <MenuItem divider>
            <ListItemIcon>{getIcon(icon)}</ListItemIcon>
            <ListItemText
              sx={{ display: `${isSmartphone ? "none" : "inline-block"}` }}
            >
              <Typography variant="h6">{text}</Typography>
            </ListItemText>
          </MenuItem>
        </Link>
      ))}

      <Divider
        sx={{
          margin: "4rem 0",
          display: `${isSmartphone ? "none" : "flex"}`,
        }}
      >
        <Typography variant="h6">Exemplos</Typography>
      </Divider>

      {exampleItems.map(({ text, icon, id, href }) => (
        <Link href={href} key={id} underline="none">
          <MenuItem divider>
            <ListItemIcon>{getIcon(icon)}</ListItemIcon>
            <ListItemText
              sx={{ display: `${isSmartphone ? "none" : "inline-block"}` }}
            >
              <Typography variant="h6">{text}</Typography>
            </ListItemText>
          </MenuItem>
        </Link>
      ))}
    </S.Menu>
  );
};

export default MenuList;
