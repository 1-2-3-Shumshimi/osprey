import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { WatchParty } from '../src/model/WatchParty';
import { Show } from '../src/model/Show';
import Card from '../src/common/Card';

export default class HostParties extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hostParties: []
    }
  }

  componentDidMount() {
    this.setState({ hostParties: this.getData() });
  }

  getData() {
    // TODO: jx789v - come back here if we want to hook stuff up
    // e.g. implement basic networking to get urls: https://osprey-931cd.firebaseio.com/parties.json
    // and https://osprey-931cd.firebaseio.com/shows.json
    const hostParties = [];
    hostParties.push(new WatchParty(
      new Show(
        2,
        `When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.`,
        'Action, Crime, Drama',
        'https://img.reelgood.com/content/movie/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8/poster-342.jpg',
        'The Dark Knight',
        '2008'
      ), 3, '08/15/2019', '8:00 PM', 'jx789v'
    ));
    hostParties.push(new WatchParty(
      new Show(
        2,
        `A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.`,
        'Crime, Drama, Thriller',
        'https://img.reelgood.com/content/show/f75762df-3e5b-4cd3-b621-32399a3dd20d/poster-342.jpg',
        'Breaking Bad',
        '2008'
      ), 6, '08/23/2019', '6:00 PM', 'jx789v'
    ));

    return hostParties;
  }

  renderCard(hostParty) {
    return (
      <Card
        watchParty={hostParty}
        onPress={() => this.props.navigation.navigate('HostPartiesDetails')}
      />
    );
  }

  render() {
    const windowWidth = Dimensions.get("window").width;

    return (
      <View style={styles.container}>
        {this.state.hostParties.map((hostParty) => this.renderCard(hostParty))}

        {/* 
        <Text>Host Parties Page!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('HostPartiesDetails')}
        /> 
        */}
      </View>
    );
  }
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  }
});