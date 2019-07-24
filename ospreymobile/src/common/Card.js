import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default Card = (props) => {

    const watchParty = props.watchParty;
    console.log(watchParty);
    const show = watchParty.show;
    console.log(show);

    // jx789v - actually make this look pretty at some point

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={props.onPress}
            >
                <Image
                    style={styles.image}
                    resizeMode='contain'
                    source={{uri: show.imageUrl}}
                />
                <Text style={styles.datetime}>
                    {`${watchParty.date} at ${watchParty.time}`}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 12,
        backgroundColor: '#000',
        elevation: 4, // for android shadow.
        flex: 1
    },
    image: {
        width: 342, //comeback
        height: 513,
        alignSelf: 'center'
    },
    datetime: {
        fontSize: 16,
        color: '#fff'
    }
});