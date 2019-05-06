import color from 'color';
import * as React from 'react';
import { View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import Snackbar, { LENGTH_LONG } from 'react-native-snackbar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { LightTheme } from 'res/theme';

import { RootAction } from '../../../redux/redux';
import Barraca from '../../../typings/Barraca';
import { votar as Votar } from '../redux/actions';

const LikeBarraca = ({
  barraca: { votos, id },
  votar,
  token
}: {
  barraca: Barraca;
  token: string;
  votar: typeof Votar;
}) => (
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
        onPress={() =>
          token
            ? votar(token, id)
            : Snackbar.show({
                duration: LENGTH_LONG,
                title: "Você precisa estar logado."
              })
        }
      />
    </View>
  </View>
);

const mapActionToProps = (dispatch: Dispatch<RootAction>) => ({
  votar: bindActionCreators(Votar, dispatch)
});

export default connect(
  null,
  mapActionToProps
)(LikeBarraca);
