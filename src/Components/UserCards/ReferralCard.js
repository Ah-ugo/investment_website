import React, { useEffect, useState } from "react";
import copy from "copy-to-clipboard";
import axios from "axios";

export default function ReferralCard() {
  const domainName = window.location.hostname;
  const pathName = "/register";
  const userInfo = localStorage.getItem("userData122");
  const userMain = JSON.parse(userInfo);
  const [referal, setReferal] = useState(
    domainName + pathName + `?ref=${userMain.objectId}`
  );
  const [userData, setUserData] = useState({});

  const url = () => {
    copy(referal);
    alert(`You have copied "${referal}"`);
  };

  const config = {
    headers: {
      accept: "application/json",
      "X-Parse-Application-Id": "o2sxP1a3p8X7pcnr1Hedh8vh6NfP1HJMjF6GhsJ7",
      "X-Parse-REST-API-Key": "J66ZpMiZBgxEXDSAlWiUcSYMjjLV6FAuX8y0huJE",
    },
  };

  const getReferralDetails = () => {
    axios
      .get(`https://sigmaphi.b4a.io/users/${userMain.objectId}`, config)
      .then((res) => {
        // const resp = JSON.stringify(res.data);
        // const respo = JSON.parse(resp);
        console.log(res.data + "ghhjjuy");
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getReferralDetails();
  }, []);
  return (
    <div>
      <div className="mb-12 xl:mb-0 mt-4">
        <div className="flex flex-wrap mb-6 shadow-lg rounded min-w-0 bg-white">
          <div className="flex flex-col break-words w-full lg:w-6/12">
            <div className="mb-0 px-4 pt-2 bg-transparent">
              <h2 className="text-gray-800 text-xl font-semibold">
                Refer and Earn
              </h2>
              <p className="text-gray-500 mb-1 text-xs">
                Use the below link to invite your friends
              </p>
            </div>
            <div className="p-4">
              <div className="h-20-px">
                <div className="flex bg-white rounded shadow border">
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 w-full text-gray-700 text-sm border-none outline-none focus:ring ease-linear transition-all duration-150"
                    defaultValue={referal}
                    disabled
                  />
                  <button
                    type="button"
                    className="btn w-16"
                    onClick={() => url()}>
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col bg-gray-800 bg-center bg-cover bg-no-repeat break-words w-full lg:w-6/12 text-white"
            style={{
              backgroundImage: "",
              backgroundSize: "cover",
              // backgroundColor: "rgba(0, 0, 0,0.95)",
              backgroundBlendMode: "multiply",
            }}>
            <div className="flex flex-col break-words">
              <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                <div className="flex flex-wrap items-center">
                  <div className="w-full max-w-full flex-grow flex-1">
                    <h6 className="uppercase text-gray-300 mb-1 text-xs font-semibold">
                      Overview
                    </h6>
                    <h2 className="text-gray-200 text-xl font-semibold">
                      Referrals
                    </h2>
                  </div>
                </div>
              </div>
              <div className="px-4">
                <div className="h-20-px flex flex-wrap md:flex-nowrap md:text-left text-center">
                  <div className="px-4 py-2 w-full">
                    <span className="font-bold block text-xl">
                      {userData?.referal ? userData?.referal : 0}
                    </span>
                    <span className="text-sm block text-gray-200">
                      Total Invited
                    </span>
                  </div>
                  <div className="px-4 py-2 w-full">
                    <span className="font-bold block text-xl">
                      {userData?.referral ? userData?.referral : 0}
                    </span>
                    <span className="text-sm block text-gray-200">
                      Total Converted
                    </span>
                  </div>
                  <div className="px-4 py-2 w-full">
                    <span className="font-bold block text-xl">
                      {userData?.referralEarning
                        ? userData?.referralEarning
                        : 0}
                    </span>
                    <span className="text-sm block text-gray-200">
                      Total Earnings
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
