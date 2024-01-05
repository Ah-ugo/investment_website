import React, { useEffect, useState } from "react";
import UserDashboard from "../UserDashboard";
import SmallCards from "../../Components/UserCards/SmallCards";
import { FaNairaSign } from "react-icons/fa6";
import { AiOutlineLineChart } from "react-icons/ai";
import { CiMoneyBill } from "react-icons/ci";
import ReferralCard from "../../Components/UserCards/ReferralCard";
import RecentInvestmentCard from "../../Components/UserCards/RecentInvestmentCard";
import ChartCard from "../../Components/UserCards/ChartCard";
import axios from "axios";

export default function OverView() {
  const [depositData, setDepositData] = useState([]);
  const [withdrawData, setWithdrawData] = useState([]);
  const userInfo = localStorage.getItem("userData122");
  const userMain = JSON.parse(userInfo);

  const depositUrl = `https://sigmaphi.b4a.io/classes/Transfers?where=%7B%20%22userId%22%3A%20%22${userMain?.objectId}%22%20%7D`;

  const withdrawUrl = `https://sigmaphi.b4a.io/classes/Withdrawal_Request?where=%7B%20%22user%22%3A%20%22${userMain?.objectId}%22%2C%22approved%22%3A%20true%20%20%7D`;

  const config = {
    headers: {
      "X-Parse-Application-Id": "o2sxP1a3p8X7pcnr1Hedh8vh6NfP1HJMjF6GhsJ7",
      "X-Parse-REST-API-Key": "J66ZpMiZBgxEXDSAlWiUcSYMjjLV6FAuX8y0huJE",
      // "X-Parse-Revocable-Session": "1",
    },
  };

  const getAllDeposit = () => {
    axios
      .get(depositUrl, config)
      .then((res) => {
        console.log(res);
        setDepositData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllWithdrawal = () => {
    axios
      .get(withdrawUrl, config)
      .then((res) => {
        console.log(res);
        setWithdrawData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllDeposit();
    getAllWithdrawal();
  }, []);
  return (
    <div>
      <UserDashboard>
        <h1 className="font-bold text-4xl text-gray-800 mb-5">Overview</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <SmallCards
            title={"Balance"}
            amount={userMain?.balance ? userMain?.balance : 0}
            icon={<FaNairaSign className="text-blue-600 font-bold" />}
            description={"Total Amount Remaining"}
          />
          <SmallCards
            title={"Revenue"}
            amount={userMain?.return_rate ? userMain?.return_rate : 0}
            icon={<AiOutlineLineChart className="text-blue-600 font-bold" />}
            description={"Total Revenue Gained"}
          />
          <SmallCards
            title={"Investment Plan"}
            amount={
              userMain?.investment_amount ? userMain?.investment_amount : 0
            }
            icon={<CiMoneyBill className="text-blue-600 font-bold" />}
            description={"Total Money Invested"}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <RecentInvestmentCard />
          <ChartCard />
        </div>
        <div>
          <ReferralCard />
        </div>
      </UserDashboard>
    </div>
  );
}
