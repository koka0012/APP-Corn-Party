import { createReducer } from 'typesafe-actions';

import Bebida from '../../../typings/Bebida';
import Prato from '../../../typings/Prato';
import {
  CARREGAR_BEBIDAS,
  CARREGAR_BEBIDAS_COMMIT,
  CARREGAR_BEBIDAS_ROLLBACK,
  CARREGAR_PRATOS,
  CARREGAR_PRATOS_COMMIT,
  CARREGAR_PRATOS_ROLLBACK,
} from './types';

export const initialState = {
  loading: false,
  pratos: [] as Prato[],
  bebidas: [] as Bebida[]
};

const pratosReducer = createReducer(initialState)
  .handleAction([CARREGAR_PRATOS, CARREGAR_BEBIDAS], state => ({
    ...state,
    loading: true
  }))
  .handleAction(
    [
      CARREGAR_PRATOS_COMMIT,
      CARREGAR_PRATOS_ROLLBACK,
      CARREGAR_BEBIDAS_COMMIT,
      CARREGAR_BEBIDAS_ROLLBACK
    ],
    state => ({
      ...state,
      loading: false
    })
  )
  .handleAction(CARREGAR_PRATOS_COMMIT, (state, action) => {
    const {
      payload: {
        data: { Retorno }
      }
    } = action as any;
    return { ...state, pratos: Retorno };
  })
  .handleAction(CARREGAR_BEBIDAS_COMMIT, (state, action) => {
    const {
      payload: {
        data: { Retorno }
      }
    } = action as any;
    return { ...state, bebidas: Retorno };
  });

export default pratosReducer;
