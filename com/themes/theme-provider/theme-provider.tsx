import { Text, StyleSheet } from 'react-native';

export type ThemeProviderProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

const styles = StyleSheet.create({
  text: {},
});

export function ThemeProvider({ text }: ThemeProviderProps) {
  return (
    <Text style={styles.text}>
      {text}
    </Text>
  );
}

