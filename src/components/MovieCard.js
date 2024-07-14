import React from "react";
import { IMAGE_CDN } from "../utils/constant";

const MovieCard = ({ poster }) => {
  //   console.log(props);
  return (
    <div className="w-48 mx-1 ">
      <img
        className="w-full h-40 relative hover:scale-125 z-10"
        src={`${IMAGE_CDN}${poster}`}
        alt="movie_poster"
      />
    </div>
  );
};

export default MovieCard;
