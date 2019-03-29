import BottomBarIcon from 'components/BottomBarIcon';
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import { NavigationScreenOptions } from 'react-navigation';

export default class Barracas extends React.Component {
  public static navigationOptions: NavigationScreenOptions = {
    tabBarIcon: props => <BottomBarIcon name="home-variant" {...props} />
  };
  public render() {
    return (
      <SafeAreaView>
        <Text>Barracas</Text>
      </SafeAreaView>
    );
  }
}
