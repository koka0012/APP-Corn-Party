import { action } from 'typesafe-actions';

import { REGISTER_ROLLBACK } from '../../Registro/redux/types';
import {
  BARRACA_VOTAR,
  BARRACA_VOTAR_COMMIT,
  BARRACA_VOTAR_ROLLBACK,
  BARRACAS_LISTAR,
  BARRACAS_LISTAR_COMMIT,
} from './types';

export const carregarBarracas = () =>
  action(BARRACAS_LISTAR, null, {
    offline: {
      effect: { url: "/barraca", method: "GET" },
      commit: { type: BARRACAS_LISTAR_COMMIT },
      rollback: { type: REGISTER_ROLLBACK }
    }
  });

export const votar = (token: string, idBarraca: number) =>
  action(
    BARRACA_VOTAR,
    { token, idBarraca },
    {
      offline: {
        effect: {
          url: "/registrarvoto",
          method: "POST",
          data: { Token: token, idBarraca },
          headers: { Authorization: `Bearer ${token}` }
        },
        commit: { type: BARRACA_VOTAR_COMMIT },
        rollback: { type: BARRACA_VOTAR_ROLLBACK }
      }
    }
  );
