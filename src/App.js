import { createGlobalStyle, ThemeProvider } from "styled-components";
import styled from "styled-components";
import Sliders from "./components/Sliders";
import Header from "./components/Header";
function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Sliders />
    </Container>
  );
}

export default App;

const Container = styled.div`
  color: white;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #141414;
  }
`;
