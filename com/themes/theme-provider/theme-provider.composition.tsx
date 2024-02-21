import React from 'react';
import { Text,View } from 'react-native'
import { ThemeProvider, useTheme } from './theme-provider';


const ThemedComponent: React.FC = () => {
  const { theme } = useTheme();
  return (
    <View style={{ backgroundColor: theme.background }}>
      <Text style={{ color: theme.text }}>Themed Component</Text>
    </View>
  );
};

export const BasicThemeProvider = () => (
  <ThemeProvider>
    <ThemedComponent/>
  </ThemeProvider>
);


