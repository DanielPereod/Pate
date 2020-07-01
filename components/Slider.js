import React, { Component } from "react";
import { Text, View, Button, Slider, StyleSheet } from "react-native";

export default class SliderClass extends Component {
  state = {
    slideValue: "",
  };

  render() {
    return (
      <View style={styles.container}>
        <Slider
          style={styles.slider}
          step={1}
          minimumValue={1}
          maximumValue={10}
          onValueChange={(value) => this.props.changeState(value)}
          thumbTintColor="#fe8989"
          maximumTrackTintColor="#fe8989"
          minimumTrackTintColor="#fe8989"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: '90%',
    height: 50,
  },
});
