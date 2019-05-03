import BottomBarIcon from 'components/BottomBarIcon';
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Markdown from 'react-native-markdown-renderer';
import { NavigationScreenOptions } from 'react-navigation';

const markdown = `
# 14ª Festa do milho

![](https://i.imgur.com/GzZvuyL.jpg)

Entre os dias **23 a 25 de maio** acontece a **14º Festa do Milho** da Faculdade Fasipe Sinop. Conhecida por ser a maior festa gastronômica do norte do Estado, teremos 30 estandes comercializando produtos à base de milho, e este ano estamos com novidades, dois grandes shows, **Felipe Araújo** e a dupla **Bruno e Marrone**. A Festa do Milho será realizada no estacionamento do novo campus da instituição, na Cidade Universitária, os shows acontecerão no DMD Centro de Eventos, ambos localizados no bairro planejado Aquarela das Artes.
**Mais informações e vendas de ingressos no CPE da Faculdade Fasipe (66 3517-1320) e na Rádio Meridional (66 99237-8002).**`;

export default class Informacoes extends React.Component {
  public static navigationOptions: NavigationScreenOptions = {
    tabBarIcon: props => <BottomBarIcon name="corn" {...props} />,
    title: "Sobre"
  };
  public render() {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 15,
          paddingVertical: 5
        }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <Markdown>{markdown}</Markdown>
        </SafeAreaView>
      </ScrollView>
    );
  }
}
