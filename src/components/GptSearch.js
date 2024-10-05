import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_NETFLIX } from "../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <img className="absolute" src={BG_NETFLIX} alt="netflix_backLogo" />
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
