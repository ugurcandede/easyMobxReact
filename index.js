/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'mobx-react-lite/batchingForReactNative';

AppRegistry.registerComponent(appName, () => App);
