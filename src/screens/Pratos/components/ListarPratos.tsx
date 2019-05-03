import * as React from 'react';
import { FlatList, View } from 'react-native';
import { Divider } from 'react-native-paper';

import Barraca from '../../../typings/Barraca';
import Bebida from '../../../typings/Bebida';
import Prato from '../../../typings/Prato';
import ListarPratosItem from './ListarPratosItem';

export interface ListarPratosProps {
  data: Prato[] | Bebida[];
  barracas: Barraca[];
  refreshing: boolean;
  refresh(): any;
}

export default ({ data, barracas, refresh, refreshing }: ListarPratosProps) => (
  <View style={{ flex: 1 }}>
    <FlatList
      style={{ flex: 1 }}
      data={data}
      ItemSeparatorComponent={Divider}
      renderItem={props => <ListarPratosItem {...props} barracas={barracas} />}
      keyExtractor={item => `Listar-Pratos-${item.id}`}
      refreshing={refreshing}
      onRefresh={refresh}
    />
  </View>
);
