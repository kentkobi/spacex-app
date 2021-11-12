import * as React from "react";
import { Text, StyleSheet, View } from "react-native";

import Countdown from "../components/Countdown";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Next Launch</Text>
      <Countdown />
    </View>
  );
}

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
