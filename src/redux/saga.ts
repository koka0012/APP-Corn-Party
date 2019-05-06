import { all } from '@redux-saga/core/effects';

import { barracasSaga } from '../screens/Barracas/redux/saga';
import { loginSaga } from '../screens/Login/redux/saga';
import { registerSagas } from '../screens/Registro/redux/saga';

export function* watchAll() {
  yield all([...registerSagas, ...loginSaga, ...barracasSaga]);
}
