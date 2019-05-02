import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { RootAction, RootState } from '../../redux/redux';
import Barraca from '../../typings/Barraca';
import Prato from '../../typings/Prato';
import ListarPratos from './components/ListarPratos';
import { carregarBebidas } from './redux/actions';

export interface BebidasScreenProps extends NavigationInjectedProps {
  carregarBebidas: typeof carregarBebidas;
  bebidas: Prato[];
  barracas: Barraca[];
}

class Bebidas extends React.Component<BebidasScreenProps> {
  public componentDidMount() {
    this.props.carregarBebidas();
  }
  public render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ListarPratos
          data={this.props.bebidas}
          barracas={this.props.barracas}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  bebidas: state.pratos.bebidas,
  barracas: state.barracas.lista
});

const mapActionToProps = (dispach: Dispatch<RootAction>) => ({
  carregarBebidas: bindActionCreators(carregarBebidas, dispach)
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(Bebidas);
