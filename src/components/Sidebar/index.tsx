import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import RomeroImage from "../../../public/images/romero.jpeg";
import MenuList from "./MenuList";
import * as S from "./styles";

const Sidebar = () => {
  return (
    <S.SidebarWrapper>
      <S.AvatarWrapper>
        <Avatar
          alt="Remy Sharp"
          src={RomeroImage.src}
          sx={{ width: "9rem", height: "9rem" }}
        />

        <Typography gutterBottom variant="h5">
          Roberto B. Costa
        </Typography>
      </S.AvatarWrapper>

      <Divider
        sx={{
          marginTop: "1.2rem",
          marginBottom: "2.4rem",
        }}
      />

      <MenuList />
    </S.SidebarWrapper>
  );
};

export default Sidebar;
