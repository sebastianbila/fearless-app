import React, {useState} from 'react';
import {Animated, StyleSheet, Text} from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import {hideAlert} from "../../redux/actions/alertAction";
import {isApple, isIphoneX} from "../../utils/helpers/AppleDevices";
import Colors from "../../utils/helpers/Colors";
import {moveAnimation} from "../../utils/helpers/Animation";

export default function Alert() {
    const primaryY = -150 // primary position of alert
    const targetY = 0 // target position of alert on screen

    const state = useSelector((state) => state.alert) // current state of alert
    const dispatch = useDispatch()

    const [messagePosition] = useState(new Animated.Value(primaryY)); // primary position for animation
    const background = state.messageType === 'error' ? Colors.error : Colors.primary // background of alert
    const messageStyles = [styles.wrapper, {top: messagePosition}, isApple ? styles.ios_wrapper : null]

    if (state.status) {
        // Show alert
        let p = new Promise((resolve) => {
            moveAnimation(messagePosition, targetY) // Showing alert with animation and 700 duration
            resolve() // Resolve to auto hide
        });
        // After show alert, hide it with animation
        p.then(() => {
            setTimeout(() => {
                moveAnimation(messagePosition, primaryY) // Hiding alert with 700 duration of animation

                // After hide alert, dispatch status in store to false
                setTimeout(() => {
                    dispatch(hideAlert())
                }, 500)
            }, state.duration)
        })
    }

    return (
        <Animated.View style={[messageStyles, {backgroundColor: background}]}>
            <Text style={styles.text}>{state.text}</Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: 'auto',
        minHeight: 30,
        position: 'absolute',
        left: 0,
        zIndex: 1000,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    ios_wrapper: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingTop: isIphoneX ? 35 : 25,
    },
    text: {
        color: 'white',
        fontFamily: 'SF Medium',
        textAlign: 'center'
    }
});
