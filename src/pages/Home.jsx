import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row title="Now Playing" fetchURL={requests.requestNowPlaying} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Upcoming" fetchURL={requests.requestUpcoming} />
      <Row title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      
    </div>
  );
};

export default Home;
