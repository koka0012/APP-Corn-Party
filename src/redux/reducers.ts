import { combineReducers } from 'redux';

import loginReducers from '../screens/Login/redux/reducers';

export default combineReducers({
  login: loginReducers
});
