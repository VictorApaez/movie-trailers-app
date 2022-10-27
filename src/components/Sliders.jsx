import styled from "styled-components";
import Slider from "./Slider";
function Sliders() {
  // let upcomingMovies =

  return (
    <Container>
      <Header>Movies Playing Now</Header>
      <Slider genre={"/movie/now_playing"} />

      <Header>TV Shows Playing Now</Header>
      <Slider genre={"/tv/on_the_air"} />

      <Header>Top Rated TV Shows</Header>
      <Slider genre={"/tv/popular"} />

      <Header>Popular Movies</Header>
      <Slider genre={"/movie/popular"} />

      <Header>Popular TV Shows</Header>
      <Slider genre={"/tv/popular"} />
    </Container>
  );
}

export default Sliders;

const Container = styled.div`
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Header = styled.h4`
  margin-left: 5%;
`;
