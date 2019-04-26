import { action } from 'typesafe-actions';

import { LOGIN, LOGIN_COMMIT, LOGIN_ROLLBACK } from './types';

export interface LoginDTO {
  email: string;
  password: string;
}

export const login = (payload: LoginDTO) =>
  action(LOGIN, payload, {
    offline: {
      effect: { url: "/login", method: "POST", data: payload },
      commit: { type: LOGIN_COMMIT, meta: payload },
      rollback: { type: LOGIN_ROLLBACK, meta: payload }
    }
  });
