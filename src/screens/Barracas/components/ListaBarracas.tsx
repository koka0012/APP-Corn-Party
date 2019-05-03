import * as React from 'react';
import { FlatList } from 'react-native';
import { Divider } from 'react-native-paper';

import Barraca from '../../../typings/Barraca.js';
import ItemBarraca from './ItemBarraca';

export interface ListaBarracasProps {
  barracas: Barraca[];
  refreshing: boolean;
  refresh(): any;
}

export default (props: ListaBarracasProps) => (
  <FlatList
    data={props.barracas}
    renderItem={props => <ItemBarraca {...props} />}
    removeClippedSubviews={true}
    keyExtractor={barraca => `barraca-${barraca.id}`}
    ItemSeparatorComponent={Divider}
    onRefresh={props.refresh}
    refreshing={props.refreshing}
  />
);
