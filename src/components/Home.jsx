import Sliders from "./Sliders";
import Trailer from "./Trailer";
import { useEffect, useState } from "react";

function Home(props) {
  const [fetchInfo, setFetchInfo] = useState(["Empty Movies"]);

  const apiData = [
    ["Movies Playing Now", "/movie/now_playing"],
    ["TV Shows Playing Now", "/tv/on_the_air"],
    ["Popular TV Shows", "/tv/popular"],
    ["Popular Movies", "/movie/popular"],
    ["Popular TV Shows", "/tv/popular"],
  ];

  useEffect(() => {
    setFetchInfo(apiData);
  }, []);

  return (
    <>
      <Trailer />
      <Sliders data={fetchInfo} />
    </>
  );
}

export default Home;
