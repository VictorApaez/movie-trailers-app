import styled from "styled-components";
import Slide from "./Slider";
function Sliders() {
  return (
    <Container>
      <Header>New Releases</Header>
      <Slide />
      <Header>Trending Now</Header>
      <Slide />
    </Container>
  );
}

export default Sliders;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Header = styled.h3``;
