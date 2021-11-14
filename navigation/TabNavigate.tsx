import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/Home";
import { LaunchesScreen } from "../screens/Launches";
import { RocketsScreen } from "../screens/Rockets";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Rockets" component={RocketsScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Launches" component={LaunchesScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
