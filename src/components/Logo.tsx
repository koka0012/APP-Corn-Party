import * as React from 'react';
import { Image } from 'react-native';

export default () => (
  <Image
    style={{ width: "100%", height: 150, marginBottom: 16 }}
    resizeMode="contain"
    source={require("res/images/logo.png")}
  />
);
