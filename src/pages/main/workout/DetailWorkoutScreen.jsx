import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native'
import Toolbar from "../../../components/basic/Toolbar";
import WorkoutItem from "./adapters/WorkoutItem";

export default function DetailWorkoutScreen(props) {
    const items = [
        {category: 'Calisthenics', title: 'Full planche', level: 'Advanced'},
        {category: 'Calisthenics', title: 'Front lever', level: 'Intermediate',},
    ]

    const renderItems = items.map((item, key) =>
        <WorkoutItem
            key={key}
            category={item.category}
            title={item.title}
            level={item.level}
            image={item.image}
            view='detail'/>
    )

    return (
        <View style={{
            flex: 1,
            alignItems: 'center'
        }}>
            <Toolbar text='Programs' nav={props.navigation}/>
            <ScrollView
                contentContainerStyle={styles.alignItems}
                style={styles.scrollView}>
                <View style={styles.textContainer}><Text style={styles.textTitle}>Beginner</Text></View>
                {renderItems}
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    scrollView: {
        width: '100%',
        marginTop: 10
    },
    alignItems: {
        alignItems: 'center'
    },
    textContainer: {
        width: '90%',
        marginBottom: 10
    },
    textTitle: {
        fontFamily: 'SF Bold',
        fontSize: 14,
        textTransform: 'uppercase'
    },
})


