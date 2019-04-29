import { put, takeEvery } from '@redux-saga/core/effects';
import { NavigationActions } from 'react-navigation';

import { LOGIN_COMMIT } from './types';

export function* login(action: any) {
  const navAction = NavigationActions.navigate({
    routeName: "AppBottomTab"
  });

  yield put(navAction);
}

export const loginSaga = [takeEvery(LOGIN_COMMIT, login)];
