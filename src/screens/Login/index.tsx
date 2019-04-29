import Banner from 'components/Banner';
import FlexAreaView from 'components/FlexAreaView';
import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationInjectedProps, NavigationScreenOptions } from 'react-navigation';
import { connect } from 'react-redux';

import { RootState } from '../../redux/redux';
import LoginButtons from './components/LoginButtons';
import LoginForm from './components/LoginForm';

export interface LoginProps {
  token: string;
}

class Login extends React.Component<LoginProps & NavigationInjectedProps> {
  public static navigationOptions: NavigationScreenOptions = {
    header: null
  };

  public render() {
    if (this.props.token) {
      this.props.navigation.navigate({ routeName: "AppBottomTab" });
      return null;
    }
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

const mapStateToProps = (state: RootState, ownProps: {}) => ({
  token: state.login.token
});

export default connect(mapStateToProps)(Login);
