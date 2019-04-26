import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {
  createNavigationReducer,
  createReactNavigationReduxMiddleware,
  createReduxContainer,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

import { RootState } from '../redux/redux';
import Barracas from './Barracas';
import Informacoes from './Informacoes';
import Login from './Login';
import Mapa from './Mapa';
import Pratos from './Pratos';
import Registro from './Registro';
import Usuario from './Usuario';

export const LoginStack = createStackNavigator({
  Login,
  Registro
});

export const AppBottomTab = createMaterialBottomTabNavigator(
  {
    Barracas,
    Pratos,
    Informacoes,
    Mapa,
    Usuario
  },
  { shifting: true, initialRouteName: "Informacoes" }
);

export const SwitchNavigation = createSwitchNavigator({
  LoginStack,
  AppBottomTab
});

export const AppNavigator = createAppContainer(SwitchNavigation);
export const navReducer = createNavigationReducer(AppNavigator);

export const navMiddleware = createReactNavigationReduxMiddleware<RootState>(
  state => state.nav
);

export const App = createReduxContainer(AppNavigator);
const mapStateToProps = (state: RootState) => ({
  state: state.nav
});

export const AppWithNavigationState = connect(mapStateToProps)(App);
