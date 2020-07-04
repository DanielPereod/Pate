import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

//Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Components
import TabNav from "./TabNav";
import RecipeTemplate from "../screens/RecipeTemplate";

const Stack = createStackNavigator();
export default function MainNavigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Tabs">
          {(navProps) => (
            <TabNav
              {...navProps}
              mainColor={props.mainColor}
              handleMainColorChange={props.handleMainColorChange}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Recipe">
          {(navProps) => <RecipeTemplate {...navProps} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
