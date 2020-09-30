import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from "../../utils/helpers/Colors";

function Button(props) {
    return (
        <TouchableOpacity {...props} style={[styles.btn, props.style]}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        width: '100%',
        backgroundColor: Colors.primary,
        paddingVertical: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'SF Bold',
        fontSize: 18,
        color: Colors.white,
    }
})

export default Button;
