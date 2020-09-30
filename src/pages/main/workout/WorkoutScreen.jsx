import React from 'react';
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import ShortWorkoutScreen from "./ShortWorkoutScreen";
import DetailWorkoutScreen from "./DetailWorkoutScreen";

const Stack = createStackNavigator();

export default function WorkoutScreen() {
    return (
        <Stack.Navigator
            headerMode="none"
            mode="card"
            screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}
            initialRouteName="shortWorkout">
            <Stack.Screen name="shortWorkout" component={ShortWorkoutScreen}/>
            <Stack.Screen name="detailWorkout" component={DetailWorkoutScreen}/>
        </Stack.Navigator>
    );
}

