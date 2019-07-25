import React, { Component } from 'react';
import { Button, View,  Text } from 'react-native';

export default class WatchPartiesDetails extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Watch Parties DETAILS Page!</Text>
          <Button
            title="Chat"
            onPress={() => this.props.navigation.navigate('WatchPartiesChat')}
          />
        </View>
      );
    }
  }