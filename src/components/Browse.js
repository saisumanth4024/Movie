import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptState = useSelector((store) => store.gpt.showGptSearch);
  // console.log("gptState in browse:", gptState);
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {gptState ? (
        <GptSearch />
      ) : (
        <>
          {/* {console.log("this is ok")} */}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
