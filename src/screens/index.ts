import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Barracas from './Barracas';
import Informacoes from './Informacoes';
import Mapa from './Mapa';
import Pratos from './Pratos';
import Usuario from './Usuario';

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

export default createAppContainer(AppBottomTab);
