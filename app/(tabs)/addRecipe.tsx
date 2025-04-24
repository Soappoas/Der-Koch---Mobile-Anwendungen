import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  /** adjust cotainer todo */
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
