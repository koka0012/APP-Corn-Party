import { DefaultTheme, Theme } from 'react-native-paper';

export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#017d01",
    accent: "#fcec02"
  }
} as Theme;
