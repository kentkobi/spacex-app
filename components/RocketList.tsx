import React from "react";
import { Text, ScrollView } from "react-native";
import { useQuery, gql } from "@apollo/client";
import RocketItem from "./RocketItem";

const ROCKETS_QUERY = gql`
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

export type RocketType = {
  id: string;
  name: string;
  success_rate_pct: number;
  type: string;
  cost_per_launch: number;
  active: string;
};

const RocketList = () => {
  const { loading, error, data } = useQuery(ROCKETS_QUERY);

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
      {data.rockets.map((rocket: RocketType, idx: string) => (
        <RocketItem key={idx} launch={rocket} />
      ))}
    </ScrollView>
  );
};

export { RocketList };
