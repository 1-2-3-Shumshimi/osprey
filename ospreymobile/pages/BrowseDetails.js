import React, { Component } from 'react';
import {  View,  Text, Button } from 'react-native';

export default class BrowseDetails extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Browse DETAILS Page!</Text>
          <Button
            title="Set Up a Watch Party"
            onPress={() => 
              this.props.navigation.navigate('CreateWatchParty')
            }
          />
        </View>
      );
    }
  }