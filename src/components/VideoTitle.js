import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({ overview, title }) => {
  return (
    <div className="absolute aspect-video w-screen   bg-gradient-to-r from-black">
      <div className="absolute top-32 left-8">
        <h1 className="font-bold text-4xl py-2 text-white ">{title}</h1>
        <p className="text-md w-1/4 text-white ">{overview}</p>
        <div className="flex my-5">
          <button className="py-4  px-7  text-black  text-center text-xl w-[132px] bg-white border border-gray-700 rounded-lg mr-3 hover:bg-opacity-50">
            <span className="flex items-center">
              <FaPlay className="mr-2" />
              Play
            </span>
          </button>
          <button className="py-3 px-4 text-lg w-[142px] bg-slate-800 text-white border border-gray-700 rounded-lg mx-3 hover:bg-opacity-50">
            ℹ️ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
