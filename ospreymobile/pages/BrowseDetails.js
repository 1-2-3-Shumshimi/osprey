import React, { Component } from 'react';
import {  View,  Text, Button } from 'react-native';
import { Show } from '../src/model/Show';

export default class BrowseDetails extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Browse DETAILS Page!</Text>
          <Button
            title="Set Up a Watch Party"
            onPress={() => 
              this.props.navigation.navigate('CreateWatchParty',
              {
                show: new Show(
                  2,
                  `A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.`,
                  'Crime, Drama, Thriller',
                  'https://img.reelgood.com/content/show/f75762df-3e5b-4cd3-b621-32399a3dd20d/poster-342.jpg',
                  'Breaking Bad',
                  '2008'
                ),
              })
            }
          />
        </View>
      );
    }
  }