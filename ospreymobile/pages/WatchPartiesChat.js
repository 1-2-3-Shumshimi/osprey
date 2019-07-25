import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import firebaseSvc from '../src/FirebaseSvc';

export default class WatchPartiesChat extends Component {
  constructor(props) {
    super(props);
  }

  state= {
    messages: []
  }

  user(){
    return{
      name: this.props.navigation.state.params.email.split("@")[0],
      id: firebaseSvc.uid(),
      _id: firebaseSvc.uid()
    }
  }

  componentDidMount() {
    firebaseSvc.refOn(message => 
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
        })
      )
    );
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