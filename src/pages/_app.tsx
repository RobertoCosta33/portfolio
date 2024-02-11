import "@/styles/globalStyles.css";
import type { AppProps } from "next/app";
import * as S from "../styles/home";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import MainContent from "@/components/MainContent";
import { defaultTheme } from "@/styles/theme";
import { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as ThemeProviderMui } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  const [themeMode, setThemeMode] = useState<string>("light");

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = themeMode === "light" ? defaultTheme.light : defaultTheme.dark;

  return (
    <ThemeProvider theme={theme}>
      <ThemeProviderMui theme={theme}>
        <S.HomeWrapper>
          <Sidebar />

          <S.MainNavWrapper>
            <Navbar>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      onChange={toggleTheme}
                      checked={themeMode === "dark"}
                    />
                  }
                  label={
                    themeMode === "light" ? (
                      <Typography color={theme.palette.text.primary}>
                        Light
                      </Typography>
                    ) : (
                      <Typography color={theme.palette.text.primary}>
                        Dark
                      </Typography>
                    )
                  }
                  labelPlacement="start"
                />
              </FormGroup>
            </Navbar>
            <MainContent>
              <Component {...pageProps} />
            </MainContent>
          </S.MainNavWrapper>
        </S.HomeWrapper>
      </ThemeProviderMui>
    </ThemeProvider>
  );
}
