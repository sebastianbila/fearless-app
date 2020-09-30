import React from 'react';
import {Keyboard, View, TouchableWithoutFeedback} from 'react-native';

export default function DismissView(props) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View {...props}>
                {props.children}
            </View>
        </TouchableWithoutFeedback>
    )
}
