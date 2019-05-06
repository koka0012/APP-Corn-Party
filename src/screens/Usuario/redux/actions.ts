import { action } from 'typesafe-actions';

import { USER_INFO, USER_INFO_COMMIT, USER_INFO_ROLLBACK } from './types';

export const getUserInfo = (token: string) =>
  action(USER_INFO, null, {
    offline: {
      effect: {
        url: "/user",
        method: "GET",
        headers: { Authorization: `Bearer ${token}` }
      },
      commit: { type: USER_INFO_COMMIT },
      rollback: { type: USER_INFO_ROLLBACK }
    }
  });
