import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Divider, Layout, Menu, theme } from "antd";
import React, { useState, Fragment } from "react";
import { RxDashboard } from "react-icons/rx";
import DashboardNavHeader from "../Components/DashboardNavHeader";
import { GrOverview, GrShare } from "react-icons/gr";
import { MdOutlineDetails } from "react-icons/md";
import {
  AiOutlineFundView,
  AiOutlineSetting,
  AiOutlineTeam,
} from "react-icons/ai";
import { BsViewList } from "react-icons/bs";
import { BiMoneyWithdraw, BiWallet } from "react-icons/bi";
import { IoShareOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
//   const items = [
//     UserOutlined,
//     VideoCameraOutlined,
//     UploadOutlined,
//     BarChartOutlined,
//     CloudOutlined,
//     AppstoreOutlined,
//     TeamOutlined,
//     ShopOutlined,
//   ].map((icon, index) => ({
//     key: String(index + 1),
//     icon: React.createElement(icon),
//     label: `nav ${index + 1}`,
//   }));

const items = [
  {
    key: "1",
    icon: <AiOutlineFundView />,
    label: <Link to="/userDashboard">Overview</Link>,
  },
  // {
  //   key: "2",
  //   icon: <MdOutlineDetails />,
  //   label: <Link to="/userInvestmentDetails">Investment Details</Link>,
  // },
  {
    key: "3",
    icon: <BsViewList />,
    label: <Link to="/InvestmentCategories">Investment Categories</Link>,
  },
  {
    key: "4",
    icon: <BiMoneyWithdraw />,
    label: <Link to="/withdraw">Withdrawal</Link>,
  },
  { key: "5", icon: <BiWallet />, label: <Link to="/deposit">Deposits</Link> },
  // { key: "6", icon: <AiOutlineTeam />, label: <Link to={"#"}>Team</Link> },
  { key: "7", icon: <UserOutlined />, label: <Link to={"#"}>Profile</Link> },
  { key: "8", icon: <IoShareOutline />, label: <Link to={"#"}>Referral</Link> },
  {
    key: "9",
    icon: <AiOutlineSetting />,
    label: <Link to={"#"}>Settings</Link>,
  },
];
const UserDashboard = (props) => {
  const [collapsed, setCollapsed] = useState(
    window.innerWidth > 800 ? false : true
  );

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          // height: 737,
          // background: "#E5E5E5",
          // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          // backdropFilter: "blur(5px)",
          // position: "fixed",
          height: "100vh",
          // position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        collapsed={collapsed}
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}>
        {/* <div className="demo-logo-vertical" /> */}
        <div className="flex flex-row text-white align-middle items-center gap-2 pt-4 pl-3">
          <RxDashboard className="font-bold text-2xl" />
          <label className="font-bold text-2xl">Dashboard</label>
        </div>
        <Divider className="border border-white" />
        <Menu
          theme="dark"
          //   style={{ backgroundColor: "#0a3a96" }}
          mode="inline"
          // defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout
        style={
          {
            // marginLeft: 200,
          }
        }>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "",
          }}>
          <DashboardNavHeader
            collapsed={collapsed}
            handleCollapse={handleCollapse}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
          }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}>
            {props.children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}>
          Copyright ©2023 Created by SigmaPhi Team
        </Footer>
      </Layout>
    </Layout>
  );
};
export default UserDashboard;
