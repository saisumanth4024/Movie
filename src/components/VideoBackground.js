import React from "react";
import useGetFetchMovieTrailer from "../hooks/useGetFetchMovieTrailer";
import { useDispatch, useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  const trailer = useSelector((store) => store.movies.trailerKey);

  useGetFetchMovieTrailer(id);
  // console.log(trailer);

  return (
    <div className="w-screen ">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer}?autoplay=1&mute=1&controls=0 `}
        title="YouTube video player"
        allow=" autoplay; encrypted-media; gyroscope;  web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
