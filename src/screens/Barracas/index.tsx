import * as React from 'react';
import { View } from 'react-native';
import { NavigationScreenOptions } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { RootAction, RootState } from '../../redux/redux';
import Barraca from '../../typings/Barraca';
import ListaBarracas from './components/ListaBarracas';
import { carregarBarracas, votar } from './redux/actions';
import { orderByVotes } from './redux/reselector';

export interface BarracasProps {
  barracas: Barraca[];
  carregarBarracas: typeof carregarBarracas;
  refreshing: boolean;
  votar: typeof votar;
  token: string;
}
class Barracas extends React.Component<BarracasProps, {}> {
  public static navigationOptions: NavigationScreenOptions = {
    header: null
  };

  componentDidMount() {
    this.props.carregarBarracas();
  }

  public render() {
    const { barracas, refreshing, carregarBarracas, token } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <ListaBarracas
          barracas={barracas}
          refreshing={refreshing}
          refresh={carregarBarracas}
          token={token}
        />
      </View>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: {}) => ({
  barracas: orderByVotes(state),
  refreshing: state.barracas.loading,
  token: state.login.token
});

const mapActionToProps = (dispatch: Dispatch<RootAction>) => ({
  carregarBarracas: bindActionCreators(carregarBarracas, dispatch)
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(Barracas);
