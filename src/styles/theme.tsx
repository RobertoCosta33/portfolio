import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f5f5f5",
      paper: "#fff",
    },
    text: {
      primary: "#333",
    },
    primary: {
      main: "#6200ee",
    },
    secondary: {
      main: "#414757",
    },
    error: {
      main: "#f13a59",
    },
    success: {
      main: "#00B386",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#333",
      paper: "#424242",
    },
    text: {
      primary: "#f5f5f5",
    },
    primary: {
      main: "#BB86FC",
    },
    secondary: {
      main: "#03DAC6",
    },
    error: {
      main: "#CF6679",
    },
    success: {
      main: "#4CAF50",
    },
  },
});

export const defaultTheme = { light: lightTheme, dark: darkTheme };
