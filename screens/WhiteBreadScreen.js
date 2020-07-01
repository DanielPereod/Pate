import React, { Component } from "react";
import { Text, View } from "react-native";
import RecipeTemplate from "./RecipeTemplate";

export default class WhiteBreadScreen extends Component {
  ingredients = [
    ["harina", 900 / 2, "gr"],
    ["agua", 236 / 2, "gr"],
    ["leche", 236 / 2, "gr"],
    ["aceite", 90 / 2, "gr"],
    ["azucar", 88 / 2, "gr"],
    ["sal", 18 / 2, "gr"],
    ["levadura", 9 / 2, "gr"],
  ];

  steps = [
    "Mezclar todos los ingredientes, amasar hasta conseguir una masa homogénea y dejar reposar durante 1h.", 
    "Amasar 2 veces durante 10 minutos dejando reposar la masa 15-30min entre amasado y amasado.",
    'Dar forma al pan y dejar resposar en un molde con aceite hasta que doble en tamaño.',
    'Cocinar a 200°C durante 30 minutos o hasta que el pan esté dorado.'
  ];

  handleFocusScreen = this.props.navigation.addListener("focus", () => {
    this.props.handleMainColorChange("#FFD151");
  });

  render() {
    return (
      <RecipeTemplate
        ingredients={this.ingredients}
        steps={this.steps}
        image={require("../assets/images/whitebread.png")}
        mainColor="#FFD151"
      />
    );
  }
}
