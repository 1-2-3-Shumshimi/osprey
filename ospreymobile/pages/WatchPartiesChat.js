import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import firebaseSvc from '../src/FirebaseSvc';


export default class WatchPartiesChat extends Component {
  constructor(props) {
    super(props);
  }

  state= {
    messages: [],
    email: null
  }

  user(){
    if (!loggedInID){
      return{
        name: "Anonymous",
        id: firebaseSvc.uid(),
        _id: firebaseSvc.uid()
      }
    }else{
      return{
        name: loggedInID.split("@")[0],
        id: firebaseSvc.uid(),
        _id: firebaseSvc.uid()
      }
    }
  }

  componentDidMount() {
    // let myUsername = null;
    // if (this.state.email){
    //   myUsername = this.state.email;
    // }else if (this.props.navigation.state.params && this.props.navigation.state.params.email){
    //   myUsername = this.props.navigation.state.params.email.split("@")[0];
    // }
    //console.log("LOGGED IN ID:", loggedInID, !loggedInID);
    if (!loggedInID){
      alert('Please log in before trying to chat.');
      //this.props.navigation.navigate('WatchPartiesDetails');
    }else{
      firebaseSvc.refOn(message => 
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, message),
          })
        )
      );
    }
  }

  componentWillUnmount() {
    firebaseSvc.refOff();
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={firebaseSvc.send}
        user={this.user()}
      />
    );
  }
  }