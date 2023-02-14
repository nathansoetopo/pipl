import { Outlet } from "react-router-dom";
import React from "react";
import Sidebar from "../SidebarComponent";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Layout;
