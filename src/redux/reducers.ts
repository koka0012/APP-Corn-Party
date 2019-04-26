import { combineReducers } from 'redux';

import { navReducer } from '../screens';
import barracasReducers from '../screens/Barracas/redux/reducers';
import loginReducers from '../screens/Login/redux/reducers';
import registerReducer from '../screens/Registro/redux/reducer';

export default combineReducers({
  login: loginReducers,
  register: registerReducer,
  nav: navReducer,
  barracas: barracasReducers
});
