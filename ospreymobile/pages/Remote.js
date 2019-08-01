import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, ScrollView, Text, Keyboard } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export default class Remote extends Component {

    constructor(props) {
        super(props);
        this.textInputRef = null;
        this.state = {
            volume: 20,
            channel: 4
        }
    }

    toggleKeyboard() {
        if (this.textInputRef === null) {
            return;
        }
        if (this.textInputRef.isFocused()) {
            this.textInputRef.clear();
            Keyboard.dismiss();
        } else {
            this.textInputRef.focus();
        }
    }

    increaseVolume() {
        this.setState((prevState) => ({ volume: prevState.volume + 1 }));
    }

    decreaseVolume() {
        this.setState((prevState) => ({ volume: prevState.volume - 1 }));
    }

    increaseChannel() {
        this.setState((prevState) => ({ channel: prevState.channel + 1 }));
    }

    decreaseChannel() {
        this.setState((prevState) => ({ channel: prevState.channel - 1 }));
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}>
                <View style={{ marginBottom: 12, marginRight: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#000', height: 40, padding: 8, justifyContent: 'center' }}
                        onPress={() =>
                            this.props.navigation.navigate('WatchPartiesChat')
                        }>
                        <Text style={{ color: '#fff', fontSize: 22, alignSelf: 'center' }}>{'CHAT'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ marginLeft: 16 }}>
                        <Text style={{ fontSize: 36 }}>
                            {`Volume: ${this.state.volume}`}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginRight: 16 }}>
                        <TouchableOpacity style={{ margin: 8 }} onPress={() => this.increaseVolume()}>
                            <Icon name='ios-add' size={64} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ margin: 8 }} onPress={() => this.decreaseVolume()}>
                            <Icon name='ios-remove' size={64} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginBottom: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ marginLeft: 16 }}>
                        <Text style={{ fontSize: 36 }}>
                            {`Channel: ${this.state.channel}`}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginRight: 16 }}>
                        <TouchableOpacity style={{ margin: 8 }} onPress={() => this.increaseChannel()}>
                            <Icon name='ios-add' size={64} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ margin: 8 }} onPress={() => this.decreaseChannel()}>
                            <Icon name='ios-remove' size={64} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: '#000', height: 40, padding: 8, justifyContent: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 22, alignSelf: 'center' }}>{'SELECT CHANNEL'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#000', height: 40, padding: 8, justifyContent: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 28, alignSelf: 'center' }}>{'CC'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#000', height: 40, padding: 8, justifyContent: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 28, alignSelf: 'center' }}>{'MUTE'}</Text>
                    </TouchableOpacity>
                </View>
                <TextInput style={{ color: 'white' }} caretHidden={true} ref={(el) => this.textInputRef = el} />
                <View style={{ alignItems: 'center', marginBottom: 12 }}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#000', padding: 8 }}
                        onPress={() => { this.toggleKeyboard() }}>
                        <Text style={{ color: '#fff', fontSize: 28 }}>{'TOGGLE KEYBOARD'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: 12 }}>
                    <TouchableOpacity>
                        <Icon name='ios-skip-backward' size={50} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='ios-rewind' size={50} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='ios-square' size={50} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='ios-fastforward' size={50} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='ios-skip-forward' size={50} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 12 }}>
                    <TouchableOpacity>
                        <Icon name='ios-arrow-dropleft-circle' size={72} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='ios-arrow-dropup-circle' size={72} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='ios-arrow-dropdown-circle' size={72} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='ios-arrow-dropright-circle' size={72} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 24 }}>
                    <TouchableOpacity style={{ backgroundColor: '#000', padding: 8 }}>
                        <Text style={{ color: '#fff', fontSize: 48 }}>{'ENTER'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='ios-pause' size={100} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='ios-play' size={100} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}