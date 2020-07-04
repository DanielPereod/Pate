import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import RecipeTab from "../components/RecipeTab";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default class RecipesScreen extends Component {
  handleFocusScreen = this.props.navigation.addListener("focus", () => {
    this.props.handleMainColorChange(this.props.color);
  });

  handlePressNavigation = (navScreen) => {
    return this.props.navigation.navigate(navScreen);
  };

  showBasis = () => {
    const {color, recipesData, basis, navigation} = this.props
    if (basis) {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate("Recipe", {
            ingredients: recipesData[0][1],
            steps: recipesData[0][2],
            image: recipesData[0][3][0],
            mainColor: color,
          })}
        >
          <View style={styles.basisBox}>
            <RecipeTab
              color={color}
              image={recipesData[0][3][0]}
              recipeTitle={recipesData[0][0][0]}
            />
          </View>
        </TouchableOpacity>
      );
    }
  };
  render() {
    return (
      <ScrollView>
        {this.props.basis && this.showBasis()}
        <View style={styles.recipesBox}>
          {this.props.recipesData[1].map((recipe, key) => (
            <TouchableOpacity
              key={key}
              onPress={() =>
                this.props.navigation.navigate("Recipe", {
                  ingredients: recipe[1],
                  steps: recipe[2],
                  image: recipe[3][0],
                  mainColor: this.props.color,
                })
              }
            >
              <View style={styles.recipeTabBox}>
                <RecipeTab
                  color={"#f1f1f1"}
                  image={recipe[3][0]}
                  recipeTitle={recipe[0]}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const ScreenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  basisBox: {
    margin: 10,
    width: ScreenWidth - 20,
  },
  recipesBox: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  recipeTabBox: {
    flex: 1,
    width: ScreenWidth / 2 - 20,
    margin: 10,
  },
});
