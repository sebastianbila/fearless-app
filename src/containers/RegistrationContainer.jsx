import React from 'react';
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import GenderScreen from "../pages/auth/registration/GenderScreen";
import WeightScreen from "../pages/auth/registration/WeightScreen";
import HeightScreen from "../pages/auth/registration/HeightScreen";
import LevelScreen from "../pages/auth/registration/LevelScreen";
import GoalsScreen from "../pages/auth/registration/GoalsScreen";
import CompleteAccountScreen from "../pages/auth/registration/CompleteAccountScreen";

const Stack = createStackNavigator();

export default function RegistrationContainer(props) {
    const components = [
        {name: 'gender', Component: GenderScreen},
        {name: 'weight', Component: WeightScreen},
        {name: 'height', Component: HeightScreen},
        {name: 'level', Component: LevelScreen},
        {name: 'goals', Component: GoalsScreen},
        {name: 'complete', Component: CompleteAccountScreen},
    ]

    const renderComponents = components.map(({name, Component}, index) =>
        <Stack.Screen key={index} name={name}>
            {() => <Component navigation={props.navigation} page={index}/>}
        </Stack.Screen>
    )

    return (
        <Stack.Navigator
            headerMode="none"
            mode="card"
            screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}
            initialRouteName="gender">
            {renderComponents}
        </Stack.Navigator>
    );
}
