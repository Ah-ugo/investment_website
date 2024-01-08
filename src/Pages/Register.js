import React, { useState } from "react";
import { HiOutlinePhoto } from "react-icons/hi2";
import { useNavigate, useSearchParams } from "react-router-dom";
import Parse from "parse";
import NavbarComponent from "../Components/NavbarComponent";
import {
  FrownOutlined,
  LoadingOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Alert, Spin, Modal } from "antd";
import { FaNairaSign } from "react-icons/fa6";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [investment, setInvestment] = useState();
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const [loading, setLoading] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

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
        investment_amount: parseInt(investment),
        return_rate: parseInt(investment / 2),
      })
        .then((res) => {
          setLoading(false);
          console.log(res);
          // setInfo(true);
          setSuccessAlert(true);
          setErrorAlert(false);
          navigate("/login");
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
          setSuccessAlert(false);
          setErrorAlert(true);
          return (
            <Alert
              message="Error"
              description="Check Your Internet Connection And Fill In All The Details"
              type="error"
              showIcon
            />
          );
        });
    }
    //   };
  };
  return (
    <div>
      <Modal
        title="Successful Registration"
        open={successAlert}
        footer={null}
        onCancel={!successAlert}>
        <div className="flex gap-2 align-middle items-center">
          <SmileOutlined height={45} width={45} size={38} />
          <p>
            Welcome to the community! Your account has been successfully
            created. You can now access all of our features and benefits.
          </p>
        </div>
      </Modal>
      <Modal title="Registration Unsuccessful" open={errorAlert} footer={null}>
        <div className="flex gap-2 align-middle items-center">
          <FrownOutlined height={45} width={45} size={38} />
          <p>
            Oh no! We encountered an error while processing your registration.
            Please try again later.
          </p>
        </div>
      </Modal>
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
                    required
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
                    required
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
                    required
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
                    required
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
                    required
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
                    required
                  />
                </div>

                <label
                  for="countries_disabled"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Select a plan
                </label>
                <select
                  onChange={(e) => setInvestment(e.target.value)}
                  required
                  id="countries_disabled"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>Choose a plan</option>
                  <option value={2000}>
                    Standard -{" "}
                    <FaNairaSign className="text-black-600 font-bold" /> 2000
                  </option>
                  <option value={6000}>
                    Bronze -{" "}
                    <FaNairaSign className="text-black-600 font-bold" /> 6000
                  </option>
                  <option value={10000}>
                    Silver -{" "}
                    <FaNairaSign className="text-black-600 font-bold" /> 10000
                  </option>
                  <option value={14000}>
                    Gold - <FaNairaSign className="text-black-600 font-bold" />{" "}
                    14000
                  </option>
                  <option value={18000}>
                    Emerald -{" "}
                    <FaNairaSign className="text-black-600 font-bold" /> 18000
                  </option>
                  <option value={22000}>
                    Ruby - <FaNairaSign className="text-black-600 font-bold" />{" "}
                    22000
                  </option>
                </select>

                <label class="block mb-6">
                  <span class="text-gray-700">Your photo</span>
                  <input
                    required
                    id="userImg"
                    name="file-upload"
                    type="file"
                    className="userImg"
                    class="
                    userImg
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
