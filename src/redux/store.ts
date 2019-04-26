import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import { watchAll } from './saga';

const enhancedCompose =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const setupStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const enhancer = enhancedCompose(
    applyMiddleware(sagaMiddleware),
    offline(offlineConfig)
    // other store enhancers if any
  );

  const store = createStore(reducers, enhancer);

  sagaMiddleware.run(watchAll);

  return store;
};
