import * as React from "react";
import { StyleSheet, View } from "react-native";
import { RocketList } from "../components/RocketList";

const RocketsScreen = () => {
  return (
    <View style={styles.container}>
      <RocketList />
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

export { RocketsScreen };
