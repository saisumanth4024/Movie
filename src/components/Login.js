import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);
  // console.log(auth);

  // const sai = function () {
  //   return;
  // };

  // console.log(sai());
  // console.log(userName);
  // console.log(email);

  const handleButtonClick = () => {
    // console.log("Sai");
    // console.log("email:", email.current.value);
    // console.log(userName);
    const userNameValue =
      userName.current === null ? "sai" : userName.current.value;
    // console.log(userNameValue);
    const result = checkValidateData(
      email.current.value,
      password.current.value,
      userNameValue
    );
    // console.log(result);
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
          console.log(user);
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
          console.log(user);
          // ...
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
    // setIsSignInForm(!isSignInForm);
    // this.setState((prev)=>{
    // })
    setIsSignInForm((prev) => !prev);
  };
  // console.log(isSignInForm);
  return (
    <div className="relative">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="netflix_backLogo"
      />
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
