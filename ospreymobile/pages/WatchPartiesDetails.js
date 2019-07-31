import React, { Component } from 'react';
import {  View, Text, Image, Dimensions, StyleSheet, Button } from 'react-native';

export default class WatchPartiesDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    //alert(this.props.navigation.state.params.hostParty.hostId);
    // 
    const watchParty = this.props.navigation.state.params.watchParty;

    const imageWidth = Dimensions.get('window').width / 3;
    const imageHeight = Math.round(imageWidth * 1.5);

    return (
      <View style={[{ flex: 1 }, styles.container]}>
        <View style={[{flex: 2, flexDirection: "row"}]}>
          <View>
            <Image
              style={{ width: imageWidth, height: imageHeight }}
              resizeMode='contain'
              source={{ uri: watchParty.show.imageUrl }}
            />
          </View>
          <View style={{flex: 1, flexDirection: "column", margin: 20, alignSelf: 'center'}}>
            <Text style={{fontSize: 28}}>
              {watchParty.date}
            </Text>
            <Text style={{fontSize: 28}}>
              {watchParty.time}
            </Text>
          </View>
        </View>
        <View style={[{flex: 2, paddingBottom: 0,}]}>
          <Text style={{fontSize: 22}}>
            { watchParty.show.title}
          </Text>
          <View style={{flexDirection: "row"}}>
            <Text style={{fontSize: 14}}>
              {watchParty.show.genre}
            </Text>
            <Text style={{fontSize: 14, marginLeft: 20}}>
              {watchParty.show.year}
            </Text>
          </View>
          <Text style={{fontSize: 18}}>
            {watchParty.show.description}
          </Text>
        </View>
        <View style={[{flex: 2, flexDirection: "row", justifyContent: "center", alignItems: "center",}]}>
          <Button 
            title="Chat"
            onPress={() => 
              this.props.navigation.navigate('WatchPartiesChat')
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      paddingTop: 12,
      marginLeft: 10,
      marginRight: 10,
      top: 0
  }
});