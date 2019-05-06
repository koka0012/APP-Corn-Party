import color from 'color';
import * as React from 'react';
import { Alert, View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LightTheme } from 'res/theme';

import Barraca from '../../../typings/Barraca';

export default ({ barraca: { votos, id } }: { barraca: Barraca }) => (
  <View
    style={{
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row"
    }}
  >
    <View>
      <Text
        style={{
          color: color(LightTheme.colors.accent)
            .darken(0.05)
            .toString(),
          fontWeight: "bold"
        }}
      >
        {votos}
      </Text>
    </View>
    <View>
      <IconButton
        icon={props => (
          <Icon {...props} name="star" color={LightTheme.colors.accent} />
        )}
        onPress={() => Alert.alert("Aviso", "Opção não disponível em teste")}
      />
    </View>
  </View>
);
