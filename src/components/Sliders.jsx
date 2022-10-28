import styled from "styled-components";
import Slider from "./Slider";
function Sliders(props) {
  return (
    <Container>
      {props.data.map((genre, i) => {
        return (
          <Slider
            key={i}
            genre={genre[1]}
            title={genre[0]}
            fetchInfo={props.data}
          />
        );
      })}
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
