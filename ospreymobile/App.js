
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { createBottomTabNavigator, createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import Browse from './pages/Browse';
import WatchParties from './pages/WatchParties';
import HostParties from './pages/HostParties';
import Profile from './pages/Profile';


const TabNavigator = createBottomTabNavigator(
  {
    Browse: Browse,
    WatchParties: WatchParties,
    HostParties: HostParties,
    Profile: Profile
  },
  {
  }
);

const Navigation = createAppContainer(createSwitchNavigator(
  {
    TabNavigator
  },
  {
    initialRouteName: 'TabNavigator'
  }
));

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });


const App = () => {
  return (
    <Navigation/>
  );
};


export default App;


