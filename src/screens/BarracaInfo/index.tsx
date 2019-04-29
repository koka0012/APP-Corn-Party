import FlexAreaView from 'components/FlexAreaView';
import * as React from 'react';
import { Image } from 'react-native';
import { Caption, Title } from 'react-native-paper';
import { NavigationInjectedProps, NavigationScreenOptions, NavigationScreenProps, ScrollView } from 'react-navigation';

import Barraca from '../../typings/Barraca';
import ListaComidasBarraca from './components/ListaComidasBarraca';

export default class BarracaInfo extends React.Component<
  NavigationInjectedProps
> {
  public static navigationOptions = ({
    navigation
  }: NavigationScreenProps): NavigationScreenOptions => ({
    title: navigation.getParam("barraca").nome
  });
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
          <ListaComidasBarraca />
        </FlexAreaView>
      </ScrollView>
    );
  }
}
