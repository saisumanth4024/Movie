import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { json } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTrailerKey } from "../utils/moviesSlice";

const useGetFetchMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const getTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const jsonData = await data.json();
    // console.log(jsonData);
    const filterVideo = jsonData.results?.filter(
      (video) => video.type === "Trailer"
    );
    // console.log(filterVideo);
    const videoNumber = Math.floor(Math.random() * filterVideo.length);
    // console.log(videoNumber);
    const trailer = filterVideo.length ? filterVideo[videoNumber] : jsonData;
    // console.log(trailer);
    dispatch(addTrailerKey(trailer.key));
  };
  useEffect(() => {
    getTrailer();
  }, []);
};

export default useGetFetchMovieTrailer;
