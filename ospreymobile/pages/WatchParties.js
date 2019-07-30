import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Button, ScrollView } from 'react-native';
import { WatchParty } from '../src/model/WatchParty';
import { Show } from '../src/model/Show';
import Card from '../src/common/Card';

export default class WatchParties extends Component {

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

    fetch('https://osprey-931cd.firebaseio.com/parties.json', { method: 'GET' }).then(async (partiesResponse) => {
      let parties = await partiesResponse.json();
      //let parties = Object.keys(json_parties).map(key => json_parties[key]);
      console.log(parties);
      fetch('https://osprey-931cd.firebaseio.com/shows.json', { method: 'GET' }).then(async (showsResponse) => {
        const shows = await showsResponse.json();
        console.log(shows);
        const watchParties = [];

        parties.forEach((party) => {
          watchParties.push(new WatchParty(
            new Show(
              party.show_id,
              shows[party.show_id].description,
              shows[party.show_id].genre,
              shows[party.show_id].image,
              shows[party.show_id].title,
              shows[party.show_id].year,
            ), party.id, party.date, party.time
          ));
        });
        this.setState({ watchParties: watchParties });
      });
    });
  } 

  renderCard(watchParty) {
    return (
      <Card
        watchParty={watchParty}
        onPress={() => this.props.navigation.navigate('WatchPartiesDetails', {
          watchParty: watchParty,
        })}
      />
    );
  }

  render() {
    return (
      <ScrollView styles={{ flex: 1 }}>
        <View style={styles.container}>
          {/* <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('WatchPartiesDetails')}
          /> */}
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