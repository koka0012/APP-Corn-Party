import Banner from 'components/Banner';
import FlexAreaView from 'components/FlexAreaView';
import * as React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationScreenOptions } from 'react-navigation';

import Guest from './components/Guest';
import LoginForm from './components/LoginForm';

export default class Login extends React.Component {
  public static navigationOptions: NavigationScreenOptions = {
    header: null
  };
  public render() {
    return (
      <React.Fragment>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Banner />
          <FlexAreaView>
            <LoginForm />
            <View style={{ paddingHorizontal: 16 }}>
              <Button
                mode="contained"
                color="#3C5A99"
                icon={props => <Icon name="facebook-box" {...props} />}
              >
                Continuar com o Facebook
              </Button>
              <Button>Cadastrar</Button>
              <Guest />
            </View>
          </FlexAreaView>
        </ScrollView>
      </React.Fragment>
    );
  }
}
