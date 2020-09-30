import React from 'react';
import {View} from 'react-native'
import AppleDevices, {isApple, isIphoneX} from "../../utils/helpers/AppleDevices";
import Colors from "../../utils/helpers/Colors";

const AirGap = props => {
    let gap = 0
    if (isApple){
        gap = isIphoneX
            ? AppleDevices.StatusBar.iphoneXHeight
            : AppleDevices.StatusBar.defaultHeight
    }

    if (props.height) gap = props.height

    let color = Colors.none
    if (props.color) color = props.color

    return (
        <View style={{
            width: '100%',
            backgroundColor: color,
            height: gap,
        }}/>
    );
}

export default AirGap
