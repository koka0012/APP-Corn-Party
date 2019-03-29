import * as React from 'react';
import { Provider as ThemeProvider } from 'react-native-paper';

import { LightTheme } from './res/theme';
import Screens from './screens';

export default () => (
  <ThemeProvider theme={LightTheme}>
    <Screens />
  </ThemeProvider>
);
