import Sliders from "./Sliders";
import { useState } from "react";

function Home(props) {
  const [fetchInfo, setFetchInfo] = useState([
    ["Movies Playing Now", "/movie/now_playing"],
    ["TV Shows Playing Now", "/tv/on_the_air"],
    ["Popular TV Shows", "/tv/popular"],
    ["Popular Movies", "/movie/popular"],
    ["Popular TV Shows", "/tv/popular"],
  ]);

  return (
    <>
      <Sliders data={fetchInfo} setFetchInfo={setFetchInfo} />
    </>
  );
}

export default Home;
