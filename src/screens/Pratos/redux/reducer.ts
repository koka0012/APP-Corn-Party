import { createReducer } from 'typesafe-actions';

import Prato from '../../../typings/Prato';
import { CARREGAR_PRATOS, CARREGAR_PRATOS_COMMIT, CARREGAR_PRATOS_ROLLBACK } from './types';

export const initialState = {
  loading: false,
  pratos: [] as Prato[]
};

const pratosReducer = createReducer(initialState)
  .handleAction(CARREGAR_PRATOS, state => ({ ...state, loading: true }))
  .handleAction([CARREGAR_PRATOS_COMMIT, CARREGAR_PRATOS_ROLLBACK], state => ({
    ...state,
    loading: false
  }))
  .handleAction(CARREGAR_PRATOS_COMMIT, (state, action) => {
    const {
      payload: {
        data: { Retorno }
      }
    } = action as any;
    return { ...state, pratos: Retorno };
  });

export default pratosReducer;
