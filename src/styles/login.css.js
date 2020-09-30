import { StyleSheet } from 'react-native';
import Colors from "../utils/helpers/Colors";

export default StyleSheet.create({
    wrapper: {
        height: '100%',
        width: '100%',
        backgroundColor: Colors.background,
    },
    inputContainer: {
        paddingTop: 15,
        paddingHorizontal: 30,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'SF SemiBold',
        fontSize: 18,
        color: Colors.black,
    },
    subtitle: {
        fontFamily: 'SF Light',
        fontSize: 14,
        color: Colors.lightGray,
        width: '90%'
    },
    forgotPassword: {
        fontFamily: 'SF Medium',
        fontSize: 16,
        color: Colors.lightGray,
        textDecorationLine: 'underline',
    }
});
