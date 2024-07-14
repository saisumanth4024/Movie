import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const moviesNumber = Math.floor(Math.random() * movies.length);

  const mainMovie = movies[moviesNumber];
  const { original_title, overview, id } = mainMovie;
  // console.log(mainMovie);

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
