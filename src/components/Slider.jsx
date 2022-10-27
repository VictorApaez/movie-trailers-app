import styled from "styled-components";
import MovieSlide from "./MovieSlide";
import { useEffect, useState, useRef } from "react";

let apiKey = "4bb0e757619267e381c73a006aa412e2";
let urlTopMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

function Slider() {
  let [movies, setMovies] = useState("");
  const refSlider = useRef(null);
  let slide = 0;
  useEffect(() => {
    fetch(urlTopMovies)
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.results);
      });
  }, []);
  const handleLeft = () => {
    if (slide > 0) slide -= 100;
    refSlider.current.style.transform = `translateX(-${slide}%)`;
  };
  const handleRight = (e) => {
    if (slide + 100 < 500) slide += 100;
    refSlider.current.style.transform = `translateX(-${slide}%)`;
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
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  overflow: hidden;
`;

const SlideContainer = styled.div`
  width: 90%;
  display: flex;
  transition: transform 1s ease-in-out;
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
