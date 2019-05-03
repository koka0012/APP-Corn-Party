import { put, takeEvery } from '@redux-saga/core/effects';
import { NavigationActions } from 'react-navigation';

import { LOGIN_COMMIT, LOGOUT } from './types';

export function* login(action: any) {
  const navAction = NavigationActions.navigate({
    routeName: "AppBottomTab"
  });

  yield put(navAction);
}

export function* logout() {
  const navAction = NavigationActions.navigate({
    routeName: "LoginStack"
  });

  yield put(navAction);
}

export const loginSaga = [
  takeEvery(LOGIN_COMMIT, login),
  takeEvery(LOGOUT, logout)
];
