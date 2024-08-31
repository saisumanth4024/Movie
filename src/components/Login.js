import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BG_NETFLIX, USER_AVATAR } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // console.log(auth);
  const dispatch = useDispatch();
  // dispatch(addUser("add user"));

  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const handleButtonClick = () => {
    const userNameValue =
      userName.current === null ? "sai" : userName.current.value;
    const result = checkValidateData(
      email.current.value,
      password.current.value,
      userNameValue
    );
    setErrorMessage(result);
    if (result) return;

    if (result === null && !isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log("user", user);
          updateProfile(user, {
            displayName: userNameValue,
            photoURL: USER_AVATAR,
          })
            .then((users) => {
              // console.log("updated users:", users);
              const { uid, email, displayName, photoURL } = user;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  const toggleSignInForm = () => {
    setIsSignInForm((prev) => !prev);
  };

  return (
    <div className="relative">
      <Header />
      <img src={BG_NETFLIX} alt="netflix_backLogo" />
      <form
        onSubmit={onSubmitForm}
        className="p-12 absolute mx-auto top-1/4 left-0 right-0 w-3/12 bg-black/[.6]  text-white"
      >
        <h1 className=" text-[32px] font-700 py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={userName}
            type="text"
            placeholder="Name"
            className="p-2 my-2 w-full bg-transparent border-[1px] border-gray-100 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          autoFocus
          placeholder="email"
          className="p-2 my-2 w-full bg-transparent border-[1px] border-gray-100 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-2 my-2 w-full bg-transparent border-[1px] border-gray-100 rounded-md"
        />
        <p className="text-red-600 font-bold text-lg p-2">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-md cursor-pointer "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-3 cursor-pointer " onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered Sign In Now "}
        </p>
      </form>
    </div>
  );
};

export default Login;
