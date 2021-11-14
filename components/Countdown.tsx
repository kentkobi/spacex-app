import React, { useEffect, useState } from "react";
import { formatDuration, intervalToDuration } from "date-fns";
import { Text } from "react-native";
import { useQuery, gql } from "@apollo/client";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launchNext {
      mission_name
      mission_id
      launch_site {
        site_name_long
      }
      launch_date_utc
      rocket {
        rocket_name
      }
      details
    }
  }
`;

export default function countDown() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  const [timeLeft, setTimeLeft] = useState(null);

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

  const calculateTimeLeft = (date) => {
    let duration = intervalToDuration({
      start: new Date(),
      end: new Date(date)
    });
    return formatDuration(duration, {
      delimiter: ", "
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(data.launchNext.launch_date_utc));
    }, 1000);

    return () => clearTimeout(timer);
  }, [data.launchNext.launch_date_utc]);

  return <Text>{timeLeft}</Text>;
}
