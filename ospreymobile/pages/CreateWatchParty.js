import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {  View,  Text, TextInput, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import DateTimePicker from "react-native-modal-datetime-picker";

export default class CreateWatchParty extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isDateTimePickerVisible: false,
          pickedDate: null,
          pickedTime: null,
          dateTimePickerMode: 'date',
          dateTimeFunctionHandler: null,
          attendeesList: null,
          currentShow: this.props.navigation.state.params.show,
        };
    }

    showDatePicker = () => {
        this.setState(
            { 
                isDateTimePickerVisible: true, 
                dateTimePickerMode: 'date',
                dateTimeFunctionHandler: this.handleDatePicked,
            }
        );
    }

    showTimePicker = () => {
        this.setState(
            { 
                isDateTimePickerVisible: true, 
                dateTimePickerMode: 'time',
                dateTimeFunctionHandler: this.handleTimePicked,
            }
        );
    }

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    }

    handleDatePicked = date => {
        //console.log("A date has been picked: ", date);
        let convertedTime = date.toLocaleDateString("en-US");
        this.setState({ pickedDate: convertedTime });
        this.hideDateTimePicker();
    }

    handleTimePicked = time => {
        //console.log("A date has been picked: ", date);
        let convertedTime = time.toLocaleTimeString("en-US");
        this.setState({ pickedTime: convertedTime });
        this.hideDateTimePicker();
    }

    render() {
      return (
        <View style={{ flex: 1 }}>
            <View style={{ width: '100%', height: "30%" }}>
                <Image
                    style={{ width: '100%', height: "100%" }}
                    resizeMode='cover'
                    source={{ uri: this.state.currentShow.imageUrl }}
                />
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 30, fontWeight:'bold', color: 'white', textAlign: 'center'}}>Create Watch Party for {this.state.currentShow.title}</Text>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View style={{ flexDirection: "row", width: "97%", marginTop: 10, marginBottom: 10 }}>
                    <Button 
                        title="Pick Date" 
                        onPress={this.showDatePicker}
                        //style={{height: 30}}
                    />
                    <TextInput  
                        placeholder="Date"
                        value={this.state.pickedDate}
                        underlineColorAndroid='gray'  
                        style={{ backgroundColor: '#FFF', flex: 1, color: "black", fontSize: 24 }}  
                        textAlign={'center'}
                        editable={false}  
                    />
                </View>
                <View style={{ flexDirection: "row", width: "97%", marginTop:10, marginBottom: 10  }}>
                    <Button 
                        title="Pick Time" 
                        onPress={this.showTimePicker}
                        //style={{height: 30}}
                    />
                    <TextInput  
                        placeholder="Time"
                        value={this.state.pickedTime}
                        textAlign={'center'}
                        underlineColorAndroid='gray'  
                        style={{ backgroundColor: '#FFF', flex: 1, color: "black", fontSize: 24 }}  
                        editable={false}  
                    />
                </View>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.state.dateTimeFunctionHandler}
                    onCancel={this.hideDateTimePicker}
                    mode={this.state.dateTimePickerMode}
                    is24Hour={false}
                />
                <TextInput  
                    placeholder="Attendees (email or username)"
                    value={this.state.attendeesList}
                    textAlign={'center'}
                    underlineColorAndroid='gray'  
                    style={{ backgroundColor: '#FFF', width: "97%", color: "black", fontSize: 24, marginTop: 10, marginBottom: 10 }}  
                    editable={true}  
                />
                <Button
                    title="Submit"
                    onPress={()=>{
                        alert("Event Created Successfully! Enjoy!");
                        this.props.navigation.goBack(null);
                    }}
                />
            </View>
        </View>
        
      );
    }
  }