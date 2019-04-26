import { fork } from '@redux-saga/core/effects';

import { registerSagas } from '../screens/Registro/redux/saga';

export function* watchAll() {
  yield fork(registerSagas);
}
