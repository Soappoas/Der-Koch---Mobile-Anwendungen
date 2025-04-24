import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import React, { createContext, useContext, useState } from 'react';
import { View, Text } from 'react-native';


// das ist der zentrale speicher platz von react contect (alle components können darauf zurückgreifen, mit useConext)
const RecipeContext = createContext<any>(null);


export default function RecipeList(props: any) {
  const [recipes, setRecipes] = useState<any[]>([]); // leeres Array
  const addRecipe = (recipe: any) => {
    // baut neues array
    setRecipes([...recipes, recipe]);
  };

  
  return (
    <RecipeContext.Provider value={{ recipes, addRecipe }}>
      {props.children}
    </RecipeContext.Provider>
  );
}

export function useRecipes() {
  return useContext(RecipeContext);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
