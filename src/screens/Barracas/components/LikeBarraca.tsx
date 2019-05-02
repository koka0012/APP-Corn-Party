import * as React from 'react';
import { Alert, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default () => (
  <View style={{ justifyContent: "center", alignItems: "center" }}>
    <IconButton
      icon={props => <Icon {...props} name="star-outline" />}
      onPress={() => Alert.alert("Aviso", "Opção não disponível em teste")}
    />
  </View>
);
