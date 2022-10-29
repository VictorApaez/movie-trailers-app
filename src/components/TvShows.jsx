import { useState } from "react";
import Sliders from "./Sliders";
function TvShows(props) {
  const [fetchInfo, setFetchInfo] = useState([
    ["TV Shows Playing Now", "/tv/on_the_air"],
    ["Top Rated TV Shows", "/tv/top_rated"],
    ["Popular TV Shows", "/tv/popular"],
    ["Airing Today", "/tv/airing_today"],
  ]);
  return (
    <>
      <Sliders data={fetchInfo} />
    </>
  );
}

export default TvShows;
