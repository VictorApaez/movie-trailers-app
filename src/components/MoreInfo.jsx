import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

function MoreInfo() {
  const location = useLocation();
  const [youtubeKey, setYoutubeKey] = useState(null);
  const { data } = location.state;
  let apiKey = "4bb0e757619267e381c73a006aa412e2";

  useEffect(() => {
    let url;
    if (data.title) {
      url = `https://api.themoviedb.org/3/movie/${data.id}?api_key=${apiKey}&append_to_response=videos`;
    } else {
      url = `https://api.themoviedb.org/3/tv/${data.id}/videos?api_key=${apiKey}`;
    }
    fetch(url)
      .then((res) => res.text())
      .then((res) => {
        const json = res === "" ? {} : JSON.parse(res);
        return json;
      })
      .then((res) => {
        console.log(res);
        let key;
        if (res.videos) {
          key = res?.videos.results.find(
            (item) =>
              item.name.includes("Trailer") || item.name.includes("Promo")
          )?.key;
        } else {
          key = res?.results.find(
            (item) =>
              item.name.includes("Trailer") || item.name.includes("Promo")
          )?.key;
        }
        if (key) {
          setYoutubeKey(key);
        }
      })
      .catch((error) => {
        console.log("ERROR: " + error);
      });
  });

  return (
    <Container>
      {(youtubeKey && (
        <iframe
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${youtubeKey}?autoplay=1&&modestbranding=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )) || (
        <img
          alt="poster"
          src={`https://image.tmdb.org/t/p/w185/${data.poster_path}`}
        ></img>
      )}
      <ContainerInfo>
        <h2>{data.title || data.name}</h2>
        <p>Release Date: {data.release_date}</p>
        <p>Rating: {data.vote_average} / 10</p>
        <p>{data.overview}</p>
      </ContainerInfo>
    </Container>
  );
}

export default MoreInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & iframe {
    border: none;
  }
`;

const ContainerInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  max-width: 800px;
  & > * {
    margin: 5px;
    padding: 0;
  }
`;
