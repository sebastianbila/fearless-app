import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native'
import {logout} from "../../../redux/actions/authAction";
import {useDispatch, useSelector} from "react-redux";
import Colors from "../../../utils/helpers/Colors";

export default function ProfileScreen(props) {
    const dispatch = useDispatch()
    const state = useSelector(state => state.auth)

    React.useEffect(() => {
        if (state.currentUser == null) {
            props.navigation.replace("main")
        }
    }, [state])

    const logoutBtn = () => {
        dispatch(logout())
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Profile Screen</Text>
            <TouchableOpacity
                onPress={() => logoutBtn()}
                style={{backgroundColor: Colors.lightGray}}>
                <Text>Log Out</Text>
            </TouchableOpacity>
        </View>
    );
}
