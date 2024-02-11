import {
  Avatar,
  Divider,
  Typography,
} from "@mui/material";
import romeroImage from "../../../public/images/romero.jpeg";
import MenuList from "./MenuList";
import * as S from "./styles";

const Sidebar = () => {
  return (
    <S.SidebarWrapper>
      <S.AvatarWrapper>
        <Avatar
          alt="Remy Sharp"
          src={romeroImage.src}
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
