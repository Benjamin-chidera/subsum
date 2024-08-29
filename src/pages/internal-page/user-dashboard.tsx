import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Header from "../../components/Dashboard/Header";
import { Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />

        <div className="ml-64 p-5 mr-32 mt-14">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
