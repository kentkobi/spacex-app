import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { LaunchType } from "./LaunchList";

function LaunchItem({
  launch: { mission_name, launch_year, launch_success }
}: {
  launch: LaunchType;
}) {
  return (
    <View style={styles.container}>
      <Text>
        {launch_success ? "SUCCESS" : "FAILED"} - {mission_name}
      </Text>
      <Text>({launch_year})</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10
  }
});

export default LaunchItem;
