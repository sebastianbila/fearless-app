import React from 'react';
import {View} from 'react-native'
import {isIphoneX} from "../../../utils/helpers/AppleDevices";
import WorkoutAdapter from "./adapters/WorkoutAdapter";

export default function ShortWorkoutScreen(props) {
    const items = [
        {category: 'Calisthenics', title: 'Full planche', level: 'Advanced'},
        {category: 'Calisthenics', title: 'Front lever', level: 'Intermediate'},
    ]

    const viewAll = () => {
        props.navigation.navigate('detailWorkout')
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: 'flex-start',
            marginTop: isIphoneX ? 50 : 15
        }}>
            <WorkoutAdapter title='Technique guide' items={items} viewAllHandler={() => viewAll()}/>
        </View>
    );
}
