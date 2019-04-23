import Banner from 'components/Banner';
import FlexAreaView from 'components/FlexAreaView';
import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationScreenOptions } from 'react-navigation';

import LoginButtons from './components/LoginButtons';
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
            <LoginButtons />
          </FlexAreaView>
        </ScrollView>
      </React.Fragment>
    );
  }
}
