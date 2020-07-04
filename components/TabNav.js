import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

//Navigation
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//Screens
import RecipesScreen from "../screens/RecipesScreen";

//Recipes
import { pizza, donut, whiteBread } from "../recipes";

const Tab = createMaterialTopTabNavigator();
export default function TabNav(props) {
  return (
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
          <RecipesScreen
            {...navProps}
            color="#7189bf"
            handleMainColorChange={props.handleMainColorChange}
            recipesData={pizza}
            basis={true}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Pan de Molde">
        {(navProps) => (
          <RecipesScreen
            {...navProps}
            color="#df7599"
            handleMainColorChange={props.handleMainColorChange}
            recipesData={whiteBread}
            basis={true}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Donuts">
        {(navProps) => (
          <RecipesScreen
            {...navProps}
            color="#ffc785"
            handleMainColorChange={props.handleMainColorChange}
            recipesData={donut}
            basis={true}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
