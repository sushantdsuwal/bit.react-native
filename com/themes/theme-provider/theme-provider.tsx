
import React from 'react';
import { useState, createContext, useContext } from 'react';
import { useColorScheme } from 'react-native';

export type ThemeColorScheme = 'light' | 'dark' | 'auto';
export const themeOptions = ['auto', 'light', 'dark'] as const;


type ColorPalette = {
  background: string;
  text: string;
};


const darkTheme: ColorPalette = {
    background: '#121212',
    text: '#ffffff',
};

const lightTheme: ColorPalette = {
    background: '#121212',
    text: '#ffffff',
};


interface ThemeContextProps {
  colorScheme: ThemeColorScheme;
  setColorScheme: (theme: ThemeColorScheme) => void;
  theme: ColorPalette;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
);

const themeOption = { dark: darkTheme, light: lightTheme };


export type ThemeProviderProps = {
   children: React.ReactNode
};

export  function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setColorScheme] = useState<ThemeColorScheme>('dark');
  const colorScheme = useColorScheme();

  const onChangeTheme = (themeColorScheme: ThemeColorScheme) => {
    setColorScheme(themeColorScheme);
  };

  const currentTheme = {
    ...themeOption,
    auto: (colorScheme && themeOption[colorScheme]) ?? darkTheme,
  };

  return (
    <ThemeContext.Provider
      value={{
        colorScheme: theme,
        setColorScheme: onChangeTheme,
        theme: currentTheme[theme],
      }}
    >
        {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return { ...context };
};
