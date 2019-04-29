import { all } from '@redux-saga/core/effects';

import { loginSaga } from '../screens/Login/redux/saga';
import { registerSagas } from '../screens/Registro/redux/saga';

export function* watchAll() {
  yield all([...registerSagas, ...loginSaga]);
}
