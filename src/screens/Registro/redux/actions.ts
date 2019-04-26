import { action } from 'typesafe-actions';

import { REGISTER, REGISTER_COMMIT, REGISTER_ROLLBACK } from './types';

export interface RegisterDTO {
  name: string;
  password: string;
  email: string;
}

export const register = (payload: RegisterDTO) =>
  action(REGISTER, payload, {
    offline: {
      effect: { url: "/register", method: "POST", data: payload },
      commit: { type: REGISTER_COMMIT, meta: payload },
      rollback: { type: REGISTER_ROLLBACK, meta: payload }
    }
  });
