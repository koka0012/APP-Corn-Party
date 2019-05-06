import { createSelector } from 'reselect';

import { RootState } from '../../../redux/redux';

const getBarracas = (state: RootState) => state.barracas.lista;

export const orderByVotes = createSelector(
  [getBarracas],
  barracas => barracas.sort((a, b) => b.votos - a.votos)
);
