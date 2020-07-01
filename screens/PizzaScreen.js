import React, { Component } from "react";
import { Text, View } from "react-native";
import RecipeTemplate from "./RecipeTemplate";

export default class PizzaScreen extends Component {
  ingredients = [
    ["harina", 149, "gr"],
    ["agua", 97, "gr"],
    ["sal", 5, "gr"],
    ["levadura", 0.15, "gr"],
  ];

  steps = [
    'Mezclar el agua, la levadura y la sal con una parte de harina y disolver la mezcla hasta que todo quede bien incorporado.', 
    'Añadir el resto de harina, amasar hasta que la masa quede elástica y dejar reposar durante 2 horas hasta que doble su tamaño.',
    'Dividir la masa en bolas de 250gr y dejar crecer la masa a temperatura ambiente durante 4-6h o toda la noche en la nevera',
    'Extender la masa sin tocar los bordes, añadir el topping y meter en el horno precalentado a temperatura máxima y lo más elevado posible hasta que la masa esté bien cocinada.'
  ]


  handleFocusScreen = this.props.navigation.addListener('focus', () => {
    this.props.handleMainColorChange("#fe8989");
  });

  render() {
    return (
      <RecipeTemplate
        ingredients={this.ingredients}
        steps = {this.steps}
        image={require("../assets/images/pizza.png")}
        mainColor='#fe8989'
      />
    );
  }
}
