import { Avatar, Divider, Typography } from "@mui/material";
import romeroImage from "../../../public/images/romero.jpeg";
import MenuList from "./MenuList";
import * as S from "./styles";
import MediaMatch from "../MediaMatch";

interface SidebarProps {
  isVisible?: boolean;
}

const Sidebar = ({ isVisible = true }: SidebarProps) => {
  const { isTablet, isMobile } = MediaMatch();

  const imageDimenssions = isMobile ? "4rem" : isTablet ? "6rem" : "8rem";

  return (
    <S.SidebarWrapper isVisible={isVisible}>
      <S.AvatarWrapper>
        <Avatar
          alt="Remy Sharp"
          src={romeroImage.src}
          sx={{
            width: `${imageDimenssions}`,
            height: `${imageDimenssions}`,
          }}
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
