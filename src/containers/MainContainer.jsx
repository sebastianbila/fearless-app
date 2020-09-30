import React, {useEffect} from 'react';
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import {useDispatch} from "react-redux";
import AuthContainer from "./AuthContainer";
import {autoLogin} from "../redux/actions/authAction";

const Stack = createStackNavigator();

/**
 * Initialize container. Run on startup
 * @constructor
 */

function MainContainer() {
    const dispatch = useDispatch()
    const [renderer, setRender] = React.useState(true)

    useEffect(() => {
        dispatch(autoLogin())
        setRender(true)
    }, [])

    if (renderer) {
        return (
            <Stack.Navigator
                headerMode="none"
                mode="card"
                screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}
                initialRouteName="main">
                <Stack.Screen name="main" component={AuthContainer}/>
                {/*<Stack.Screen name="home" component={HomeContainer}/>*/}
            </Stack.Navigator>
        )
    } else return null
}

export default MainContainer;
