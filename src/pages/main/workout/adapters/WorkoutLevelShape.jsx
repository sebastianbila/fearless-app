import React from 'react';
import {View, StyleSheet, Text} from 'react-native'
import Colors from "../../../../utils/helpers/Colors";

export default function WorkoutLevelShape(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        padding: 7,
        backgroundColor: Colors.black
    },
    text: {
        color: Colors.white,
        textTransform: "uppercase",
    },

})
