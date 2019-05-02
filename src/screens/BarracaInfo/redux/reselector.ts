import { createSelector } from 'reselect';

import { RootState } from '../../../redux/redux';

const getPratos = (state: RootState) => state.pratos.pratos;
const getBarracaSelecionada = (state: RootState) => state.barracaSelecionada;

export const getPratosForBarraca = createSelector(
  [getPratos, getBarracaSelecionada],
  (pratos, barraca) => {
    return pratos.filter(prato => prato.idbarraca === barraca);
  }
);
