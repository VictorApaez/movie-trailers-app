import "./App.css";
import styled from "styled-components";
import Sliders from "./components/Sliders";

import Header from "./components/Header";
function App() {
  return (
    <Container>
      <Header />
      <Sliders />
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: black;
  height: 100vh;
  color: white;
`;
