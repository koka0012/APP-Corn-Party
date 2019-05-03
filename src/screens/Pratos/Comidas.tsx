import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { RootAction, RootState } from '../../redux/redux';
import Barraca from '../../typings/Barraca';
import Prato from '../../typings/Prato';
import ListarPratos from './components/ListarPratos';
import { carregarPratos } from './redux/actions';

export interface PratosScreenProps extends NavigationInjectedProps {
  carregarPratos: typeof carregarPratos;
  pratos: Prato[];
  barracas: Barraca[];
  loading: boolean;
}

class Pratos extends React.Component<PratosScreenProps> {
  public componentDidMount() {
    this.props.carregarPratos();
  }
  public render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ListarPratos
          data={this.props.pratos}
          barracas={this.props.barracas}
          refresh={this.props.carregarPratos}
          refreshing={this.props.loading}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  pratos: state.pratos.pratos,
  loading: state.pratos.loading,
  barracas: state.barracas.lista
});

const mapActionToProps = (dispach: Dispatch<RootAction>) => ({
  carregarPratos: bindActionCreators(carregarPratos, dispach)
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(Pratos);
