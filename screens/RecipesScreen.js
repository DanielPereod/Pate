import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import RecipeTab from "../components/RecipeTab";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default class RecipesScreen extends Component {
  handleFocusScreen = this.props.navigation.addListener("focus", () => {
    this.props.handleMainColorChange("#fe8989");
  });

  handlePressNavigation = (navScreen) => {
    return this.props.navigation.navigate(navScreen);
  };

  showBasis = () => {
    if (this.props.basis) {
      return (
        <View style={styles.basisBox}>
          <RecipeTab
            color={this.props.color}
            image={this.props.recipesData[0][3][0]}
            recipeTitle={this.props.recipesData[0][0][0]}
          />
        </View>
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
              onPress={() => this.props.navigation.navigate('Recipe', {
                ingredients: recipe[1],
                steps: recipe[2],
                image: recipe[3][0],
                mainColor: "#fe8989",
              })}
              style={styles.recipeBox}
            >
              <RecipeTab
                color={"#f1f1f1"}
                image={recipe[3][0]}
                recipeTitle={recipe[0]}
              />
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
    margin: 5,
    width: "100%",
  },
  recipesBox: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  recipeBox: {
    margin: 5,
    width: ScreenWidth / 2 - 10,
  },
});
