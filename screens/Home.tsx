import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Countdown from "../components/Countdown";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Next Launch</Text>
      <Countdown />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export { HomeScreen };
