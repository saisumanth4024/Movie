import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice.js";
import { useDispatch } from "react-redux";
import { LOGO } from "../utils/constant.js";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const photoURL = useSelector((store) => store.user);
  // console.log(photoURL);
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
          <img
            className="h-10 w-10 rounded-md mx-2"
            src={photoURL.photoURL}
            alt="user_icon"
          />
          <button
            className="bg-red-700 rounded-md border px-2 text-white font-semibold  "
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
