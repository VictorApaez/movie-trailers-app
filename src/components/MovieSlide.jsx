import styled from "styled-components";
import { Link } from "react-router-dom";

function MovieSlide(props) {
  return (
    <Container to="/more-info" state={{ data: props.data }}>
      <Image
        src={`https://image.tmdb.org/t/p/w185/${props.data.poster_path}`}
      ></Image>
      <Info>
        <p>{props.data.title || props.data.name}</p>
      </Info>
    </Container>
  );
}

export default MovieSlide;

const Container = styled(Link)`
  flex: 0 0 33.3%;
  position: relative;
  aspect-ratio: 185/278;
  overflow: visible;
  transition: transform 0.5s ease-in-out;
  cursor: pointer;
  margin: 0 3px;
  @media (min-width: 600px) {
    flex-basis: 25%;
  }
  @media (min-width: 900px) {
    flex-basis: 16.666%;
  }
  @media (min-width: 1200px) {
    flex-basis: 12.5%;
  }
`;
const Info = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items: center;
  height: 100%;
  opacity: 0;
  width: 100%;
  transition: all ease-in 0.3s;
  color: white;
  border-radius: 6px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 1;
  }
`;
const Image = styled.div`
  border-radius: 6px;
  background: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-clip: content-box;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: block;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transition-delay: 0.3s;
    z-index: 99;
  }
`;
