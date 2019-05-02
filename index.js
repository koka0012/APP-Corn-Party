/**
 * @format
 */
import { Client } from 'bugsnag-react-native';
import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import Root from './src/Root';

const bugsnag = new Client("b480db2d9163f1a940382252a0672382");

AppRegistry.registerComponent(appName, () => Root);
