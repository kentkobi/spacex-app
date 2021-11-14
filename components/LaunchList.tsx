import React from "react";
import { Text, ScrollView } from "react-native";
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

export type LaunchType = {
  mission_name: string;
  launch_success: boolean;
  rocket: RocketDetails;
  launch_year: number;
  id: string;
  launch_date_utc: string;
  details: string;
};

type RocketDetails = {
  rocket_name: string;
  rocket_type: string;
};

const LaunchList = () => {
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
      {data.launches.map((launch: LaunchType, idx: string) => (
        <LaunchItem key={idx} launch={launch} />
      ))}
    </ScrollView>
  );
};

export { LaunchList };
