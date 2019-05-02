import { createReducer } from 'typesafe-actions';

import { SELECIONAR_BARRACA } from './typings';

export const initialState: null | number = null;

const barracaSelecionadaReducer = createReducer(initialState).handleAction(
  SELECIONAR_BARRACA,
  (state, action) => (action as any).payload
);

export default barracaSelecionadaReducer;
