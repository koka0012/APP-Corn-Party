import * as React from 'react';
import { ListRenderItemInfo, SafeAreaView } from 'react-native';
import { List } from 'react-native-paper';

import Barraca from '../../../typings/Barraca';

export default ({ item }: ListRenderItemInfo<Barraca>) => (
  <SafeAreaView>
    <List.Item title={item.nome} description={item.cnome} />
  </SafeAreaView>
);
