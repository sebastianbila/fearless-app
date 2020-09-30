import {Animated} from "react-native";

/**
 * Function to move Animated View
 * @param primary is state of animated value
 * @param target target value
 * @param duration duration of animation
 */
export function moveAnimation(primary, target, duration = 700) {
    Animated.timing(primary, {
        toValue: target,
        duration: duration,
        useNativeDriver: false
    }).start();
}
