import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql",
  cache: new InMemoryCache()
});

const Stack = createNativeStackNavigator();

import HomeScreen from "./screens/Home";
import LaunchesScreen from "./screens/Launches";

import TabNavigator from "./navigation/TabNavigate";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
}
