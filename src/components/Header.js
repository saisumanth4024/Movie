import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice.js";
import { useDispatch } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant.js";
import { toggleGptSearchView } from "../utils/gptSlice.js";
import { changeLanguage } from "../utils/configSlice.js";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gptState = useSelector((store) => store.gpt.showGptSearch);
  const photoURL = useSelector((store) => store.user);
  const language = useSelector((store) => store.config.languageSelected);

  // console.log(gptState);
  // console.log("phot", photoURL);

  useEffect(() => {
    //on auth state change
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        // console.log(photoURL);
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unscubscribe when comoponents unmounts
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const languageChange = (e) => {
    // e.target.value;
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  const handleGptSearchClick = () => {
    // console.log("sai");
    dispatch(toggleGptSearchView(!gptState));
  };

  // console.log("photoURL", photoURL);
  const logout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="absolute  flex flex-row justify-between w-screen h-16 px-8 py-2 bg-gradient-to-b from-black ">
      <img className="h-14 w-24 z-10" src={LOGO} alt="netflix_logo" />
      {photoURL && (
        <div className="flex p-1 ">
          <select
            className="p-2 mx-2 bg-gray-400 rounded-md relative z-10"
            name="language"
            value={language}
            onChange={languageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang, index) => (
              <option value={lang.identifier} key={index}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className="w-32 bg-purple-600 text-white border rounded-md z-10"
            onClick={() => {
              // console.log("sai");
              dispatch(toggleGptSearchView(!gptState));
            }}
          >
            GPT Search 🔎
          </button>
          <img
            className="h-10 w-10 rounded-md mx-2 z-10"
            src={photoURL.photoURL}
            alt="user_icon"
          />
          <button
            className="bg-red-700 rounded-md border px-2 text-white font-semibold cursor-pointer z-10"
            onClick={logout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
