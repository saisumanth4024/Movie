import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    // setIsSignInForm(!isSignInForm);
    // this.setState((prev)=>{
    // })
    setIsSignInForm((prev) => !prev);
  };
  console.log(isSignInForm);
  return (
    <div className="relative">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="netflix_backLogo"
      />
      <form className="p-12 absolute mx-auto top-1/4 left-0 right-0 w-3/12 bg-black/[.6]  text-white">
        <h1 className=" text-[32px] font-700 py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 my-2 w-full bg-transparent border-[1px] border-gray-100 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="email"
          className="p-2 my-2 w-full bg-transparent border-[1px] border-gray-100 rounded-md"
        />
        <input
          type="password"
          placeholder="password"
          className="p-2 my-2 w-full bg-transparent border-[1px] border-gray-100 rounded-md"
        />

        <button className="p-4 my-4 bg-red-700 w-full rounded-md cursor-pointer q">
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
