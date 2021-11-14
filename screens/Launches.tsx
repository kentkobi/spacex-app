import * as React from "react";
import { StyleSheet, View } from "react-native";
import { LaunchList } from "../components/LaunchList";

const LaunchesScreen = () => {
  return (
    <View style={styles.container}>
      <LaunchList />
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

export { LaunchesScreen };
