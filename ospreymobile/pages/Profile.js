import React, { Component } from 'react';
import {  View,  Text, Button, TextInput } from 'react-native';
import firebaseSvc from '../src/FirebaseSvc';
//import { TextInput } from 'react-native-gesture-handler';


export default class Profile extends Component {


    // add state to store user input
    state = {
      email: '',
      password: '',
      loggedIn: false
    };
    // add login method to handle user press Login button
    onPressLogin = async () => {
      const user = {
        email: this.state.email,
        password: this.state.password,
      };
      firebaseSvc.login(user, this.loginSuccess, this.loginFailed);
    };
    loginSuccess = () => {
      console.log('login successful, navigate to chat.');
      this.setState({ loggedIn: true });
      loggedInID = this.state.email.toString();
      this.props.navigation.navigate('WatchPartiesChat', {
        name: this.state.name,
        email: this.state.email,
      });
    };
    loginFailed = () => {
      alert('Login failure. Please tried again.');
    };
    // methods to handle user input and update the state
    onChangeTextEmail = email => this.setState({ email });
    onChangeTextPassword = password => this.setState({ password });

    render() {
      if (this.state.loggedIn){
        return(          
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>You are logged in as: {this.state.email}</Text>
        </View>);
      }else{
        return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Email:</Text>
            <TextInput
              style={{borderColor:'gray', borderWidth: 1, width: '95%'}}
              onChangeText={this.onChangeTextEmail}
              value={this.state.email}
            />
            <Text>Password:</Text>
            <TextInput
              style={{borderColor:'gray', borderWidth: 1, width: '95%'}}
              secureTextEntry={true}
              onChangeText={this.onChangeTextPassword}
              value={this.state.password}
            />
            <Button
              title="Login"
              onPress={this.onPressLogin}
            />
          </View>
        );
      }
      
    }
  }