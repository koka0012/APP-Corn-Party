import Banner from 'components/Banner';
import FlexAreaView from 'components/FlexAreaView';
import * as React from 'react';
import { NavigationScreenOptions } from 'react-navigation';

import LoginForm from './components/LoginForm';

export default class Login extends React.Component {
  public static navigationOptions: NavigationScreenOptions = {
    header: null
  };
  public render() {
    return (
      <React.Fragment>
        <Banner />
        <FlexAreaView>
          <LoginForm />
        </FlexAreaView>
      </React.Fragment>
    );
  }
}
