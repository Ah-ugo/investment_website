import React, { useState } from "react";
import { HiOutlinePhoto } from "react-icons/hi2";
import { useNavigate, useSearchParams } from "react-router-dom";
import Parse from "parse";
import NavbarComponent from "../Components/NavbarComponent";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get("ref");

  // alert(queryParam);

  const navigate = useNavigate();

  const AddUser = () => {
    setLoading(true);
    const PARSE_APPLICATION_ID = "o2sxP1a3p8X7pcnr1Hedh8vh6NfP1HJMjF6GhsJ7";
    const PARSE_HOST_URL = "https://parseapi.back4app.com/";
    const PARSE_JAVASCRIPT_KEY = "CnmaJp2uP1wlCdgHmrgtWOESK1xjsmk9Vut9Hfpa";

    Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
    Parse.serverURL = PARSE_HOST_URL;

    let Project = new Parse.Object("_User");
    const GetImageId = document.getElementsByClassName("userImg")[0];

    if (GetImageId.files.length > 0) {
      const parsepass = GetImageId.files[0];
      const imgName = "photo.jpg";
      const Parsepass = new Parse.File(imgName, parsepass);
      Project.save({
        username: username,
        password: password,
        email: email,
        referralCode: queryParam,
        Image: Parsepass,
        phoneNumber: phone,
      }).then((res) => {
        setLoading(false);
        console.log(res);
        // setInfo(true);
        navigate("/login");
      });
    }
    //   };
  };
  return (
    <div>
      <section class="bg-gray-50">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 mt-10">
            <img
              class="w-8 h-8 mr-2"
              src={require("../Components/Assets/Images/Sigmaphi.jpg")}
              alt="logo"
            />
            SigmaPhi
          </a>
          <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create and account
              </h1>
              <div class="space-y-4 md:space-y-6">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="confirm-password"
                    class="block mb-2 text-sm font-medium text-gray-900">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    onChange={(e) => setPassword(e.target.value)}
                    id="confirm-password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                </div>

                <div>
                  <label
                    for="username"
                    class="block mb-2 text-sm font-medium text-gray-900">
                    Username
                  </label>
                  <input
                    type="username"
                    name="username"
                    id="username"
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Username"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                </div>

                <div>
                  <label
                    for="referral"
                    class="block mb-2 text-sm font-medium text-gray-900">
                    Referral Code
                  </label>
                  <input
                    type="referral"
                    name="referral"
                    id="referral"
                    defaultValue={queryParam}
                    placeholder="Referral Code"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                </div>

                <div>
                  <label
                    for="phone"
                    class="block mb-2 text-sm font-medium text-gray-900">
                    Phone Number
                  </label>
                  <input
                    type="phone"
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    id="phone"
                    placeholder="Phone Number"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                </div>

                <label class="block mb-6">
                  <span class="text-gray-700">Your photo</span>
                  <input
                    required
                    id="userImg"
                    name="file-upload"
                    type="file"
                    className="userImg"
                    class="
            block
            w-full
            mt-1
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  />
                </label>

                <div class="flex items-start">
                  {/* <div class="flex items-center h-5"> */}
                  {/* <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      required=""
                    /> */}
                  {/* </div> */}
                  <div class="ml-3 text-sm"></div>
                </div>
                <button
                  // type="submit"
                  onClick={() => AddUser()}
                  class="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
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
                    "Create an account"
                  )}
                </button>
                <p class="text-sm font-light text-gray-500">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    class="font-medium text-primary-600 hover:underline">
                    Login here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
