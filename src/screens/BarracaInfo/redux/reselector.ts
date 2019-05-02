import { createSelector } from 'reselect';

import { RootState } from '../../../redux/redux';

const getPratos = (state: RootState) => state.pratos.pratos;
const getBebidas = (state: RootState) => state.pratos.bebidas;
const getBarracaSelecionada = (state: RootState) => state.barracaSelecionada;

export const getPratosForBarraca = createSelector(
  [getPratos, getBarracaSelecionada],
  (pratos, barraca) => {
    return pratos.filter(prato => prato.idbarraca === barraca);
  }
);

export const getBebidasForBarraca = createSelector(
  [getBebidas, getBarracaSelecionada],
  (bebidas, barraca) => bebidas.filter(bebida => bebida.idbarraca === barraca)
);
