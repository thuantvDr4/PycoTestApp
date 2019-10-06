/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from './src/app';
import {name as appName} from './app.json';
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: componentWillReceiveProps has been renamed',
  'Module RCTImageLoader requires',
]);

AppRegistry.registerComponent(appName, () => App);
