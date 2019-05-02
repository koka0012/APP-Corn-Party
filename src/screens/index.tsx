import Color from 'color';
import BottomBarIcon from 'components/BottomBarIcon';
import * as React from 'react';
import {
  createAppContainer,
  createMaterialTopTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {
  createNavigationReducer,
  createReactNavigationReduxMiddleware,
  createReduxContainer,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import { LightTheme } from 'res/theme';

import { RootState } from '../redux/redux';
import BarracaInfo from './BarracaInfo';
import Barracas from './Barracas';
import Informacoes from './Informacoes';
import Login from './Login';
import Mapa from './Mapa';
import { Bebidas, Comidas } from './Pratos';
import Registro from './Registro';
import Usuario from './Usuario';

export const ComesEBebesTab = createMaterialTopTabNavigator(
  {
    Comidas,
    Bebidas
  },
  {
    tabBarOptions: {
      indicatorStyle: {
        backgroundColor: Color(LightTheme.colors.accent).toString()
      },
      style: {
        backgroundColor: Color(LightTheme.colors.primary)
          .darken(0.3)
          .toString()
      },
      pressColor: Color(LightTheme.colors.accent).toString()
    }
  }
);

export const ComesEBebes = createStackNavigator({
  ComesEBebesTab: {
    screen: ComesEBebesTab,
    navigationOptions: {
      title: "Comes e Bebes",
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: LightTheme.colors.primary
      }
    }
  }
});
export const LoginStack = createStackNavigator({
  Login,
  Registro
});

export const BarracaStack = createStackNavigator({
  Barracas
});

export const AppBottomTab = createMaterialBottomTabNavigator(
  {
    BarracaStack: {
      screen: BarracaStack,
      navigationOptions: {
        tabBarLabel: "Barracas",
        tabBarIcon: (props: any) => (
          <BottomBarIcon name="home-variant" {...props} />
        )
      }
    },
    ComesEBebes: {
      screen: ComesEBebes,
      navigationOptions: {
        tabBarLabel: "Pratos",
        tabBarIcon: (props: any) => <BottomBarIcon name="food" {...props} />
      }
    },
    Informacoes,
    Mapa,
    Usuario
  },
  { shifting: true, initialRouteName: "Informacoes" }
);

export const AppNavigation = createStackNavigator({
  AppBottomTab: {
    screen: AppBottomTab,
    navigationOptions: {
      header: null
    }
  },
  BarracaInfo
});

export const SwitchNavigation = createSwitchNavigator({
  LoginStack,
  AppNavigation
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
