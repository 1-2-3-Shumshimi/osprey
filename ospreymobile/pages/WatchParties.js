import React, { Component } from 'react';
import { Button, View,  Text } from 'react-native';

export default class WatchParties extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Watch Parties Page!</Text>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('WatchPartiesDetails')}
          />
        </View>
      );
    }
  }