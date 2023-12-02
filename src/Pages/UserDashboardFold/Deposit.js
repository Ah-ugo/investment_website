import React, { useState } from "react";
import UserDashboard from "../UserDashboard";
import WithdrawCard from "../../Components/UserCards/WithdrawCard";
import { FaNairaSign } from "react-icons/fa6";
import { TbCurrencyNaira } from "react-icons/tb";
import DepositCard from "../../Components/UserCards/DepositCard";
import copy from "copy-to-clipboard";

export default function Deposit() {
  const [accountName, setAccountName] = useState("SigmaPhi Investment");
  const [bankName, setBankName] = useState("Palmpay");
  const [accountNumber, setAccountNumber] = useState("9011232567");
  const userInfo = localStorage.getItem("userData122");
  const mainUser = JSON.parse(userInfo);
  const [depositAmount, setDepositAmount] = useState(
    mainUser?.investment_amount
  );
  const [narration, setNarration] = useState(mainUser?.objectId);

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

  return (
    <>
      <UserDashboard>
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
                  {mainUser?.investment_amount + mainUser.return_rate}
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
                {mainUser?.investment_amount}
              </label>
            </div>
          </WithdrawCard>
          <div />
        </div>

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

              <div className="flex bg-white rounded shadow border my-2">
                <input
                  type="text"
                  className="px-3 py-3 placeholder-gray-400 w-full text-gray-700 text-sm border-none outline-none focus:ring ease-linear transition-all duration-150"
                  defaultValue={narration}
                  disabled
                />
                <button
                  type="button"
                  className="btn w-16"
                  onClick={() => copyNarration()}>
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </UserDashboard>
    </>
  );
}
