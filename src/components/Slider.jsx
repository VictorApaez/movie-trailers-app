import styled from "styled-components";
import MovieSlide from "./MovieSlide";
import { useEffect, useState, useRef } from "react";

let apiKey = "4bb0e757619267e381c73a006aa412e2";
let urlTopMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

function Slider() {
  let [movies, setMovies] = useState("");
  const refSlider = useRef(null);

  useEffect(() => {
    fetch(urlTopMovies)
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.results);
      });
  }, []);
  const handleLeft = (e) => {
    console.log(refSlider.current);
  };
  const handleRight = (e) => {
    console.log(refSlider.current);
  };

  return (
    <Container>
      <Button onClick={handleLeft}>L</Button>
      <SlideContainer ref={refSlider}>
        {movies &&
          movies.map((movie, i) => <MovieSlide key={i} data={movie} />)}
      </SlideContainer>
      <Button onClick={handleRight}>R</Button>
    </Container>
  );
}

export default Slider;

const Container = styled.div`
  background-color: yellow;
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`;

const SlideContainer = styled.div`
  background-color: purple;
  width: 90%;
  display: flex;
  /* transform: translateX(-100%); */
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 5%;
  z-index: 999;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }
`;
