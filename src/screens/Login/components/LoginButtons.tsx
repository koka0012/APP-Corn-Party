import * as React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import Guest from './Guest';

const LoginButtons = ({ navigation }: NavigationInjectedProps) => (
  <View style={{ paddingHorizontal: 16 }}>
    <Button
      mode="contained"
      color="#3C5A99"
      icon={props => <Icon name="facebook-box" {...props} />}
    >
      Continuar com o Facebook
    </Button>
    <Button
      style={{ marginTop: 8 }}
      onPress={() => navigation.navigate("Registro")}
    >
      Cadastrar
    </Button>
    <Guest />
  </View>
);

export default withNavigation(LoginButtons);
