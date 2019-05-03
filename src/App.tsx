import * as React from 'react';
import { BackHandler, NativeEventSubscription } from 'react-native';
import { Provider as ThemeProvider } from 'react-native-paper';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { LightTheme } from 'res/theme';

import { RootAction } from './redux/redux';
import { AppWithNavigationState } from './screens';

class App extends React.Component<{ dispatch: Dispatch<RootAction> }> {
  private subs?: NativeEventSubscription = undefined;
  public componentDidMount() {
    this.subs = BackHandler.addEventListener("hardwareBackPress", () =>
      this.props.dispatch(NavigationActions.back())
    );
  }

  public componentWillUnmount() {
    this.subs && this.subs.remove();
  }
  render() {
    return (
      <ThemeProvider theme={LightTheme}>
        <AppWithNavigationState />
      </ThemeProvider>
    );
  }
}
export default connect(
  null,
  null
)(App);
