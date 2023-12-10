import React from "react";
import UserDashboard from "../UserDashboard";
import SmallCards from "../../Components/UserCards/SmallCards";
import { FaNairaSign } from "react-icons/fa6";
import { AiOutlineLineChart } from "react-icons/ai";
import { CiMoneyBill } from "react-icons/ci";
import ReferralCard from "../../Components/UserCards/ReferralCard";
import RecentInvestmentCard from "../../Components/UserCards/RecentInvestmentCard";
import ChartCard from "../../Components/UserCards/ChartCard";

export default function OverView() {
  const userInfo = localStorage.getItem("userData122");
  const userMain = JSON.parse(userInfo);
  return (
    <div>
      <UserDashboard>
        <h1 className="font-bold text-4xl text-gray-800 mb-5">Overview</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <SmallCards
            title={"Balance"}
            amount={
              "NaN" ? 0 : userMain?.investment_amount + userMain?.return_rate
            }
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
            title={"Investment"}
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
