import color from 'color';
import FlexAreaView from 'components/FlexAreaView';
import * as React from 'react';
import { Image, View } from 'react-native';
import { Caption, Text, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationInjectedProps, NavigationScreenOptions, NavigationScreenProps, ScrollView } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { LightTheme } from 'res/theme';

import { RootState } from '../../redux/redux';
import Barraca from '../../typings/Barraca';
import Bebida from '../../typings/Bebida';
import Prato from '../../typings/Prato';
import { carregarBebidas, carregarPratos } from '../Pratos/redux/actions';
import ListaComidasBarraca from './components/ListaComidasBarraca';
import { selecionarBarraca } from './redux/actions';
import { getBebidasForBarraca, getPratosForBarraca } from './redux/reselector';

class BarracaInfo extends React.Component<
  NavigationInjectedProps & {
    carregarPratos: typeof carregarPratos;
    carregarBebidas: typeof carregarBebidas;
    selecionarBarraca: typeof selecionarBarraca;
    pratos: Prato[];
    bebidas: Bebida[];
  }
> {
  public static navigationOptions = ({
    navigation
  }: NavigationScreenProps): NavigationScreenOptions => ({
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: LightTheme.colors.primary
    },
    title: navigation.getParam("barraca").nome
  });

  public componentDidMount() {
    this.props.carregarPratos();
    this.props.carregarBebidas();
    this.props.selecionarBarraca(this.props.navigation.getParam("barraca").id);
  }

  public componentWillUnmount() {
    this.props.selecionarBarraca(null);
  }
  public render() {
    const barraca: Barraca = this.props.navigation.getParam("barraca");
    return (
      <ScrollView>
        <FlexAreaView>
          <Image
            source={{ uri: barraca.nomeimagem }}
            style={{ width: "100%", height: 250 }}
          />
          <Title style={{ textAlign: "center" }}>{barraca.nome}</Title>
          <Caption style={{ textAlign: "center" }}>
            {barraca.semestre}° Semestre de {barraca.cnome}
          </Caption>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                color: LightTheme.colors.accent
              }}
            >
              {barraca.votos}
            </Text>
            <Icon name="star" size={25} color={LightTheme.colors.accent} />
          </View>
          <Title style={{ textAlign: "center", marginTop: 20 }}>Pratos</Title>
          <ListaComidasBarraca pratos={this.props.pratos} />
          <Title style={{ textAlign: "center", marginTop: 20 }}>Bebidas</Title>
          <ListaComidasBarraca pratos={this.props.bebidas} />
        </FlexAreaView>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  pratos: getPratosForBarraca(state),
  bebidas: getBebidasForBarraca(state)
});

const mapActionToProps = (dispatch: Dispatch) => ({
  carregarPratos: bindActionCreators(carregarPratos, dispatch),
  selecionarBarraca: bindActionCreators(selecionarBarraca, dispatch),
  carregarBebidas: bindActionCreators(carregarBebidas, dispatch)
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(BarracaInfo);
