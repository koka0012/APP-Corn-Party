import { createReducer } from 'typesafe-actions';

import { REGISTER, REGISTER_COMMIT, REGISTER_ROLLBACK } from './types';

export const initialState = {
  loading: false
};

const registerReducer = createReducer(initialState)
  .handleAction(REGISTER, state => ({ ...state, loading: true }))
  .handleAction([REGISTER_COMMIT, REGISTER_ROLLBACK], state => ({
    ...state,
    loading: false
  }));

export default registerReducer;
