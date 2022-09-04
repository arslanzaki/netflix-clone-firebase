import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID={1} title="Now Playing" fetchURL={requests.requestNowPlaying} />
      <Row rowID={2} title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID={3} title="Upcoming" fetchURL={requests.requestUpcoming} />
      <Row rowID={4} title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID={5} title="Popular" fetchURL={requests.requestPopular} />
      
    </div>
  );
};

export default Home;
