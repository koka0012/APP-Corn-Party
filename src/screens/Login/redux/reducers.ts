import { createReducer } from 'typesafe-actions';

import { LOGIN, LOGIN_COMMIT, LOGIN_ROLLBACK } from './types';

export const initialState = {
  token: "",
  loading: false
};

const loginReducers = createReducer(initialState)
  .handleAction(LOGIN, state => ({ ...state, loading: true }))
  .handleAction(LOGIN_ROLLBACK, state => ({
    ...state,
    loading: false
  }))
  .handleAction(LOGIN_COMMIT, (state, action) => {
    console.log(action);
    return {
      ...state,
      loading: false,
      token: (action as any).payload.data.token
    };
  });

export default loginReducers;
