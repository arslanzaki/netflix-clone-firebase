import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/')

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/908077b4-cf0a-43c3-b2c9-435fb990299b/bd9accb1-8eab-4786-9180-42236f7863f6/PK-en-20220829-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="absolute bg-black/60 w-full h-screen top-0 left-0"></div>
        <div className="w-full fixed z-50 px-4 py-24">
          <div className="max-w-[400px] h-[450px] bg-black/70 mx-auto text-white">
            <div className="max-w-[300px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col mt-2"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 rounded bg-gray-700"
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 rounded bg-gray-700"
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-500 px-4 py-2 my-6 rounded text-lg">
                  Sign Up
                </button>

                <div className="flex justify-between items-center text-sm">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="my-8">
                  <span className="text-gray-500">
                    Already Subscribed To Netflix?
                  </span>{" "}
                  <Link to="/login" className="text-red-500">
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
