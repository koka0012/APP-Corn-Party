import FlexAreaView from 'components/FlexAreaView';
import * as React from 'react';
import { Image } from 'react-native';
import { Caption, Title } from 'react-native-paper';
import { NavigationInjectedProps, NavigationScreenOptions, NavigationScreenProps, ScrollView } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { RootState } from '../../redux/redux';
import Barraca from '../../typings/Barraca';
import Prato from '../../typings/Prato';
import { carregarPratos } from '../Pratos/redux/actions';
import ListaComidasBarraca from './components/ListaComidasBarraca';
import { selecionarBarraca } from './redux/actions';
import { getPratosForBarraca } from './redux/reselector';

class BarracaInfo extends React.Component<
  NavigationInjectedProps & {
    carregarPratos: typeof carregarPratos;
    selecionarBarraca: typeof selecionarBarraca;
    pratos: Prato[];
  }
> {
  public static navigationOptions = ({
    navigation
  }: NavigationScreenProps): NavigationScreenOptions => ({
    title: navigation.getParam("barraca").nome
  });

  public componentDidMount() {
    this.props.carregarPratos();
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
          <Title style={{ textAlign: "center", marginTop: 20 }}>Pratos</Title>
          <ListaComidasBarraca pratos={this.props.pratos} />
        </FlexAreaView>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  pratos: getPratosForBarraca(state)
});

const mapActionToProps = (dispatch: Dispatch) => ({
  carregarPratos: bindActionCreators(carregarPratos, dispatch),
  selecionarBarraca: bindActionCreators(selecionarBarraca, dispatch)
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(BarracaInfo);
