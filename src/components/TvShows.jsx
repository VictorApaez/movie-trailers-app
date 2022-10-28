import { useEffect, useState } from "react";
import Sliders from "./Sliders";
function TvShows(props) {
  const [fetchInfo, setFetchInfo] = useState(["Empty TV show"]);
  const apiData = [
    ["TV Shows Playing Now", "/tv/on_the_air"],
    ["Top Rated TV Shows", "/tv/top_rated"],
    ["Popular TV Shows", "/tv/popular"],
    ["Airing Today", "/tv/airing_today"],
  ];
  useEffect(() => {
    setFetchInfo(apiData);
  }, []);

  return (
    <>
      <Sliders data={fetchInfo} />
    </>
  );
}

export default TvShows;
