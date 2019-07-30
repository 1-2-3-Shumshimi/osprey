import React, { Component } from 'react';
import { Button, View,  Text } from 'react-native';

export default class WatchPartiesDetails extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Watch Parties DETAILS Page!</Text>
          <Button
            title="Chat"
            onPress={() => 
              this.props.navigation.navigate('WatchPartiesChat', 
              { show: 
                new Show(
                  2,
                  `A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.`,
                  'Crime, Drama, Thriller',
                  'https://img.reelgood.com/content/show/f75762df-3e5b-4cd3-b621-32399a3dd20d/poster-342.jpg',
                  'Breaking Bad',
                  '2008'
                )
              }
              )
            }
          />
        </View>
      );
    }
  }