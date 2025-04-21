import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.view1} />
            <View style={styles.view2} />
            <View style={styles.view3} />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view1: {
        flex: 1,
        backgroundColor: 'red',
    },
    view2: {
        flex: 1,
        backgroundColor: 'green',
    },
    view3: {
        flex: 1,
        backgroundColor: 'blue',
    },
});