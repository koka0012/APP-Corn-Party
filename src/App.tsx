import * as React from 'react';
import { Provider as ThemeProvider } from 'react-native-paper';
import { LightTheme } from 'res/theme';

import { AppWithNavigationState } from './screens';

export default () => (
  <ThemeProvider theme={LightTheme}>
    <AppWithNavigationState />
  </ThemeProvider>
);
