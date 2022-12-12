import styled from "styled-components";
function Trailer() {
  return (
    <Container>
      <MovieInfo>
        <p>Movie Trailer</p>
        <h1>Halloween Ends</h1>
        <ButtonContainer>
          <Button>
            <span className="material-symbols-outlined">play_arrow</span>
            <p>Play</p>
          </Button>
          <Button>
            <span className="material-symbols-outlined">info</span>
            <p>More info</p>
          </Button>
        </ButtonContainer>
      </MovieInfo>
    </Container>
  );
}

export default Trailer;

const Container = styled.div`
  position: relative;
  background-image: url("https://image.tmdb.org/t/p/w185//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg");
  background-repeat: no-repeat;
  /* background-size: cover; */

  /* width: 100vw; */
  height: 100px;
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
