import React from "react";
import Slider from "Dashboard/slidebar";
import Main from "Dashboard/dashboard";
import Nav from "Dashboard/navbar";
const Dashboard = () => {
  return (
    <div id="layout-wrapper">
      <Nav />, <Slider />, <Main />
    </div>
  );
};

export default Dashboard;
