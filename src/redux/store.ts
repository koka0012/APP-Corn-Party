import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { effect } from '../lib/api';
import reducers from './reducers';
import { RootActions, RootState } from './redux';
import { watchAll } from './saga';

const enhancedCompose =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const enhancer = enhancedCompose(
  offline({
    ...offlineConfig,
    effect: effect,
    persistOptions: {
      ...offlineConfig.persistOptions,
      blacklist: ["nav"]
    }
  }),
  applyMiddleware(sagaMiddleware)
  // other store enhancers if any
);

const store = createStore<RootState, RootActions, {}, {}>(reducers, enhancer);

sagaMiddleware.run(watchAll);

export default store;
