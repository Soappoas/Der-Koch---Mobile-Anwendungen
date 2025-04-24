// nur eine typscript datei, weil ich gar nicht die HTML artigen Dinger brauche wie View oder Text

import { createContext, useContext } from 'react';

// Daten von Typ Recipe definieren
type Recipe = {
  name: string;
  description: string;
  image: string | null;
};

// Context erstellen und ein Array mit Recipes
export const RecipeContext = createContext<{
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
} | null>(null);

// Custom Hook, um einfach auf den Context zuzugreifen
export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error('useRecipes must be used within a RecipeContext.Provider');
  }
  return context;
};


