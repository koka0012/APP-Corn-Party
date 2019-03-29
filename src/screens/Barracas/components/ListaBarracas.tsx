import * as React from 'react';
import { FlatList } from 'react-native';

import Barraca from '../../../typings/Barraca.js';
import mock from '../mock.json';
import ItemBarraca from './ItemBarraca';

export default () => (
  <FlatList data={mock as Barraca[]} renderItem={ItemBarraca} />
);
