import React, { createContext, useContext, useState } from 'react';

type ColorPalette = {
  background: string;
  text: string;
};

type Theme = {
  dark: ColorPalette;
  light: ColorPalette;
};

const defaultTheme: Theme = {
  dark: {
    background: '#121212',
    text: '#ffffff',
  },
  light: {
    background: '#ffffff',
    text: '#000000',
  },
};

const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void }>({
  theme: defaultTheme,
  toggleTheme: () => {},
});

export type ThemeProviderProps = {
   children: React.ReactNode
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    setTheme(prevTheme => ({
      ...prevTheme,
      dark: {
        ...prevTheme.dark,
        background: prevTheme.light.background,
        text: prevTheme.light.text,
      },
      light: {
        ...prevTheme.light,
        background: prevTheme.dark.background,
        text: prevTheme.dark.text,
      },
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
