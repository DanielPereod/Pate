import React, { Component } from "react";
import { Text, View } from "react-native";
import RecipeTemplate from "./RecipeTemplate";

export default class DonutsScreen extends Component {
  ingredients = [
    ["harina", 280, "gr"],
    ["azucar", 40, "gr"],
    ["huevos", 1, "ud"],
    ["sal", 5, "gr"],
    ["leche", 120, "gr"],
    ["mantequilla", 40, "gr"],
    ["levadura", 7, "gr"],
  ];

  steps = [
    "Mezclar todos los ingredientes con una cuchara y dejar reposar duante 15min",
    'Amasar con las manos untadas en aceite durante 15minutos (la masa estará muy pegajosa) y dejar reposar durante 2h',

    'Echar harina en una superficie plana y extender la masa bien enharinada hasta tener un grosor de aproximadamente 1cm',
    'Hacer la forma de los donuts y dejar creciendo 30min',
    'Freir en una con abundante aceite a una temperatura de 160°C hasta que estén dorados.'
  ];
/* 
  handleFocusScreen = this.props.navigation.addListener("focus", () => {
    this.props.handleMainColorChange("#fec3c7");
  }); */

  render() {
    return (
      <RecipeTemplate
        ingredients={this.ingredients}
        steps={this.steps}
        image={require("../assets/images/donut.png")}
        mainColor="#fec3c7"
      />
    );
  }
}
