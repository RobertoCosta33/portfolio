import "@/styles/globalStyles.css";
import type { AppProps } from "next/app";
import * as S from "../styles/home";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import MainContent from "@/components/MainContent";
import { defaultTheme } from "@/styles/theme";
import { useEffect, useState } from "react";
import { FormControlLabel, FormGroup, Switch, Typography } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as ThemeProviderMui } from "@mui/material";
import MediaMatch from "@/components/MediaMatch";

const App = ({ Component, pageProps }: AppProps) => {
  const { isDesktop } = MediaMatch();

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [themeMode, setThemeMode] = useState<string>("light");

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

    localStorage.setItem("theme", themeMode === "light" ? "dark" : "light");
  };

  const theme = themeMode === "light" ? defaultTheme.light : defaultTheme.dark;

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");

    if (localTheme) {
      setThemeMode(localTheme);
    }
  }, []);

  useEffect(() => {
    if (isDesktop) setIsVisible(false);
  }, [isDesktop]);

  const handleCloseMenu = () => setIsVisible(false);

  return (
    <ThemeProvider theme={theme}>
      <ThemeProviderMui theme={theme}>
        <S.HomeWrapper>
          <Sidebar isVisible={isVisible} />

          <S.MainNavWrapper>
            <Navbar
              isVisible={isVisible}
              handleToggleMenu={() => setIsVisible(!isVisible)}
            >
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
                        Claro
                      </Typography>
                    ) : (
                      <Typography color={theme.palette.text.primary}>
                        Escuro
                      </Typography>
                    )
                  }
                  labelPlacement="start"
                />
              </FormGroup>
            </Navbar>

            <MainContent
              isVisible={isVisible}
              handleCloseMenu={handleCloseMenu}
            >
              <Component {...pageProps} />
            </MainContent>
          </S.MainNavWrapper>
        </S.HomeWrapper>
      </ThemeProviderMui>
    </ThemeProvider>
  );
};

export default App;
