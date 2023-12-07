import React, { useState } from "react";
import Lottie from "react-lottie-player";
import Lottiedata from "../Components/Assets/Images/AnimeLottie/63787-secure-login.json";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export default function Login() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const config = {
    headers: {
      "X-Parse-Application-Id": "o2sxP1a3p8X7pcnr1Hedh8vh6NfP1HJMjF6GhsJ7",
      "X-Parse-REST-API-Key": "J66ZpMiZBgxEXDSAlWiUcSYMjjLV6FAuX8y0huJE",
      // "X-Parse-Revocable-Session": "1",
    },
  };

  const Authenticate = async () => {
    setLoading(true);
    await axios
      .get(
        `https://parseapi.back4app.com/login?username=${userName}&password=${password}`,
        config
      )
      .then((response) => {
        const res = response;
        console.log(res);
        localStorage.setItem("userData122", JSON.stringify(res.data));
        window.location.href = "/userDashboard";
        setLoading(false);

        // Check the status code using 'res'
        // if (res.status === "200") {
        // navigate("/userDashboard");
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      style={{
        // backgroundImage: "linear-gradient(180deg,#0a3a96,#02aeee)",
        height: "100vh",
      }}
      className="grid grid-cols-1 lg:grid-cols-2 p-6 lg:gap-48 bg-white">
      <div className="mt-0">
        <Lottie animationData={Lottiedata} play loop />
      </div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto mt-10 h-30 w-24"
            src={require("../Components/Assets/Images/Sigmaphi.jpg")}
            alt="Your Company"
          />
          {/* <h1 className="text-center font-bold text-4xl text-indigo-600">
            SigmaPhi
          </h1> */}
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                />
              </div>
            </div>

            <div>
              <button
                // type="submit"
                onClick={Authenticate}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {loading ? (
                  <Spin
                    indicator={
                      <LoadingOutlined
                        style={{
                          fontSize: 24,
                          color: "white",
                        }}
                        spin
                      />
                    }
                  />
                ) : (
                  "Sign in"
                )}
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
