import { createReducer } from 'typesafe-actions';

import Barraca from '../../../typings/Barraca';
import { BARRACAS_LISTAR_COMMIT } from './types';

export const initialState = {
  lista: [] as Barraca[],
  loading: false
};

const barracasReducers = createReducer(initialState).handleAction(
  BARRACAS_LISTAR_COMMIT,
  (state, action) => ({ ...state, lista: (action as any).payload.data.Retorno })
);

export default barracasReducers;
