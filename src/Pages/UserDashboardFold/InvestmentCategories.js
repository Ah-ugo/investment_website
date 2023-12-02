import React, { useEffect } from "react";
import UserDashboard from "../UserDashboard";
import PlansCard from "../../Components/UserCards/PlansCard";
import axios from "axios";
import { Navigate, redirect } from "react-router-dom";

export default function InvestmentCategories() {
  const ProtectedRoute = () => {
    const userData = localStorage.getItem("userData122");
    if (!userData) {
      <Navigate to={"/login"} />;
    } else {
      <Navigate to={"/InvestmentCategories"} />;
    }
  };

  useEffect(() => {
    ProtectedRoute();
  }, []);
  return (
    <div>
      <UserDashboard>
        <h1 className="font-bold text-4xl text-gray-800 mb-5">
          Investment Categories
        </h1>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div>
            <PlansCard
              title={"Standard"}
              deposit={"2000"}
              returns={"1000"}
              total={4000}
            />
          </div>
          <div>
            <PlansCard
              title={"Bronze"}
              deposit={"6000"}
              returns={"3000"}
              total={12000}
            />
          </div>
          <div>
            <PlansCard
              title={"Silver"}
              deposit={"10000"}
              returns={"5000"}
              total={20000}
            />
          </div>
          <div>
            <PlansCard
              title={"Gold"}
              deposit={"14000"}
              returns={"7000"}
              total={28000}
            />
          </div>
          <div>
            <PlansCard
              title={"Emerald"}
              deposit={"18000"}
              returns={"9000"}
              total={36000}
            />
          </div>
          <div>
            <PlansCard
              title={"Ruby"}
              deposit={"22000"}
              returns={"11000"}
              total={44000}
            />
          </div>
        </div>
      </UserDashboard>
    </div>
  );
}
