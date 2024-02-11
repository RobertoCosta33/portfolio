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

export const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Home":
      return <Home />;
    case "Info":
      return <Info />;
    case "Mail":
      return <Mail />;
    case "Code":
      return <Code />;
    case "ThreeDRotation":
      return <ThreeDRotation />;
    case "Edit":
      return <Edit />;
    case "List":
      return <List />;
    case "Description":
      return <Description />;
    default:
      return null;
  }
};
