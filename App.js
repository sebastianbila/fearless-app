import React from 'react';
import {AppLoading} from "expo";
import {useFonts} from "expo-font";
import {Provider} from "react-redux";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {isApple} from "./src/utils/helpers/AppleDevices";
import store from "./src/redux/config/store";
import Colors from "./src/utils/helpers/Colors";
import Alert from "./src/components/basic/Alert";
import Loader from "./src/components/basic/Loader";
import MainContainer from "./src/containers/MainContainer";

export default function App() {
    let barStyle = isApple ? 'dark' : 'light'

    const [fontsLoaded] = useFonts({
        'SF Black': require('fearless-app/assets/fonts/sf_black.otf'),
        'SF Bold': require('fearless-app/assets/fonts/sf_bold.otf'),
        'SF Heavy': require('fearless-app/assets/fonts/sf_heavy.otf'),
        'SF Light': require('fearless-app/assets/fonts/sf_light.otf'),
        'SF Medium': require('fearless-app/assets/fonts/sf_medium.otf'),
        'SF SemiBold': require('fearless-app/assets/fonts/sf_semibold.otf'),
        'SF Thin': require('fearless-app/assets/fonts/sf_thin.otf'),
        'SF Ultralight': require('fearless-app/assets/fonts/sf_ultralight.otf')
    });

    if (fontsLoaded) {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <StatusBar
                        style={barStyle} // for Apple Devices
                        backgroundColor={Colors.black} // For Android
                        translucent={false} // For Android
                    />

                    {/*/!* Main Container*!/*/}
                    <MainContainer/>

                    {/* Adding alert component*/}
                    <Alert/>

                    {/*/!* Adding loader component*!/*/}
                    <Loader/>
                </NavigationContainer>
            </Provider>
        );
    } else return (<AppLoading/>)
}

