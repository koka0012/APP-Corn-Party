import * as React from 'react';
import { Image, SafeAreaView } from 'react-native';

export default () => (
  <SafeAreaView style={{ backgroundColor: "#e5ba1d" }}>
    <Image
      style={{ width: "100%", height: 50 }}
      source={require("res/images/vetor-milho.jpg")}
      resizeMode="repeat"
    />
  </SafeAreaView>
);
