import * as React from "react";
import { Text, StyleSheet, View } from "react-native";

import LaunchList from "../components/LaunchList";

export default function Launches() {
  return (
    <View style={styles.container}>
      <LaunchList />
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
