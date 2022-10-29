import { createGlobalStyle } from "styled-components";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import { useState } from "react";

function App() {
  const [fetchInfo, setFetchInfo] = useState(["empty"]);

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home setFetchInfo={setFetchInfo} fetchInfo={fetchInfo} />}
        />
        <Route
          path="/tv-shows"
          element={
            <TvShows setFetchInfo={setFetchInfo} fetchInfo={fetchInfo} />
          }
        />
        <Route
          path="/movies"
          element={<Movies setFetchInfo={setFetchInfo} fetchInfo={fetchInfo} />}
        />
      </Routes>
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
