import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

/* import { Text } from '@/components/Themed';*/
import {View, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'react-native';

import { useRecipes } from '../context/RecipeContext';


export default function AddRecipe() {
  /* Hier sind die Statese initialisiert, wichtig useState einzeln zu importieren */
  const { addRecipe } = useRecipes(); //test
  const [name, setName] = useState('');
  const [description, setDescription] =  useState('');
  const [image, setImage] = useState<string | null>(null); /* wir starten mit null also keinem image, deswegen hinter den klammern*/

  //test
  const handleSave = () => {
    addRecipe({ name, description, image: null });
    setName('');
    setDescription('');
  };

  /* Funktion um image zu picken aus der Gallerie */
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
    alert('It is required to have acess to the images!');
    return;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ['images'],
    quality: 1,
  });

  if (!result.canceled) {
    setImage(result.assets[0].uri); // speichere Bild-URI im State
  }
};

const handleAddRecipe = () => {
  //if (!name || !description) return;
  addRecipe({ name, description, image });
  setName('');
  setDescription('');
  setImage(null);
};

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
      style={[styles.description, styles.input]}
      placeholder="Description"
      value={description}
      onChangeText={setDescription}
      multiline
      />

      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={{ color: 'black', fontWeight: 'bold' }}>Add Image</Text>
      </TouchableOpacity>

      {image && (
      <Image
       source={{ uri: image }}
       style={{ width: 200, height: 200, borderRadius: 10, marginTop: 5, marginBottom: 5}}
      />
)}

      <TouchableOpacity style={styles.button} onPress={handleAddRecipe}>
       <Text style={{ color: 'black', fontWeight: 'bold' }}>Save Recipe</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
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
    height: 200,
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
    marginVertical: 4,
  },
  header: {
    paddingTop: 10,
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
