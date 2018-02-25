import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';

import{resource} from './src/config/Resource'
import { Drawer } from './src/navigation/Drawer'
import styles from './src/styles/defaultStyle';
import Planets  from './src/pages/Planets'

import {
  StackNavigator,
} from 'react-navigation';


 const App = StackNavigator({
 first: { screen: Drawer,
  navigationOptions:({ navigation, screenProps }) => ( {
    headerStyle: styles.container,
   
  
  })
},  

} );


AppRegistry.registerComponent('ExoPlanetHunter', () => Drawer );
export default App;