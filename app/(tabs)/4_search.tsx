import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';

type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
};

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [meals, setMeals] = useState<Meal[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fetchMeals = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error('Fehler beim Abrufen der Daten:', error);
    }
  };

  const renderMealItem = ({ item }: { item: Meal }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.name}>{item.strMeal}</Text>
        <Text style={styles.category}>{item.strCategory}</Text>
        <TouchableOpacity onPress={() => setSelectedImage(item.strMealThumb)}>
          <Image source={{ uri: item.strMealThumb }} style={styles.thumb} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
              <Text style={styles.headerText}>The MealDB</Text>
      </View>

      <View style={styles.searchRow}>
        <TextInput
          style={styles.input}
          placeholder="Search a meal..."
          value={query}
          onChangeText={setQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={fetchMeals}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={meals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.idMeal}
      />

      <Modal
        visible={!!selectedImage}
        transparent={true}
        onRequestClose={() => setSelectedImage(null)}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={() => setSelectedImage(null)}
        >
          <Image source={{ uri: selectedImage! }} style={styles.fullImage} />
        </TouchableOpacity>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 20,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 15,
    fontSize: 16,
    borderRadius: 8,
    marginRight: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  category: {
    color: '#555',
    marginBottom: 8,
  },
  thumb: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: '#000000cc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '90%',
    height: '70%',
    borderRadius: 16,
  },
  searchButton: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 30,
  },
  
  searchButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  header: {
    paddingTop: 20,
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
