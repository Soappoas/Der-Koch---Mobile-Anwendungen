import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

// holt die dateien aus dem zentralen Speicher, der in _layout.tsx drin ist
import { useRecipes } from '../context/RecipeContext';

export default function RecipeListScreen() {
  const { recipes } = useRecipes();  

  return (
    <View style={styles.container}>
    <Text style={styles.title}>My Recipes</Text>

    <FlatList
      data={recipes}
      renderItem={({ item }: { item: any }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      )}
      keyExtractor={(_, index) => index.toString()}
    />
  </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    color: '#333',
  },
});