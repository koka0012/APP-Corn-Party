import * as React from 'react';
import { Alert, ListRenderItemInfo, SafeAreaView, View } from 'react-native';
import { Avatar, List } from 'react-native-paper';

import getInitials from '../../../lib/getInitials';
import Barraca from '../../../typings/Barraca';
import LikeBarraca from './LikeBarraca';

export default ({ item }: ListRenderItemInfo<Barraca>) => (
  <SafeAreaView>
    <List.Item
      title={item.nome}
      description={item.cnome}
      left={props => (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {item.nomeimagem ? (
            <Avatar.Image size={46} source={{ uri: item.nomeimagem }} />
          ) : (
            <Avatar.Text size={46} label={getInitials(item.nome)} />
          )}
        </View>
      )}
      right={props => <LikeBarraca />}
      onPress={() => Alert.alert("Aviso", "Opção não disponível em teste.")}
    />
  </SafeAreaView>
);
