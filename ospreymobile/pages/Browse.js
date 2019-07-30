import React, { Component } from 'react';
import { Button, View,  Text, ScrollView, StyleSheet } from 'react-native';
import { WatchParty } from '../src/model/WatchParty';
import { Show } from '../src/model/Show';
import Card from '../src/common/Card';

export default class BrowsePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watchParties: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {

    fetch('https://osprey-931cd.firebaseio.com/shows.json', { method: 'GET' }).then(async (showsResponse) => {
      const shows = await showsResponse.json();

      const watchParties = [];

      shows.forEach((show) => {
        watchParties.push(new WatchParty(
          new Show(
            show.id,
            show.description,
            show.genre,
            show.image,
            show.title,
            show.year,
          ),
        ));
      });
      this.setState({ watchParties: watchParties });
    });
  } 

  renderCard(watchParty) {
    return (
      <Card
        watchParty={watchParty}
        onPress={() => this.props.navigation.navigate('BrowseDetails', {
          watchParty: watchParty,
        })}
      />
    );
  }

  render() {
    return (
      <ScrollView styles={{ flex: 1 }}>
        <View style={styles.container}>
          {this.state.watchParties.map((watchParty) => this.renderCard(watchParty))}
        </View>
      </ScrollView>
    );
  }
}

const styles = new StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center'
  }
});