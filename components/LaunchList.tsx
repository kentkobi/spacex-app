import React from "react";
import { Text, FlatList, ScrollView } from "react-native";
import { useQuery, gql } from "@apollo/client";

import LaunchItem from "../components/LaunchItem";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      mission_name
      launch_success
      rocket {
        rocket_name
        rocket_type
      }
      launch_year
      id
      launch_date_utc
      details
    }
  }
`;

export default function LaunchList() {
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
      {data.launches.map((launch) => (
        <LaunchItem key={launch.id} launch={launch} />
      ))}
    </ScrollView>
  );
}
