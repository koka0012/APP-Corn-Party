import { put, takeEvery } from '@redux-saga/core/effects';
import Snackbar, { LENGTH_LONG } from 'react-native-snackbar';
import { LightTheme } from 'res/theme';

import { carregarBarracas } from './actions';
import { BARRACA_VOTAR_COMMIT, BARRACA_VOTAR_ROLLBACK } from './types';

export function* votarFail(action: any) {
  Snackbar.show({
    backgroundColor: LightTheme.colors.error,
    title: action.payload.response.data.Mensagem,
    duration: LENGTH_LONG
  });
  yield null;
}

export function* votarOk(action: any) {
  Snackbar.show({
    title: "Voto realizado com sucesso!",
    duration: LENGTH_LONG
  });
  yield put(carregarBarracas());
}

export const barracasSaga = [
  takeEvery(BARRACA_VOTAR_ROLLBACK, votarFail),
  takeEvery(BARRACA_VOTAR_COMMIT, votarOk)
];
