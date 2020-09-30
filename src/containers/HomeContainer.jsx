import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import NavigationIcon from "../components/basic/NavigationIcon";
import HomeScreen from "../pages/main/home/HomeScreen";
import WorkoutScreen from "../pages/main/workout/WorkoutScreen";
import ActiveWorkoutScreen from "../pages/main/active-workout/ActiveWorkoutScreen";
import GoalsScreen from "../pages/main/goals/GoalsScreen";
import ProfileScreen from "../pages/main/profile/ProfileScreen";
import Colors from "../utils/helpers/Colors";

const BottomTab = createMaterialBottomTabNavigator();

export default function HomeContainer() {
    const navigations = [
        {name: "home", Component: HomeScreen},
        {name: "workout", Component: WorkoutScreen},
        {name: "activeWorkout", Component: ActiveWorkoutScreen},
        {name: "goals", Component: GoalsScreen},
        {name: "profile", Component: ProfileScreen},
    ]

    const renderNavigations = navigations.map(
        ({name, Component}, key) =>
            <BottomTab.Screen
                key={key}
                name={name}
                component={Component}
                options={{
                    tabBarLabel: name.charAt(0).toUpperCase(),
                    tabBarIcon: ({color}) => (<NavigationIcon fill={color} icon={name}/>),
                }}
            />
    )

    return (
        <BottomTab.Navigator
            style={{backgroundColor: Colors.background}}
            initialRouteName="workout"
            activeColor={Colors.white}
            inactiveColor={Colors.gray}
            labeled={false}
            barStyle={{backgroundColor: Colors.black}}>
            {renderNavigations}
        </BottomTab.Navigator>
    );
}

