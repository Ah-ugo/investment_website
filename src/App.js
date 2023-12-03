import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UserDashboard from "./Pages/UserDashboard";
import OverView from "./Pages/UserDashboardFold/OverView";
import InvestmentDetails from "./Pages/UserDashboardFold/InvestmentDetails";
import InvestmentCategories from "./Pages/UserDashboardFold/InvestmentCategories";
import Withdraw from "./Pages/UserDashboardFold/Withdraw";
import { useState, useEffect } from "react";
import Deposit from "./Pages/UserDashboardFold/Deposit";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const [auth, setAuth] = useState(false);
  const userData = localStorage.getItem("userData122");
  const helmetContext = {};
  useEffect(() => {
    if (userData) {
      setAuth(true);
    }
  }, []);
  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/userDashboard"
            element={userData ? <OverView /> : <Navigate to="/login" />}
          />
          <Route
            path="/userInvestmentDetails"
            element={<InvestmentDetails />}
          />
          <Route
            path="/InvestmentCategories"
            element={
              userData ? <InvestmentCategories /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/withdraw"
            element={userData ? <Withdraw /> : <Navigate to="/login" />}
          />
          <Route
            path="/deposit"
            element={userData ? <Deposit /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
