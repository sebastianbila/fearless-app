import React from 'react';
import {View} from 'react-native'
import {useSelector} from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";

export default function Loader() {
    const visible = useSelector(state => state.loader.visible) // State of loader, default: false
    return (
        <View>
            <Spinner
                overlayColor="rgba(0, 0, 0, 0.30)"
                size="large"
                visible={visible}
                // textContent={'Loading...'}
                textStyle={{
                    color: '#fff',
                    marginTop: -30,
                    fontFamily: 'SF Heavy',
                    fontSize: 24
                }}
            />
        </View>
    );
}


