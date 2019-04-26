import * as React from 'react';
import { FlatList } from 'react-native';

import Barraca from '../../../typings/Barraca.js';
import ItemBarraca from './ItemBarraca';

export interface ListaBarracasProps {
  barracas: Barraca[];
}

export default (props: ListaBarracasProps) => (
  <FlatList
    data={props.barracas}
    renderItem={ItemBarraca}
    removeClippedSubviews={true}
    keyExtractor={barraca => `barraca-${barraca.id}`}
  />
);
