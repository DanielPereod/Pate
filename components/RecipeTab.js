import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function RecipeTab(props) {
  return (
    <View  style={[styles.container,{ backgroundColor:props.color}]}>
      <Image  style={styles.recipeImage} source={props.image}/>
      <Text style={styles.recipeTitle}>{props.recipeTitle}</Text>
    </View>
  )
}
const ScreenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    fontFamily:'OpenSans',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
    elevation: 5,
  },
  recipeTitle:{
    fontFamily:'OpenSansBold'
  },
  recipeImage:{
    height: ScreenHeight/4,
    width: "100%",
    resizeMode: "contain",
  }
})