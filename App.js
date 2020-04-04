import React from "react";
import { StyleSheet } from "react-native";
import Header from "./src/components/Header";
import StartGameScreen from "./src/screens/StartGameScreen";
import { View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      <StartGameScreen></StartGameScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
