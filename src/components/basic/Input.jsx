import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import Colors from "../../utils/helpers/Colors";

export default function Input(props) {
    const inputType = props.type || 'default'

    let css = []

    if (inputType === 'default') {
        css.push(defaultInputStyles.input)
        if (props.rounding === 'full') css.push(defaultInputStyles.borderFull)
        if (props.rounding === 'top') css.push(defaultInputStyles.borderTop)
        if (props.rounding === 'bottom') css.push(defaultInputStyles.borderBottom)
    } else if (inputType === 'border') {
        css.push(borderInputStyles.input)
        if (props.rounding === 'bottom') css.push(borderInputStyles.borderBottom)
        if (props.rounding === 'none') css.push(borderInputStyles.borderNone)
        if (props.rounding === 'full') css.push(borderInputStyles.borderFull)
    }

    return (
        <TextInput style={css}
                   {...props}
                   placeholderTextColor={Colors.lightGray}
                   onChangeText={props.onChangeText}
                   placeholder={props.placeholder || 'Default'}/>
    );
}

const defaultInputStyles = StyleSheet.create({
    input: {
        backgroundColor: Colors.white,
        width: '100%',
        height: 50,
        paddingLeft: 20,
        fontFamily: 'SF Medium',
        fontSize: 16,
        color: Colors.gray
    },
    borderTop: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    borderBottom: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    borderFull: {
        borderRadius: 10,
    },
})
const borderInputStyles = StyleSheet.create({
    input: {
        width: '100%',
        height: 40,
        paddingLeft: 10,
        fontFamily: 'SF Medium',
        fontSize: 16,
        color: Colors.white,
    },
    borderBottom: {
        borderBottomColor: Colors.lightGray,
        borderBottomWidth: 1,
    },
    borderNone: {
        borderBottomColor: Colors.none,
        borderBottomWidth: 0,
    },
    borderFull: {
        borderColor: Colors.lightGray,
        borderWidth: 1,
        borderRadius: 15,
        paddingLeft: 0,
        textAlign: 'center'
    }
})

