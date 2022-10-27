import styled from "styled-components";
import Slide from "./Slider";
function Sliders() {
  return (
    <Container>
      <Slide />
      <Slide />
    </Container>
  );
}

export default Sliders;

const Container = styled.div`
  background-color: orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
