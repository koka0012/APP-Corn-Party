import 'numeral/locales/pt-br';

import numeral from 'numeral';
import * as React from 'react';
import { View } from 'react-native';
import { Caption, Divider, List, Text } from 'react-native-paper';

import Prato from '../../../typings/Prato';

numeral.locale("pt-br");

export interface ListaBebidasBarraca {
  pratos: Prato[];
}

export default (props: ListaBebidasBarraca) =>
  props.pratos.length > 0 ? (
    <View>
      {props.pratos.map(prato => (
        <React.Fragment>
          <List.Item
            title={prato.nome}
            description={prato.descricao}
            right={() => (
              <View
                style={{
                  paddingHorizontal: 15,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{ color: "#85bb65", fontWeight: "bold", fontSize: 18 }}
                >
                  {numeral(prato.valor).format("($ 0.00 a)")}
                </Text>
              </View>
            )}
          />
          <Divider />
        </React.Fragment>
      ))}
    </View>
  ) : (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Caption style={{ fontSize: 18 }}>Nenhum Prato Cadastrado</Caption>
    </View>
  );
