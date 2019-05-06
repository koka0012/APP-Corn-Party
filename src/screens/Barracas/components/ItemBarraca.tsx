import * as React from 'react';
import { ListRenderItemInfo, SafeAreaView, View } from 'react-native';
import { Avatar, List } from 'react-native-paper';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import getInitials from '../../../lib/getInitials';
import Barraca from '../../../typings/Barraca';
import LikeBarraca from './LikeBarraca';

const ItemBarraca = ({
  item,
  navigation
}: ListRenderItemInfo<Barraca> & NavigationInjectedProps) => (
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
      right={props => <LikeBarraca barraca={item} />}
      onPress={() =>
        navigation.navigate({
          routeName: "BarracaInfo",
          params: { barraca: item }
        })
      }
    />
  </SafeAreaView>
);
export default withNavigation(ItemBarraca);
