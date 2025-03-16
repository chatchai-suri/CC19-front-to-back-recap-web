// rfce
import React from "react";
import { Outlet } from "react-router";
import HeaderAdmin from "../components/admin/HeaderAdmin";
import Sidebar from "../components/admin/Sidebar";

function LayoutAdmin() {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <HeaderAdmin />
        <div className="border p-2 m-2 flex-1" >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default LayoutAdmin;
