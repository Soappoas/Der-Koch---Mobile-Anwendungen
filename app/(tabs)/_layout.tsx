import React, { createContext, useState, useContext } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

//test
import { RecipeContext } from '../context/RecipeContext';


export default function Layout() {
  const [recipes, setRecipes] = useState<any[]>([]);

  const addRecipe = (recipe: any) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe }}>
      <TabLayout />
    </RecipeContext.Provider>
  );
}


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#c53525',
        tabBarInactiveTintColor: '#a6a6a6',
        headerShown: true,
      }}>
      
      <Tabs.Screen
        name="1_home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="2_addRecipe"
        options={{
          title: 'Add Recipe',
          tabBarIcon: ({ color }) => <TabBarIcon name="plus-circle" color={color}/>,
        }}
      />
      <Tabs.Screen
        name="3_recipeslist"
        options={{
          title: 'Recipes',
          tabBarIcon: ({ color }) => <TabBarIcon name="list-ul" color={color} />,
        }}
      />
      <Tabs.Screen
        name="4_search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
    
    </Tabs>
  );
}
