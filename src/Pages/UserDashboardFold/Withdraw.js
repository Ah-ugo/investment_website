import React, { useState, useEffect } from "react";
import UserDashboard from "../UserDashboard";
import WithdrawCard from "../../Components/UserCards/WithdrawCard";
import { FaNairaSign } from "react-icons/fa6";
import { TbCurrencyNaira } from "react-icons/tb";
import { redirect, Navigate } from "react-router-dom";
import axios from "axios";
import { Alert, Modal, Spin } from "antd";
import {
  FrownOutlined,
  LoadingOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const Withdraw = () => {
  const [bankName, setBankName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState();
  const [amount, setAmount] = useState();
  const [loaded, setLoaded] = useState(false);
  const [userData, setUserData] = useState({});
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const userInfo = localStorage.getItem("userData122");
  const mainUser = JSON.parse(userInfo);
  // const userInfo = localStorage.getItem("userData122");
  const userMain = JSON.parse(userInfo);

  const config = {
    headers: {
      "X-Parse-Application-Id": "o2sxP1a3p8X7pcnr1Hedh8vh6NfP1HJMjF6GhsJ7",
      "X-Parse-REST-API-Key": "J66ZpMiZBgxEXDSAlWiUcSYMjjLV6FAuX8y0huJE",
      // "X-Parse-Revocable-Session": "1",
    },
  };
  const url = "https://parseapi.back4app.com/classes/Withdrawal_Request";
  const url2 = `https://parseapi.back4app.com/classes/Withdrawal_Request?where=%7B%20%22user%22%3A%20%22${mainUser.objectId}%22%20%7D`;

  // const payload = {
  //   user: "RWlMSWQbTm",
  //   Amount: 2000,
  //   accountNumber: 210568974,
  //   bankName: "Union Bank",
  //   accountName: "Chidi Nwafor",
  //   approved: false,
  // };

  const submitWithdrawalRequest = () => {
    setLoaded(true);
    const userData = localStorage.getItem("userData122");
    const mainData = JSON.parse(userData);

    if (bankName === "") {
      alert("Please enter a bank name.");
      return;
    }

    if (accountName === "") {
      alert("Please enter an account name.");
      return;
    }

    if (accountNumber === null || accountNumber === "") {
      alert("Please enter an account number.");
      return;
    }

    if (amount === null || amount === 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const payload = {
      user: mainData?.objectId,
      Amount: parseInt(amount),
      accountNumber: parseInt(accountNumber),
      bankName: bankName,
      accountName: accountName,
      approved: false,
    };

    console.log(
      amount + "" + accountName + "" + accountNumber + "" + mainData.objectId
    );
    axios
      .post(url, payload, config)
      .then((res) => {
        setLoaded(false);
        setSuccessAlert(true);
        setErrorAlert(false);
        console.log(res.data);
      })
      .catch((e) => {
        setLoaded(false);
        setSuccessAlert(false);
        setErrorAlert(true);
        console.log(e);
      });

    // getWithdrawal Data
    axios.get(url2, config).then((res) => console.log(res.data));
  };

  const UserDetails = () => {
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
    UserDetails();
  }, []);
  return (
    <div>
      <Modal
        title="Successful Request"
        open={successAlert}
        footer={null}
        className="flex gap-2 align-middle items-center"
        onCancel={() => setSuccessAlert(false)}>
        <div className="flex gap-2 align-middle items-center">
          <SmileOutlined height={45} width={45} size={38} />
          <p>Withdrawal Request Successful</p>
        </div>
      </Modal>

      <Modal
        title="Request Unsuccessful"
        open={errorAlert}
        footer={null}
        onCancel={() => setErrorAlert(false)}>
        <div className="flex gap-2 align-middle items-center">
          <FrownOutlined
            height={45}
            width={45}
            size={38}
            className="w-10 h-10"
          />
          <p>
            Oh no! We encountered an error while processing your request. Please
            check your internet connection.
          </p>
        </div>
      </Modal>
      <UserDashboard>
        <h1 className="font-bold text-2xl text-gray-800 mb-4">
          Withdrawal Request
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <WithdrawCard>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-xl font-bold text-gray-200 ">
                  Balance
                </label>
                <div className="bg-white p-3 rounded-full text-white">
                  <FaNairaSign className="text-blue-600 font-bold" />
                </div>
              </div>
              <div className="flex items-center gap-1 text-white">
                <TbCurrencyNaira className="text-lg" />
                <label className="text-lg font-medium">
                  {userData.balance ? userData.balance : 0}
                </label>
              </div>
            </div>
          </WithdrawCard>
          <WithdrawCard>
            <div className="flex items-center justify-between">
              <label className="text-xl font-bold text-gray-200 ">
                Investment Plan
              </label>
              <div className="bg-white p-3 rounded-full text-white">
                <FaNairaSign className="text-blue-600 font-bold" />
              </div>
            </div>
            <div className="flex items-center gap-1 text-white">
              <TbCurrencyNaira className="text-lg" />
              <label className="text-lg font-medium">
                {userData.investment_amount ? userData.investment_amount : 0}
              </label>
            </div>
          </WithdrawCard>
        </div>
        <h1 className="font-bold text-2xl text-gray-800 mt-4 mb-4">
          Account Details
        </h1>

        <div className="flex flex-col justify-center lg:items-center">
          {parseInt(amount) < mainUser.amount ? (
            <button
              onClick={() => {
                submitWithdrawalRequest();
              }}
              className="bg-gray-800 mt-4 text-white p-2 rounded ">
              Request Withdraw
            </button>
          ) : null}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="mb-12 xl:mb-0 mt-4">
            <div className="flex flex-wrap mb-6 shadow-lg rounded min-w-0 bg-white">
              <div className="flex flex-col break-words w-full lg:w-6/12">
                <div className="mb-0 px-4 pt-2 py-4 bg-transparent">
                  <div className="pb-4">
                    <p className="pb-2">Bank Name</p>
                    <input
                      type="text"
                      onChange={(e) => setBankName(e.target.value)}
                      placeholder="Input Your Bank Name Here"
                      className="px-3 py-3 placeholder-gray-400 w-full text-gray-700 text-sm border rounded-md outline-none focus:ring ease-linear transition-all duration-150"
                      defaultValue={""}
                    />
                  </div>

                  <div className="pb-4">
                    <p className="pb-2">Account Name</p>
                    <input
                      type="text"
                      onChange={(e) => setAccountName(e.target.value)}
                      placeholder="Input Your Account Name Here"
                      className="px-3 py-3 placeholder-gray-400 w-full text-gray-700 text-sm border rounded-md outline-none focus:ring ease-linear transition-all duration-150"
                      defaultValue={""}
                    />
                  </div>

                  <div className="pb-4">
                    <p className="pb-2">Account Number</p>
                    <input
                      type="text"
                      onChange={(e) => setAccountNumber(e.target.value)}
                      placeholder="Input Your Account Number Here"
                      className="px-3 py-3 placeholder-gray-400 w-full text-gray-700 text-sm border rounded-md outline-none focus:ring ease-linear transition-all duration-150"
                      defaultValue={""}
                    />
                  </div>

                  <div className="pb-4">
                    <p className="pb-2">Amount</p>
                    <input
                      type="number"
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Input Your Withdrawal Amount Here"
                      className="px-3 py-3 placeholder-gray-400 w-full text-gray-700 text-sm border rounded-md outline-none focus:ring ease-linear transition-all duration-150"
                      defaultValue={""}
                    />
                  </div>
                  <div className="flex justify-center items-center pb-4">
                    <button
                      onClick={() => {
                        submitWithdrawalRequest();
                      }}
                      disabled={userData.balance <= 500 ? true : false}
                      className={`${
                        userData.balance <= 500 ? "bg-gray-500" : "bg-gray-800"
                      } mt-4 text-white p-2 rounded `}>
                      {loaded ? (
                        <Spin
                          indicator={
                            <LoadingOutlined
                              style={{
                                fontSize: 24,
                              }}
                              spin
                            />
                          }
                        />
                      ) : (
                        "Request Withdraw"
                      )}
                    </button>
                  </div>
                  {parseInt(amount) >= userData.balance ? (
                    <Alert
                      message="Your Account Balance is Below Withdrawal Amount"
                      type="error"
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div />
          </div>
        </div>
      </UserDashboard>
    </div>
  );
};

export default Withdraw;
