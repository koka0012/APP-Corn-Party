import BottomBarIcon from 'components/BottomBarIcon';
import LottieView from 'lottie-react-native';
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { NavigationScreenOptions } from 'react-navigation';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { RootAction } from '../../redux/redux';
import { logout } from '../Login/redux/actions';

class Usuario extends React.Component<{ dispatch: Dispatch<RootAction> }> {
  public static navigationOptions: NavigationScreenOptions = {
    tabBarIcon: props => <BottomBarIcon name="account" {...props} />,
    title: "Usuário"
  };

  public render() {
    return (
      <SafeAreaView style={{ flex: 1, flexDirection: "column-reverse" }}>
        <LottieView
          source={require("res/animations/soon.json")}
          autoPlay
          loop={true}
        />
        <Text
          style={{
            color: "#017d01",
            textAlign: "center",
            padding: 25,
            fontSize: 40,
            fontWeight: "bold"
          }}
        >
          Em Breve
        </Text>
        <Button onPress={() => this.props.dispatch(logout())}>Sair</Button>
      </SafeAreaView>
    );
  }
}

export default connect(
  null,
  null
)(Usuario);
