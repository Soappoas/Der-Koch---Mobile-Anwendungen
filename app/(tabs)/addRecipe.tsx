import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
/* import { Text } from '@/components/Themed';*/
import {View, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'react-native';

export default function addRecipe() {
  /* Hier sind die Statese initialisiert, wichtig useState einzeln zu importieren */
  const [name, setName] = useState('');
  const [description, setDescription] =  useState('');

  return (
    /* nicht einfach view sondern ScrollView damit es scrollbar ist */
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>New Recipe</Text>

      <View style={styles.header}>
        <Text style={styles.headerText}>Add a new Recipe</Text>
      </View>

      <TextInput
      style={styles.input}
      placeholder='Recipe Name'
      value={name}
      onChangeText={setName}
      />

      <TextInput
      style={[styles.input, styles.description]}
      placeholder="Description"
      value={description}
      onChangeText={setDescription}
      multiline
      />

      <TouchableOpacity style={styles.button}>
        <Text style={{ color: 'black', fontWeight: 'bold' }}>Add Image</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
       <Text style={{ color: 'black', fontWeight: 'bold' }}>Save Recipe</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  description: {
    height: 100,
    textAlignVertical: 'top',
  },
  link: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    marginVertical: 10,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 10,
    width: '100%',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    alignItems: 'center',
    marginBottom: 20,
},
  headerText: {
    color: 'white',
    fontSize: 18,
},
});
