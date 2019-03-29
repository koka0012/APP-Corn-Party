import { DarkTheme as DefaultDarkTheme, Theme } from 'react-native-paper';

export const DarkTheme = {
  ...DefaultDarkTheme,
  colors: {
    ...DefaultDarkTheme.colors
  }
} as Theme;
