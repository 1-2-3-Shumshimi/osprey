import React, { Component } from 'react';
import {  View, Text, Image, Dimensions, StyleSheet, Button, Linking } from 'react-native';

export default class HostPartiesDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    //alert(this.props.navigation.state.params.hostParty.hostId);
    // 
    const watchParty = this.props.navigation.state.params.hostParty;

    const imageWidth = Dimensions.get('window').width / 3;
    const imageHeight = Math.round(imageWidth * 1.5);

    return (
      <View style={{ flex: 1 }}>
        <View style={[{flex: 2, flexDirection: "row"}, styles.container]}>
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
        <View style={[{flex: 2, margin: 20}, styles.container]}>
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
        <View style={[{flex: 2, flexDirection: "row", justifyContent: "space-around", alignItems: "center"}, styles.container]}>
          <Button 
            title="Chat"
            onPress={() => 
              this.props.navigation.navigate('WatchPartiesChat')
            }
          />
          <Button 
            title="Start"
            onPress={ ()=>{ Linking.openURL('https://www.netflix.com/')}} 
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