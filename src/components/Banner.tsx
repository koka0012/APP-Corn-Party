import Color from 'color';
import * as React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { LightTheme } from 'res/theme';

export default () => (
  <SafeAreaView
    style={{
      backgroundColor: Color(LightTheme.colors.primary)
        .darken(0.3)
        .hsl()
        .string()
    }}
  >
    <StatusBar animated barStyle="light-content" />
    <View
      style={{
        height: 50,
        width: "100%",
        backgroundColor: LightTheme.colors.primary
      }}
    />
  </SafeAreaView>
);
