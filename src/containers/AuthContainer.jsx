import React, {useEffect} from 'react';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import {useSelector} from "react-redux";
import MainScreen from "../pages/main/MainScreen";
import LoginScreen from "../pages/auth/login/LoginScreen";
import ResetPasswordScreen from "../pages/auth/login/ResetPasswordScreen";
import RegistrationContainer from "./RegistrationContainer";
import HomeContainer from "./HomeContainer";

const Stack = createStackNavigator();

function AuthContainer(props) {
    const user = useSelector(state => state.auth.currentUser)

    useEffect(() => {
        if (user !== null) props.navigation.replace("home")
    }, [user])

    return (
        <Stack.Navigator
            headerMode="none"
            mode="card"
            screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}
            initialRouteName="main">
            <Stack.Screen name="main" component={MainScreen}/>
            <Stack.Screen name="login" component={LoginScreen}/>
            <Stack.Screen name="resetPassword" component={ResetPasswordScreen}/>
            <Stack.Screen name="registration" component={RegistrationContainer}/>
            <Stack.Screen name="home" component={HomeContainer}/>
        </Stack.Navigator>
    );
}

export default AuthContainer;
