//import Icon from 'react-native-ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
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
import BrowseDetails from './pages/BrowseDetails';
import WatchParties from './pages/WatchParties';
import WatchPartiesDetails from './pages/WatchPartiesDetails';
import HostParties from './pages/HostParties';
import HostPartiesDetails from './pages/HostPartiesDetails';
import Profile from './pages/Profile';

const BrowseStackNavigator = createStackNavigator({
  Browse: {screen: Browse},
  BrowseDetails: {screen: BrowseDetails},
},{
  initialRouteName: 'Browse',
  headerMode: 'none',
});

const WatchPartiesStackNavigator = createStackNavigator({
  WatchParties: {screen: WatchParties},
  WatchPartiesDetails: {screen: WatchPartiesDetails},
  //WatchPartiesChat: {screen: WatchPartiesChat}
},{
  initialRouteName: 'WatchParties',
  headerMode: 'none',
});

const HostPartiesStackNavigator = createStackNavigator({
  HostParties: {screen: HostParties},
  HostPartiesDetails: {screen: HostPartiesDetails},
  //WatchPartiesChat: {screen: WatchPartiesChat}
},{
  initialRouteName: 'HostParties',
  headerMode: 'none',
});

const TabNavigator = createBottomTabNavigator(
  {
    BrowseTab: {
      screen: BrowseStackNavigator,
      navigationOptions: {
        tabBarLabel: "Browse",
        tabBarIcon: (({tintColor})=>(<Icon name="ios-tv" size={30} color={tintColor}/>)),
      }
    },
    WatchPartiesTab: {
      screen: WatchPartiesStackNavigator,
      navigationOptions: {
        tabBarLabel: "Events",
        tabBarIcon: (({tintColor})=>(<Icon name="ios-contacts" size={30} color={tintColor}/>)),
      }
    },
    HostPartiesTab: {
      screen: HostPartiesStackNavigator,
      navigationOptions: {
        tabBarLabel: "Your Events",
        tabBarIcon: (({tintColor})=>(<Icon name="ios-calendar" size={30} color={tintColor}/>)),
      }
    },
    ProfileTab: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: (({tintColor})=>(<Icon name="ios-person" size={30} color={tintColor}/>)),
      }
    },
  },
  {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white',
      }
    },
  },
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


