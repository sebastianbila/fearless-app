import { StyleSheet } from 'react-native';
import Colors from "../utils/helpers/Colors";
import {isApple} from "../utils/helpers/AppleDevices";

export default StyleSheet.create({
    wrapper: {
        height: '100%',
        width: '100%',
        backgroundColor: Colors.backgroundDark
    },
    image: {
        height: '100%',
        width: '100%',
    },
    btnNext: {
        width: '85%',
    },
    content: {
        flex: 1,
        paddingVertical: isApple ? 50 : 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    genderContainer: {
        width: '85%',
        height: 'auto',
        flexDirection: 'row',
    },
    genderItem: {
        paddingHorizontal: 10,
        width: '50%',
    },
    container: {
        width: '100%'
    },
    item: {
        width: '100%',
        marginBottom: 15
    },
    box: {
        alignItems: 'flex-start',
        paddingVertical: 10,
        paddingHorizontal: 15
    }
});
