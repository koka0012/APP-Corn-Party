import { compose, createStore } from 'redux';

import reducers from './reducers';

const enhancedCompose = (window as any).__REDUX_DEVTOOLS_EXTENSION__ || compose;

export const setupStore = () => {
  const store = createStore(reducers, enhancedCompose());

  return store;
};
