import styled from "styled-components";
function Trailer() {
  return (
    <Container>
      <iframe
        width="100%"
        margin-top="-80px"
        height="500px"
        src="https://www.youtube.com/embed/i_mAWKyfj6c?playlist=i_mAWKyfj6c&loop=1&autoplay=1controls=0&modestbranding=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <MovieInfo>
        <p>Netflix Film</p>
        <h1>Halloween Ends</h1>
        <ButtonContainer>
          <Button>
            <span class="material-symbols-outlined">play_arrow</span>
            <p>Play</p>
          </Button>
          <Button>
            <span class="material-symbols-outlined">info</span>
            <p>More info</p>
          </Button>
        </ButtonContainer>
      </MovieInfo>
    </Container>
  );
}

export default Trailer;

const Container = styled.div`
  margin-top: -100px;
  position: relative;
`;

const MovieInfo = styled.div`
  position: absolute;
  display: grid;
  z-index: 20;
  top: 40%;
  left: 5%;
  & h1 {
    margin-top: 0px;
    padding: 0px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
  cursor: pointer;

  & * {
    margin: 0 2px;
  }
  &:last-child {
    color: #efefef;
    background-color: rgba(68, 68, 68, 0.8);
    &:hover {
      background-color: #2f2f2f;
    }
  }
`;
