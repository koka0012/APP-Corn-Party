import { put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import Snackbar, { LENGTH_LONG } from 'react-native-snackbar';
import { StackActions } from 'react-navigation';
import { LightTheme } from 'res/theme';

import { REGISTER_COMMIT, REGISTER_ROLLBACK } from './types';

export function* registerFailed(action: any) {
  Snackbar.show({
    backgroundColor: LightTheme.colors.error,
    title:
      action.payload.response.status === 412
        ? "Email já cadastrado!"
        : "Algum erro ocorreu.",
    duration: LENGTH_LONG
  });
  yield null;
}

export function* registerSucessfully(action: any) {
  Snackbar.show({
    backgroundColor: LightTheme.colors.primary,
    title: "Cadastro realizado com sucesso!",
    duration: LENGTH_LONG
  });
  const navigationAction = StackActions.pop({ n: 1 });
  yield put(navigationAction);
}

export const registerSagas = [
  takeEvery(REGISTER_ROLLBACK, registerFailed),
  takeLatest(REGISTER_COMMIT, registerSucessfully)
];
