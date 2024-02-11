import React, { createContext, useContext, useState } from "react";

interface IThemeContextType {
  themeMode: string;
  toggleTheme: () => void;
}

interface IThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<IThemeContextType>({
  themeMode: "light",
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  const toggleTheme = () => {
    const newTheme = themeMode === "light" ? "dark" : "light";
    setThemeMode(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): IThemeContextType => useContext(ThemeContext);
