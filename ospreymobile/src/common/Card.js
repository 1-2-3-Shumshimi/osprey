import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

export default Card = (props) => {

    const watchParty = props.watchParty;
    console.log(watchParty);
    const show = watchParty.show;
    console.log(show);

    const imageWidth = Dimensions.get('window').width / 2.25;
    const imageHeight = Math.round(imageWidth * 1.5);

    return (
        <View style={[{width: imageWidth}, styles.container]}>
            <TouchableOpacity
                onPress={props.onPress}
            >
                <Image
                    style={{ width: imageWidth, height: imageHeight }}
                    resizeMode='contain'
                    source={{ uri: show.imageUrl }}
                />
                <View>
                    <Text style={[{width: imageWidth}, styles.datetime]}>
                    {`${watchParty.date} at ${watchParty.time}`}
                </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 12,
        backgroundColor: '#000',
        elevation: 4, // for android shadow.
        justifyContent: 'flex-start'
    },
    image: {
        alignSelf: 'center'
    },
    datetime: {
        paddingLeft: 5,
        fontSize: 22,
        color: '#fff'
    }
});