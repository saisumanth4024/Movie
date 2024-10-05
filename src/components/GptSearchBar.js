import React from "react";
import lang from "../utils/languageContent";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.languageSelected);
  console.log("lang:", lang);
  console.log("lang:", lang?.["en"]);
  console.log(lang?.[`${language}`]?.placeHolderSearch);
  return (
    <div className="bg-gradient-to-r to from-black h-[40vh]">
      <form className="w-[75%] relative top-24 mx-auto">
        <input
          type="text"
          autoFocus
          className=" w-[50%] ml-32 border m-8 p-4  rounded-md "
          placeholder={lang?.[`${language}`]?.placeHolderSearch}
        />
        <button className="py-4 px-8 text-white m-4 bg-red-500 rounded-md">
          {lang?.[`${language}`]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
