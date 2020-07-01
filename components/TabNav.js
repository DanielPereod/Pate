import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

//Navigation
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//Screens
import WhiteBreadScreen from "../screens/WhiteBreadScreen";
import PizzaScreen from "../screens/PizzaScreen";
import DonutsScreen from "../screens/DonutsScreen";
import RecipesScreen from "../screens/RecipesScreen";
import RecipeNavigation from "./RecipeNavigation";


//Recipes
import { pizza } from "../recipes";

const Tab = createMaterialTopTabNavigator();
export default function TabNav(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            fontSize: 15,
            fontFamily: "GilbertBold",
            textTransform: "capitalize",
            color: "#0f1c43",
          },
          tabStyle: { flex: 1 },
          indicatorStyle: {
            backgroundColor: "#fff",
            height: 4,
            borderRadius: 10,
            justifyContent: "center",
          },
          style: {
            marginBottom: 10,
            backgroundColor: props.mainColor,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0,
          },
        }}
      >
        <Tab.Screen name="Pizza">
          {(navProps) => (
            <RecipeNavigation
              {...navProps}
              handleMainColorChange={props.handleMainColorChange}
              recipesData={pizza}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Pan de Molde">
          {(navProps) => (
            <WhiteBreadScreen
              {...navProps}
              handleMainColorChange={props.handleMainColorChange}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Donuts">
          {(navProps) => (
            <DonutsScreen
              {...navProps}
              handleMainColorChange={props.handleMainColorChange}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
