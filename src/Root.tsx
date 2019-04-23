import * as React from 'react';
import { Provider } from 'react-redux';

import App from './App';
import { setupStore } from './redux/store';

export const store = setupStore();

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
