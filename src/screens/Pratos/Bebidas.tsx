import BottomBarIcon from 'components/BottomBarIcon';
import LottieView from 'lottie-react-native';
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import { NavigationInjectedProps, NavigationScreenOptions } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { RootAction } from '../../redux/redux';
import { carregarBebidas } from './redux/actions';

export interface BebidasScreenProps extends NavigationInjectedProps {
  carregarBebidas: typeof carregarBebidas;
}

class Bebidas extends React.Component<BebidasScreenProps> {
  public static navigationOptions: NavigationScreenOptions = {
    tabBarIcon: props => <BottomBarIcon name="food" {...props} />
  };

  public componentDidMount() {
    this.props.carregarBebidas();
  }
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
      </SafeAreaView>
    );
  }
}

const mapActionToProps = (dispach: Dispatch<RootAction>) => ({
  carregarBebidas: bindActionCreators(carregarBebidas, dispach)
});

export default connect(
  null,
  mapActionToProps
)(Bebidas);
