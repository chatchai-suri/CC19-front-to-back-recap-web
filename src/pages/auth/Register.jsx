// rfce
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { createAlert } from "../../utils/createAlert";

function Register() {
  const [value, setValue] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
  });

  const hdlOnChange = async (e) => {
    e.preventDefault();
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();
    console.log("value==== ", value);
    try {
      const res = await axios.post("http://localhost:8000/api/register", value);
      console.log("res====", res);
      createAlert("success", "Register Success")
    } catch (error) {
      // console.log(err.response.data.message);
      createAlert("error", error.response?.data?.message)
    }
  };

  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div className="w-64 border p-4 rounded-md">
        <h1 className="text-xl font-bold text-center">Register</h1>
        {/* Form  */}
        <form onSubmit={hdlSubmit}>
          <div className="flex flex-col gap-2 py-4">
            <input
              type="text"
              placeholder="email"
              name="email"
              className="border w-full border-gray-400 rounded-md px-1 py-2"
              onChange={hdlOnChange}
            />
            <input
              type="text"
              placeholder="firstname"
              name="firstname"
              className="border w-full border-gray-400 rounded-md px-1 py-2"
              onChange={hdlOnChange}
            />
            <input
              type="text"
              placeholder="lastname"
              name="lastname"
              className="border w-full border-gray-400 rounded-md px-1 py-2"
              onChange={hdlOnChange}
            />
            <input
              type="text"
              placeholder="password"
              name="password"
              className="border w-full border-gray-400 rounded-md px-1 py-2"
              onChange={hdlOnChange}
            />
            <input
              type="text"
              placeholder="confirmPassword"
              name="confirmPassword"
              className="border w-full border-gray-400 rounded-md px-1 py-2"
              onChange={hdlOnChange}
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-green-900 text-white px-2 py-1 rounded-md hover: cursor-pointer">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
