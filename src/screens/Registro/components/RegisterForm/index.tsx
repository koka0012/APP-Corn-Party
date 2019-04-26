import Logo from 'components/Logo';
import * as React from 'react';
import { View } from 'react-native';

import RegisterFormContainer from '../../container/RegisterFormContainer';

export default () => (
  <View style={{ flex: 1, paddingHorizontal: 16, marginTop: 50 }}>
    <Logo />
    <RegisterFormContainer />
  </View>
);
