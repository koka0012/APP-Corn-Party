import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

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

export default createAppContainer(SwitchNavigation);
