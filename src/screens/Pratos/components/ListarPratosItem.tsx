import numeral from 'numeral';
import * as React from 'react';
import { ListRenderItemInfo, View } from 'react-native';
import { List, Text } from 'react-native-paper';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import Barraca from '../../../typings/Barraca';
import Bebida from '../../../typings/Bebida';
import Prato from '../../../typings/Prato';

const ListarPratosItem = ({
  item,
  navigation,
  barracas
}: ListRenderItemInfo<Prato | Bebida> &
  NavigationInjectedProps & { barracas: Barraca[] }) => (
  <List.Item
    title={item.nome}
    description={item.descricao}
    onPress={() =>
      navigation.navigate({
        routeName: "BarracaInfo",
        params: {
          barraca: barracas.find(barraca => barraca.id === item.idbarraca)
        }
      })
    }
    right={() => (
      <View
        style={{
          width: 75,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ color: "#85bb65", fontWeight: "bold", fontSize: 18 }}>
          {numeral(item.valor).format("($ 0.00 a)")}
        </Text>
      </View>
    )}
  />
);

export default withNavigation(ListarPratosItem);
