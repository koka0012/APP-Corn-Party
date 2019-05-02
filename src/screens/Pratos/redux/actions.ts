import { action } from 'typesafe-actions';

import { CARREGAR_PRATOS, CARREGAR_PRATOS_COMMIT, CARREGAR_PRATOS_ROLLBACK } from './types';

export const carregarPratos = () =>
  action(
    CARREGAR_PRATOS,
    {},
    {
      offline: {
        effect: { url: "/pratos", method: "GET" },
        commit: { type: CARREGAR_PRATOS_COMMIT },
        rollback: { type: CARREGAR_PRATOS_ROLLBACK }
      }
    }
  );
