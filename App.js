import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar, Button } from "react-native";
import TabNav from "./components/TabNav";
import * as Font from "expo-font";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default class App extends Component {
  state = {
    fontsLoaded: false,
    mainColor: "#fe8989",
  };

  handleMainColorChange = (color) => {
    this.setState({mainColor: color})
  }

  async componentDidMount() {
    await Font.loadAsync({
      OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
      GilbertBold: require("./assets/fonts/Gilbert-Bold.otf"),
      OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"), //Path to fonts
    });
    this.setState({ fontsLoaded: true });
  }

  Tab = createBottomTabNavigator();
  render() {
    if (this.state.fontsLoaded) {
      return (
        <SafeAreaProvider>
          <StatusBar backgroundColor={this.state.mainColor} />
          <SafeAreaView>
            <View
              style={styles.title}
              style={{
                backgroundColor: this.state.mainColor,
                paddingTop: 10,
                paddingLeft: 10,
              }}
            >
              <Text style={styles.titleText}>Pâte</Text>
            </View>
          </SafeAreaView>
          <View style={{ flex: 1, backgroundColor: this.state.mainColor }}>
            <TabNav mainColor={this.state.mainColor} handleMainColorChange={this.handleMainColorChange} />
          </View>
        </SafeAreaProvider>
      );
    } else {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontFamily: "GilbertBold",
    fontSize: 30,
  },
});
