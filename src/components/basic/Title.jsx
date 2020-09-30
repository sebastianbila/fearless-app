import React from 'react';
import {Text} from 'react-native'
import Colors from "../../utils/helpers/Colors";

function Title(props) {
    const fontFamily = props.fontFamily || 'SF Bold'
    const fontSize = props.fontSize || 32
    const color = props.color || Colors.white
    const style = props.style

    const css = {fontFamily: fontFamily, fontSize: fontSize, color}
    const cls = [css, style]

    return (
        <Text {...props} style={cls}>
            {props.text}
        </Text>
    );
}

export default Title;
