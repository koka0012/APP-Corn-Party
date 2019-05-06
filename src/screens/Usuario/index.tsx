import BottomBarIcon from 'components/BottomBarIcon';
import * as React from 'react';
import { SafeAreaView, View } from 'react-native';
import Markdown from 'react-native-markdown-renderer';
import { Button, Caption, Title } from 'react-native-paper';
import { NavigationScreenOptions, ScrollView } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { RootAction, RootState } from '../../redux/redux';
import { logout } from '../Login/redux/actions';
import { getUserInfo } from './redux/actions';
import { initialState } from './redux/reducer';
import sobre, { ferramentaDeDesenvolvimento } from './sobre';

class Usuario extends React.Component<{
  logout: typeof logout;
  getUserInfo: typeof getUserInfo;
  token: string;
  user: typeof initialState;
}> {
  public static navigationOptions: NavigationScreenOptions = {
    tabBarIcon: props => <BottomBarIcon name="account" {...props} />,
    title: "Usuário"
  };

  public componentDidMount() {
    const { getUserInfo, token } = this.props;
    getUserInfo(token);
  }

  public render() {
    const { user, logout } = this.props;
    return (
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <Title style={{ textAlign: "center" }}>{user.name}</Title>
          <Caption style={{ textAlign: "center" }}>{user.email}</Caption>
          <Button onPress={() => logout()}>Sair</Button>
          <Title style={{ textAlign: "center" }}>Sobre</Title>
          <View style={{ paddingHorizontal: 15 }}>
            <Markdown>{sobre}</Markdown>
          </View>
          <Title style={{ textAlign: "center" }}>
            Ferramentas de Desenvolvimento
          </Title>
          <View style={{ paddingHorizontal: 15 }}>
            <Markdown>{ferramentaDeDesenvolvimento}</Markdown>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const mapStateToprops = (state: RootState) => ({
  token: state.login.token,
  user: state.user
});

const mapActionToProps = (dispatch: Dispatch<RootAction>) => ({
  logout: bindActionCreators(logout, dispatch),
  getUserInfo: bindActionCreators(getUserInfo, dispatch)
});

export default connect(
  mapStateToprops,
  mapActionToProps
)(Usuario);
