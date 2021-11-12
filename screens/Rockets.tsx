import * as React from "react";
import { Text, StyleSheet, View } from "react-native";

import RocketList from "../components/RocketList";

export default function Launches() {
  return (
    <View style={styles.container}>
      <RocketList />
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
