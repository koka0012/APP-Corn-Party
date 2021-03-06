import FlexAreaView from 'components/FlexAreaView';
import * as React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NavigationScreenOptions } from 'react-navigation';
import { LightTheme } from 'res/theme';

import RegisterForm from './components/RegisterForm';

export default class Registro extends React.Component {
  public static navigationOptions: NavigationScreenOptions = {
    title: "Registrar",
    headerStyle: { backgroundColor: LightTheme.colors.primary },
    headerTintColor: "#fff"
  };
  public render() {
    return (
      <React.Fragment>
        <KeyboardAwareScrollView>
          <FlexAreaView>
            <RegisterForm />
          </FlexAreaView>
        </KeyboardAwareScrollView>
      </React.Fragment>
    );
  }
}
