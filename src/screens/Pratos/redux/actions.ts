import { action } from 'typesafe-actions';

import {
  CARREGAR_BEBIDAS,
  CARREGAR_BEBIDAS_COMMIT,
  CARREGAR_BEBIDAS_ROLLBACK,
  CARREGAR_PRATOS,
  CARREGAR_PRATOS_COMMIT,
  CARREGAR_PRATOS_ROLLBACK,
} from './types';

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

export const carregarBebidas = () =>
  action(
    CARREGAR_BEBIDAS,
    {},
    {
      offline: {
        effect: { url: "/bebidas", method: "GET" },
        commit: { type: CARREGAR_BEBIDAS_COMMIT },
        rollback: { type: CARREGAR_BEBIDAS_ROLLBACK }
      }
    }
  );
