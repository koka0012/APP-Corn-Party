import { createReducer } from 'typesafe-actions';

import { LOGOUT } from '../../Login/redux/types';
import { USER_INFO_COMMIT } from './types';

export const initialState = {
  name: "",
  email: ""
};

export default createReducer(initialState)
  .handleAction(USER_INFO_COMMIT, (state, action) => {
    const {
      payload: {
        data: {
          Retorno: { email, name }
        }
      }
    } = action as any;
    return { ...state, email, name };
  })
  .handleAction(LOGOUT, () => initialState);
