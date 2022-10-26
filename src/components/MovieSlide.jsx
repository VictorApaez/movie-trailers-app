import styled from "styled-components";

function MovieSlide(props) {
  return (
    <Image
      src={`https://image.tmdb.org/t/p/w185/${props.data.poster_path}`}
    ></Image>
  );
}

export default MovieSlide;

const Image = styled.div`
  flex: 0 0 25%;
  background: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-clip: content-box;
  aspect-ratio: 16/9;
  padding: 0.2rem;
`;
