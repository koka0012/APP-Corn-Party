import * as React from 'react';
import { SafeAreaView, ViewProps } from 'react-native';

export default (
  props: ViewProps & { children: React.ReactChild | React.ReactChild[] }
) => (
  <SafeAreaView {...props} style={[{ flex: 1 }, props.style]}>
    {props.children}
  </SafeAreaView>
);
