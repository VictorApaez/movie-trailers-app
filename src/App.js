import "./App.css";
import styled from "styled-components";
import Slider from "./components/Slider";

import Header from "./components/Header";
function App() {
  return (
    <Container>
      <Header />
      <Slider />
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: black;
  height: 100vh;
  color: white;
`;
