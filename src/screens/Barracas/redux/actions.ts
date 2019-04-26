import { action } from 'typesafe-actions';

import { REGISTER_ROLLBACK } from '../../Registro/redux/types';
import { BARRACAS_LISTAR, BARRACAS_LISTAR_COMMIT } from './types';

export const carregarBarracas = () =>
  action(BARRACAS_LISTAR, null, {
    offline: {
      effect: { url: "/barraca", method: "GET" },
      commit: { type: BARRACAS_LISTAR_COMMIT },
      rollback: { type: REGISTER_ROLLBACK }
    }
  });
