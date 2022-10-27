import { createGlobalStyle, ThemeProvider } from "styled-components";
import styled from "styled-components";
import Sliders from "./components/Sliders";
import Header from "./components/Header";
import Trailer from "./components/Trailer";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Trailer />
      <Sliders />
    </Container>
  );
}

export default App;

const Container = styled.div`
  position: relative;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #141414;
  }
`;
