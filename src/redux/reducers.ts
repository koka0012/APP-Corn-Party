import { combineReducers } from 'redux';

import loginReducers from '../screens/Login/redux/reducers';
import registerReducer from '../screens/Registro/redux/reducer';

export default combineReducers({
  login: loginReducers,
  register: registerReducer
});
