import React, { useEffect, useState } from "react";
import UserDashboard from "../UserDashboard";
import WithdrawCard from "../../Components/UserCards/WithdrawCard";
import { FaNairaSign } from "react-icons/fa6";
import { TbCurrencyNaira } from "react-icons/tb";
import DepositCard from "../../Components/UserCards/DepositCard";
import copy from "copy-to-clipboard";
import axios from "axios";
import {
  FrownOutlined,
  LoadingOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Modal, Spin } from "antd";

export default function Deposit() {
  const [accountName, setAccountName] = useState("Safe Planet");
  const [bankName, setBankName] = useState("BestStar MFB");
  const [accountNumber, setAccountNumber] = useState("6000049847");
  const [userData, setUserData] = useState({});
  const userInfo = localStorage.getItem("userData122");
  const mainUser = JSON.parse(userInfo);
  const userMain = JSON.parse(userInfo);
  const [depositAmount, setDepositAmount] = useState(
    mainUser?.investment_amount ? mainUser?.investment_amount : 0
  );
  const [narration, setNarration] = useState(mainUser?.objectId);
  const [loading, setLoading] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const copyAccountName = () => {
    copy(accountName);
    alert(`You have copied "${accountName}"`);
  };

  const copyBankName = () => {
    copy(bankName);
    alert(`You have copied "${bankName}"`);
  };

  const copyAccountNumber = () => {
    copy(accountNumber);
    alert(`You have copied "${accountNumber}"`);
  };

  const copyDepositAmount = () => {
    copy(depositAmount);
    alert(`You have copied "${"₦" + depositAmount}"`);
  };

  const copyNarration = () => {
    copy(narration);
    alert(`You have copied "${narration}"`);
  };

  const config = {
    headers: {
      "X-Parse-Application-Id": "o2sxP1a3p8X7pcnr1Hedh8vh6NfP1HJMjF6GhsJ7",
      "X-Parse-REST-API-Key": "J66ZpMiZBgxEXDSAlWiUcSYMjjLV6FAuX8y0huJE",
      // "X-Parse-Revocable-Session": "1",
    },
  };
  const url = "https://parseapi.back4app.com/classes/Transfers";

  const payload = {
    amount: mainUser.investment_amount,
    userId: mainUser.objectId,
    investment_date: new Date().toISOString,
    return_amount: mainUser.return_rate,
  };

  const ConfirmDeposit = async () => {
    setLoading(true);
    await axios
      .post(url, payload, config)
      .then((res) => {
        setSuccessAlert(true);
        setErrorAlert(false);
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        setSuccessAlert(false);
        setErrorAlert(true);
        console.log(err);
      });
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
    <>
      <UserDashboard>
        <Modal
          title="Successful Request"
          open={successAlert}
          footer={null}
          className="flex gap-2 align-middle items-center"
          onCancel={() => setSuccessAlert(false)}>
          <div className="flex gap-2 align-middle items-center">
            <SmileOutlined height={45} width={45} size={38} />
            <p>
              Deposit Verification In Progress (Your Balance Will Be Updated
              Once Deposit Is Verified){" "}
            </p>
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
              Oh no! We encountered an error while processing your request.
              Please check your internet connection.
            </p>
          </div>
        </Modal>
        <h1 className="font-bold text-2xl text-gray-800 mb-4">Fund Wallet</h1>
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
                {userData?.investment_amount ? userData?.investment_amount : 0}
              </label>
            </div>
          </WithdrawCard>
          <div />
        </div>

        <div className="flex flex-row items-center gap-10 lg:flex-row md:flex-row">
          <div className="flex flex-col justify-center">
            <div
              className="shadow-lg rounded bg-white py-10"
              style={{ maxWidth: "600px" }}>
              <div className="mb-0 px-4 pt-2 bg-transparent">
                <h2 className="text-gray-800 text-xl font-semibold">
                  Deposit Using
                </h2>
                <p className="text-gray-500 mb-1 text-xs">Bank Transfer</p>

                <div className="flex bg-white rounded shadow border my-2">
                  <input
                    type="text"
                    // O={(e) => setBankName(e.target.value)}
                    className="px-3 py-3 placeholder-gray-400 w-full text-gray-700 text-sm border-none outline-none focus:ring ease-linear transition-all duration-150"
                    disabled
                    defaultValue={bankName}
                    value={bankName}
                  />
                  <button
                    type="button"
                    className="btn w-16"
                    onClick={() => {
                      copyBankName();
                    }}>
                    Copy
                  </button>
                </div>
                <div className="flex bg-white rounded shadow border my-2">
                  <input
                    // onChange={(e) => setAccountName(e.target.value)}
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 w-full text-gray-700 text-sm border-none outline-none focus:ring ease-linear transition-all duration-150"
                    defaultValue={accountName}
                    value={accountName}
                    disabled
                  />
                  <button
                    type="button"
                    className="btn w-16"
                    onClick={() => copyAccountName()}>
                    Copy
                  </button>
                </div>
                <div className="flex bg-white rounded shadow border my-2">
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 w-full text-gray-700 text-sm border-none outline-none focus:ring ease-linear transition-all duration-150"
                    defaultValue={accountNumber}
                    disabled
                  />
                  <button
                    type="button"
                    className="btn w-16"
                    onClick={() => copyAccountNumber()}>
                    Copy
                  </button>
                </div>
                <div className="flex bg-white rounded shadow border my-2">
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 w-full text-gray-700 text-sm border-none outline-none focus:ring ease-linear transition-all duration-150"
                    defaultValue={"₦" + depositAmount}
                    disabled
                  />
                  <button
                    type="button"
                    className="btn w-16"
                    onClick={() => copyDepositAmount()}>
                    Copy
                  </button>
                </div>

                <div className="flex gap-2 justify-center items-center">
                <div className="flex bg-white rounded shadow border my-2">
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 w-full text-gray-700 text-sm border-none outline-none focus:ring ease-linear transition-all duration-150"
                    defaultValue={narration.concat(" (Transfer Narration)")}
                    disabled
                  />
                  <button
                    type="button"
                    className="btn w-16"
                    onClick={() => copyNarration()}>
                    Copy
                  </button>
                </div>
                <p className="text-sm text-red-500">*Use this as transfer narration*</p>
                </div>
              </div>
            </div>
            <div className="flex lg:hidden">
              <button
                className="bg-gray-800 shadow-sm hover:bg-gray-600 hover:text-gray-400 py-1.5 px-4 rounded text-sm leading-6 text-gray-50 font-semibold"
                onClick={() => ConfirmDeposit()}>
                Verify
              </button>
            </div>
          </div>
          <div className="hidden lg:flex">
            <button
              className="bg-gray-800 shadow-sm hover:bg-gray-600 hover:text-gray-400 py-1.5 px-4 rounded text-sm leading-6 text-gray-50 font-semibold"
              onClick={() => ConfirmDeposit()}>
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
                "Verify"
              )}
            </button>
          </div>
        </div>
      </UserDashboard>
    </>
  );
}
