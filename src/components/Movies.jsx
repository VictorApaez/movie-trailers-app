import { useEffect, useState } from "react";
import Sliders from "./Sliders";
function Movies(props) {
  const [fetchInfo, setFetchInfo] = useState(["Empty Movies"]);

  const apiData = [
    ["Movies Coming Soon", "/movie/upcoming"],
    ["Movies Playing Now", "/movie/now_playing"],
    ["Top Rated Movies", "/movie/top_rated"],
    ["Popular Movies", "/movie/popular"],
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

export default Movies;
