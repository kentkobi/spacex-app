import React from "react";

import { Text, StyleSheet, View } from "react-native";

function RocketItem({
  launch: { id, name, success_rate_pct, cost_per_launch, active }
}) {
  return (
    <View style={styles.container}>
      <Text>
        {name}: {active}
      </Text>
      <Text>
        {success_rate_pct}% success at {cost_per_launch} per launch
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10
  }
});

export default RocketItem;
