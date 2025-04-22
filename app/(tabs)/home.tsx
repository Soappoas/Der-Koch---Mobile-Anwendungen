import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

export default function HomeScreen() {
    return (
    <SafeAreaView style={styles.container}>
        <Text>Hello World</Text>
    </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d96b63',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
