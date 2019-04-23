import * as React from 'react';
import { View } from 'react-native';

import LoginFormContainer from '../../container/LoginFormContainer';
import Guest from '../Guest';

export default () => (
  <View style={{ flex: 1, paddingHorizontal: 16, marginTop: 50 }}>
    <LoginFormContainer />
    <Guest />
  </View>
);
