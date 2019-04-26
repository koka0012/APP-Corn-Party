import * as React from 'react';
import { Provider } from 'react-redux';

import App from './App';
import store from './redux/store';

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
