import FlexAreaView from 'components/FlexAreaView';
import * as React from 'react';
import { Text } from 'react-native-paper';

export default class Registro extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <FlexAreaView>
          <Text>Olá mundo: registro</Text>
        </FlexAreaView>
      </React.Fragment>
    );
  }
}
