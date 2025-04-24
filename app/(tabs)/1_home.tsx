import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';

export default function HomeScreen() {
    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Home</Text>
        </View>

        <Text style={styles.title}>The Crazy HM Chef</Text>
        <Image
            source={require('../../assets/images/CrazyChef.png')}
            style={styles.image}
            resizeMode="cover"
        />
        <Text style={styles.body}>Here you can find and collect the best recipes {"\n"} for your home made meals. Bon appétit!</Text>

    </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
        paddingTop: 30,
        paddingBottom: 10,
        width: '100%',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 18,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginVertical: 12,
        color: 'white',
    },
    image: {
        width: '90%',
        height: 480,
        borderRadius: 12,
    },
    body: {
        fontSize: 14,
        color: 'white',
        marginVertical: 20,
        textAlign: 'center',
    }
  });
