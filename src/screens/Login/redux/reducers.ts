import { createReducer } from 'typesafe-actions';

export const initialState = {
  token: ""
};

const loginReducers = createReducer(initialState);

export default loginReducers;
