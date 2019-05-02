import { action } from 'typesafe-actions';

import { SELECIONAR_BARRACA } from './typings';

export const selecionarBarraca = (idBarraca: null | number) =>
  action(SELECIONAR_BARRACA, idBarraca);
