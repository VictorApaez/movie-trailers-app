import styled from "styled-components";
import MovieSlide from "./MovieSlide";
import { useEffect, useState, useRef } from "react";

let apiKey = "4bb0e757619267e381c73a006aa412e2";

function Slider(props) {
  let [movies, setMovies] = useState();
  const refSlider = useRef(null);

  let slide = 0;
  function fetchData() {
    let success = (res) => (res.ok ? res.json() : Promise.resolve({}));
    let pageOne = fetch(
      `https://api.themoviedb.org/3${props.genre}?api_key=${apiKey}&page=1`
    ).then(success);
    let pageTwo = fetch(
      `https://api.themoviedb.org/3${props.genre}?api_key=${apiKey}&page=2`
    ).then(success);
    Promise.all([pageOne, pageTwo]).then(([pageOneRes, pageTwoRes]) => {
      let combined = [...pageOneRes.results, ...pageTwoRes.results.slice(0, 4)];
      setMovies(combined);
    });
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchData, [props.fetchInfo]);

  const handleLeft = () => {
    if (slide > 0) slide -= refSlider.current.clientWidth;
    refSlider.current.scrollTo({
      left: slide,
      behavior: "smooth",
    });
  };
  const handleRight = (e) => {
    if (slide + refSlider.current.clientWidth <= refSlider.current.scrollWidth)
      slide += refSlider.current.clientWidth;
    refSlider.current.scrollTo({
      left: slide,
      behavior: "smooth",
    });
  };
  function handlePosterClick(e, movie) {}

  return (
    <>
      <Header>{props.title}</Header>
      <Container>
        <Button onClick={handleLeft}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </Button>
        <SlideContainer ref={refSlider}>
          {movies &&
            movies.map((movie, i) => (
              <MovieSlide
                onClick={(e) => handlePosterClick(e, movie)}
                key={i}
                data={movie}
              />
            ))}
        </SlideContainer>
        <Button onClick={handleRight}>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </Button>
      </Container>
    </>
  );
}

export default Slider;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 5%;
  z-index: 999;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  overflow-y: visible;

  &:hover {
    ${Button} {
      opacity: 1;
    }
  }
`;

const Header = styled.h4`
  margin-left: 5%;
`;

const SlideContainer = styled.div`
  width: 90%;
  overflow-x: scroll;
  display: flex;
  transition: transform 1s ease-in-out;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;
