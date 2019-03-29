import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Barracas from './Barracas';
import Mapa from './Mapa';
import Pratos from './Pratos';
import Usuario from './Usuario';

export const AppBottomTab = createMaterialBottomTabNavigator(
  {
    Barracas,
    Pratos,
    Mapa,
    Usuario
  },
  { shifting: true }
);

export default createAppContainer(AppBottomTab);
