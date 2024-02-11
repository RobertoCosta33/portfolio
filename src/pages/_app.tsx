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

const App = ({ Component, pageProps }: AppProps) => {
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
            <MainContent>
              <Component {...pageProps} />
            </MainContent>
          </S.MainNavWrapper>
        </S.HomeWrapper>
      </ThemeProviderMui>
    </ThemeProvider>
  );
};

export default App;
