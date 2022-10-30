import styled from "styled-components";
import MovieSlide from "./MovieSlide";
import { useEffect, useState, useRef } from "react";

let apiKey = "4bb0e757619267e381c73a006aa412e2";

function Slider(props) {
  let [movies, setMovies] = useState("");
  const [loading, setLoading] = useState(true);
  const refSlider = useRef(null);

  let slide = 0;
  function fetchData() {
    let urlTopMovies = `https://api.themoviedb.org/3${props.genre}?api_key=${apiKey}`;
    fetch(urlTopMovies)
      .then((res) => res.text())
      .then((res) => {
        const json = res === "" ? {} : JSON.parse(res);
        return json;
      })
      .then((res) => {
        setLoading(false);
        setMovies(res.results);
      })
      .catch(error=>{
        console.log("ERROR: "+error)
      });
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchData, [props.fetchInfo]);
  
  const handleLeft = () => {
    if (slide > 0) slide -= 100;
    refSlider.current.style.transform = `translateX(-${slide}%)`;
  };
  const handleRight = (e) => {
    if (slide + 100 < 400) slide += 100;
    refSlider.current.style.transform = `translateX(-${slide}%)`;
  };

  if (loading) return <p></p>;
  return (
    <>
      <Header>{props.title}</Header>
      <Container>
        <Button onClick={handleLeft}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </Button>
        <SlideContainer ref={refSlider}>
          {movies &&
            movies.map((movie, i) => <MovieSlide key={i} data={movie} />)}
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
  display: flex;
  transition: transform 1s ease-in-out;
  
  &:hover div {
    transform: translateX(-12%);
    transition-delay: 0.3s;
  }
`;


