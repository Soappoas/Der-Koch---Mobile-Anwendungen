import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text } from '@/components/Themed';
import {TextInput, ScrollView} from 'react-native';

export default function addRecipe() {
  /* Hier sind die Statese initialisiert, wichtig useState einzeln zu importieren */
  const [name, setName] = useState('');
  const [descripton, setDescription] =  useState('');

  return (
    /* nicht einfach view sondern ScrollView damit es scrollbar ist */
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add a New Recipe</Text>
      <TextInput
      style={styles.input}
      placeholder='Recipe Name'
      value={name}
      onChangeText={setName}
      />

      <TextInput
      style={[styles.input, styles.description]}
      placeholder="Description"
      value={descripton}
      onChangeText={setDescription}
      multiline
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, /** gleiche wie flex bei View, nutzt ganzen verfügbaren Platz */
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
