import React from 'react';
import {View,  StyleSheet, Text, TouchableWithoutFeedback} from 'react-native'
import {SvgXml} from "react-native-svg";
import {backArrow} from "../../../assets/icons/black_arrow";
// import {isApple, isIphoneX} from "../../utils/helpers/AppleDevices";
import Colors from "../../utils/helpers/Colors";
import AirGap from "./AirGap";
import {StatusBar} from "expo-status-bar";
import {isApple} from "../../utils/helpers/AppleDevices";

export default function Toolbar(props) {
    function onBackPress() {
        if (props.nav.canGoBack()) {
            props.nav.goBack()
        }
    }

    return (
       <View>
           {isApple ? <StatusBar style='dark'/> : null}

           <AirGap color={Colors.white} />
           <View style={styles.toolbar}>
               <TouchableWithoutFeedback onPress={() => onBackPress()}>
                   <SvgXml xml={backArrow}/>
               </TouchableWithoutFeedback>
               <Text style={styles.text}>{props.text || 'Default'}</Text>
           </View>
       </View>
    );
}

const styles = StyleSheet.create({
    toolbar: {
        flexDirection: 'row',
        height: 'auto',
        width: '100%',
        minHeight: 50,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 25,
        paddingRight: 25,
    },
    text: {
        fontFamily: 'SF Bold',
        fontSize: 16,
        marginLeft: 20,
    }
})

