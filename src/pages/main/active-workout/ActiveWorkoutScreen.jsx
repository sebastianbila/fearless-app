import React from 'react';
import {Text, View} from 'react-native'
import {StatusBar} from "expo-status-bar";
import {isApple} from "../../../utils/helpers/AppleDevices";

export default function ActiveWorkoutScreen() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {isApple ? <StatusBar style='dark'/> : null}

            <Text>ActiveWorkoutScreen</Text>
        </View>
    );
}

