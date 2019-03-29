import BottomBarIcon from 'components/BottomBarIcon';
import * as React from 'react';
import { View } from 'react-native';
import { NavigationScreenOptions } from 'react-navigation';

import ListaBarracas from './components/ListaBarracas';

export default class Barracas extends React.Component {
  public static navigationOptions: NavigationScreenOptions = {
    tabBarIcon: props => <BottomBarIcon name="home-variant" {...props} />
  };
  public render() {
    return (
      <View style={{ flex: 1 }}>
        <ListaBarracas />
      </View>
    );
  }
}
