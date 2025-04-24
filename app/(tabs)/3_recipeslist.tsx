import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

// holt die dateien aus dem zentralen Speicher, der in _layout.tsx drin ist
import { useRecipes } from '../context/RecipeContext';

export default function RecipeListScreen() {
  const { recipes } = useRecipes();  

  return (
    <View style={styles.container}>
      <View></View>
    <Text style={[styles.title, styles.titleText]}>My Recipes</Text>

    {recipes.length === 0 ? (
        <View style={styles.placeholderContainer}>
          <Image
            source={require('/Users/sophiabuettgen/test/assets/images/Mous.png')}
            style={styles.placeholderImage}
            resizeMode="contain"
          />
          <Text style={styles.placeholderText}>No recipes yet. Add your first one {"\n"}to feed the mouse!</Text>
        </View>
      ) : (
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
  )}
  </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  title: {
    paddingTop: 30,
    paddingBottom: 10,
    width: '100%',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 18,
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
  placeholderText: {
    fontSize: 14,
    color: 'white',
    marginVertical: 50,
    textAlign: 'center',
    marginTop: 12,
  },
  placeholderImage: {
    width: '90%',
    borderRadius: 12,
    flex: 1,
  },
  placeholderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  }
});