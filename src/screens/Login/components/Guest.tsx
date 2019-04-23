import * as React from 'react';
import { Button } from 'react-native-paper';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

const Guest = ({ navigation }: NavigationInjectedProps) => (
  <Button
    onPress={() => navigation.navigate("AppBottomTab")}
    compact
    color="#adadad"
    style={{ marginTop: 16 }}
  >
    Continuar como convidado
  </Button>
);

export default withNavigation(Guest);
