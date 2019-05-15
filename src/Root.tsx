import * as React from 'react';
import codePush, { CodePushOptions } from 'react-native-code-push';
import { Provider } from 'react-redux';

import App from './App';
import store from './redux/store';

const codePushOptions: CodePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME
};

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default codePush(codePushOptions)(Root);
