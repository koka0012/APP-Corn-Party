import { combineReducers } from 'redux';

import { navReducer } from '../screens';
import barracaSelecionadaReducer from '../screens/BarracaInfo/redux/reducer';
import barracasReducers from '../screens/Barracas/redux/reducers';
import loginReducers from '../screens/Login/redux/reducers';
import pratosReducer from '../screens/Pratos/redux/reducer';
import registerReducer from '../screens/Registro/redux/reducer';
import userReducer from '../screens/Usuario/redux/reducer';

export default combineReducers({
  login: loginReducers,
  register: registerReducer,
  nav: navReducer,
  barracas: barracasReducers,
  pratos: pratosReducer,
  barracaSelecionada: barracaSelecionadaReducer,
  user: userReducer
});
