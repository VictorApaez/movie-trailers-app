import styled from "styled-components";
import MovieSlide from "./MovieSlide";
import { useEffect, useState } from "react";

let apiKey = "4bb0e757619267e381c73a006aa412e2";
let urlTopMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

function Slider() {
  let [movies, setMovies] = useState("");
  useEffect(() => {
    fetch(urlTopMovies)
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.results);
        console.log(res.results);
      });
  }, []);
  return (
    <Container>
      {movies && movies.map((movie, i) => <MovieSlide key={i} data={movie} />)}
    </Container>
  );
}

export default Slider;

const Container = styled.div`
  background-color: yellow;
  width: 90%;
  display: flex;
  /* transform: translateX(-100%); */
`;
