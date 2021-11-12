import React from "react";
import { Text, FlatList, ScrollView } from "react-native";
import { useQuery, gql } from "@apollo/client";

import RocketItem from "./RocketItem";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    rockets {
      id
      name
      success_rate_pct
      type
      cost_per_launch
      active
    }
  }
`;

export default function RocketList() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading)
    return (
      <>
        <Text>Loading...</Text>
      </>
    );

  if (error)
    return (
      <>
        <Text>Oops something went wrong</Text>
      </>
    );

  return (
    <ScrollView>
      {data.rockets.map((rocket) => (
        <RocketItem key={rocket.id} launch={rocket} />
      ))}
    </ScrollView>
  );
}
