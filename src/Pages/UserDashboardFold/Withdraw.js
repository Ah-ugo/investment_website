import React, { useState, useEffect } from "react";
import UserDashboard from "../UserDashboard";
import WithdrawCard from "../../Components/UserCards/WithdrawCard";
import { FaNairaSign } from "react-icons/fa6";
import { TbCurrencyNaira } from "react-icons/tb";
import { redirect, Navigate } from "react-router-dom";
import axios from "axios";

const Withdraw = () => {
  const [bankName, setBankName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState();
  const [amount, setAmount] = useState();

  const userInfo = localStorage.getItem("userData122");
  const mainUser = JSON.parse(userInfo);

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
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });

    // getWithdrawal Data
    axios.get(url2, config).then((res) => console.log(res.data));
  };
  return (
    <div>
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
                  {mainUser.investment_amount + mainUser.return_rate}
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
                {mainUser.investment_amount}
              </label>
            </div>
          </WithdrawCard>
        </div>
        <h1 className="font-bold text-2xl text-gray-800 mt-4 mb-4">
          Account Details
        </h1>
        <WithdrawCard>
          {/* Bank Name */}
          <div>
            <div className="flex">
              <label
                for="BankName"
                class="flex text-xs font-medium text-gray-400">
                Bank Name
              </label>

              <input
                type="text"
                id="BankName"
                placeholder="Access Bank"
                class="mt-1 px-2 w-full rounded-md sm:text-sm text-grey-800"
                onChange={(e) => setBankName(e.target.value)}
              />
            </div>
            <div className="flex mt-3">
              <label
                for="AccountName"
                class="flex text-xs font-medium text-gray-400">
                Account Name
              </label>

              <input
                type="text"
                id="AccountName"
                placeholder="John Doe"
                class="mt-1 px-2 w-full rounded-md sm:text-sm text-grey-800"
                onChange={(e) => setAccountName(e.target.value)}
              />
            </div>
            <div className="flex mt-3">
              <label
                for="AccountNumber"
                class="flex text-xs font-medium text-gray-400">
                Account Number
              </label>

              <input
                type="number"
                id="AccountNumber"
                placeholder="1234567898"
                class="mt-1 px-2 w-full rounded-md sm:text-sm text-grey-800"
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </div>
            <div className="flex mt-3 gap-1">
              <label
                for="Amount"
                class="flex text-xs font-medium text-gray-400">
                Amount
              </label>

              <input
                type="number"
                id="Amount    "
                placeholder="1000"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                class="mt-1 px-2 w-full rounded-md sm:text-sm text-grey-800"
              />
            </div>
          </div>
        </WithdrawCard>
        <div className="flex flex-col justify-center lg:items-center">
          {parseInt(amount) <
          mainUser.investment_amount + mainUser.return_rate ? (
            <button
              onClick={() => {
                submitWithdrawalRequest();
              }}
              className="bg-gray-800 mt-4 text-white p-2 rounded ">
              Request Withdraw
            </button>
          ) : null}
        </div>
      </UserDashboard>
    </div>
  );
};

export default Withdraw;
