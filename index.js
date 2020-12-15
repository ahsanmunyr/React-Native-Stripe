
import {name as appName} from './app.json';
import { AppRegistry } from 'react-native'
import Root from './src/Root'
import Source from './src/scenes/SourceScreen'
import AndroidPayScreen from './src/scenes/AndroidPayScreen'
import CardFormScreen from './src/scenes/CardTextFieldScreen'
AppRegistry.registerComponent(appName, () => Root);

