import React from "react";
import UserDashboard from "../UserDashboard";
import LargeUserInvestmentDetails from "../../Components/UserCards/LargeUserInvestmentDetails";

export default function InvestmentDetails() {
  return (
    <div>
      <UserDashboard>
        <div>
          <LargeUserInvestmentDetails />
        </div>
      </UserDashboard>
    </div>
  );
}
