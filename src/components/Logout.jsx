//rfce
import React from "react";
import useAuthStore from "../store/auth-store";
import { createAlert } from "../utils/createAlert";
import { useNavigate } from "react-router";

function Logout() {
  //JS
  const actionLogout = useAuthStore((state) => state.actionLogout);
  const navigate = useNavigate()

  const hdlLogout = () => {
    console.log("Hello, Logout");
    createAlert("success", "Logut Success")
    actionLogout();
    navigate("/")
  };
  return (
    <div className="text-white">
      <button
        className="hover:cursor-pointer hover:bg-green-700"
        onClick={hdlLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
