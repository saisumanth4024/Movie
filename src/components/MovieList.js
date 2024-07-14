import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //   console.log({ ...props });
  //   console.log(movies);
  if (!movies) return;
  return (
    <div className="px-6 z-10">
      <h1 className="text-2xl mx-2 text-white font-bold my-2">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar">
        <div className="flex m-2">
          {movies.map((movie) => (
            <MovieCard poster={movie.poster_path} key={movie.id} />
          ))}
        </div>
      </div>
      {/* <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard /> */}
    </div>
  );
};

export default MovieList;
