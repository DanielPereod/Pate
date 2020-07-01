import React, { Component } from "react";

import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import Slider from "../components/Slider";
import { ScrollView } from "react-native-gesture-handler";

export default class RecipeTemplate extends Component {
  state = {
    sliderValue: 1,
    ingredients: this.props.route === undefined ? this.props.ingredients : this.props.route.params.ingredients,
    steps: this.props.route === undefined ? this.props.steps : this.props.route.params.steps,
  };


  handleSliderState = (value) =>
    this.setState((prevState, props) => ({ sliderValue: value }));

  render() {
    return (
      <View style={styles.homeContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollIngredientsBox}
        >
          <View
            style={[
              styles.imageContainer,
              { backgroundColor: this.props.route === undefined ? this.props.mainColor : this.props.route.params.mainColor},
            ]}
          >
            <Image style={styles.mainImage} source={this.props.route === undefined ? this.props.image : this.props.route.params.image} />
          </View>

          <View style={styles.ingredientsBox}>
            <View>
              {this.state.ingredients.map((ingredient, key) => {
                return (
                  <View key={key} style={styles.ingredientBox}>
                    <Text style={styles.ingredientNumber}>
                      {Math.round(
                        ingredient[1] * this.state.sliderValue * 100
                      ) / 100}
                    </Text>
                    <Text style={styles.ingredientMeasure}>
                      {ingredient[2]}
                    </Text>
                    <Text style={styles.ingredientName}>{ingredient[0]}</Text>
                  </View>
                );
              })}
            </View>
            <Slider changeState={this.handleSliderState} />
            <Text>Cantidad: {this.state.sliderValue}</Text>
          </View>
          <View style={styles.recipeInstructionsBox}>
            {this.state.steps.map((step, key) => {
              return (
                <View style={styles.recipeInstruction} key={key}>
                  <Text style={styles.recipeInstructionKey}>{key + 1}</Text>
                  <Text style={styles.recipeInstructionStep}>{step}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
const ScreenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
  },
  imageContainer: {
    height: ScreenHeight / 3,
    width: "100%",
    backgroundColor: "#fe8989",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
    elevation: 5,
  },
  mainImage: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
  },
  ingredientName: {
    fontSize: 20,
    textTransform: "capitalize",
    fontFamily: "OpenSansBold",
  },
  ingredientNumber: {
    fontSize: 40,
    textTransform: "capitalize",
    marginRight: 0,
  },
  ingredientMeasure: {
    marginRight: 10,
  },
  ingredientBox: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  ingredientsBox: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
    width: "100%",
    paddingBottom: 50,
  },
  scrollIngredientsBox: {
    paddingBottom: 50,
    width: "100%",
  },
  recipeInstructionsBox: {
    marginHorizontal: 20,
    paddingBottom: 40

  },
  recipeInstruction:{
    flexDirection: 'row',
    marginVertical: 10,    
  },
  recipeInstructionKey:{
    fontSize: 40,
    lineHeight: 40,
    marginRight: 10
  },
  recipeInstructionStep:{
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 15,

  }
});
