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
import MediaMatch from "@/components/MediaMatch";
import { MenuProvider, useMenu } from "@/contexts/MenuContext";

const App = ({ Component, pageProps }: AppProps) => {
  const { isDesktop } = MediaMatch();
  const { setIsVisible } = useMenu();

  const [themeMode, setThemeMode] = useState<string>();

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
  }, [isDesktop, setIsVisible]);

  return (
    <ThemeProvider theme={theme}>
        <MenuProvider>
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
                      <Typography color={theme.palette.text.primary}>
                        {themeMode === "light" ? "Claro" : "Escuro"}
                      </Typography>
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
        </MenuProvider>
    </ThemeProvider>
  );
};

export default App;
