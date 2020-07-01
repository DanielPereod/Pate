import React from "react";
import { View, Text } from "react-native";

//Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import DonutsScreen from "../screens/DonutsScreen";
import RecipesScreen from "../screens/RecipesScreen";

//Components
import RecipeTemplate from "../screens/RecipeTemplate";

const Stack = createStackNavigator();

export default function RecipeNavigation(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main">
        {(navProps) => (
          <RecipesScreen
            {...navProps}
            handleMainColorChange={props.handleMainColorChange}
            color="#fe8989"
            recipesData={props.recipesData}
            basis={true}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Recipe">
        {(navProps) => <RecipeTemplate {...navProps} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
