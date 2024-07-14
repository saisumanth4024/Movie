import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);

  return (
    <div className="font-bold bg-[#141414]">
      <div className="-mt-40 relative z-10">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Trending" movies={movies.popularMovies} />
        <MovieList title="Popular" movies={movies.nowPlayingMovies} />
        <MovieList title="UpComing movies" movies={movies.nowPlayingMovies} />
        <MovieList title="Horror" movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
