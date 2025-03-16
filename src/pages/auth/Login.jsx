// rfce
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import FormInput from "../../components/FormInput";
import Buttons from "../../components/Buttons";
import { useNavigate } from "react-router";

// validator
import { loginSchema, registerSchema } from "../../utils/validators";
import { zodResolver } from "@hookform/resolvers/zod"; 
import { actionLogin, actionRegister } from "../../api/auth";
import useAuthStore from "../../store/auth-store";

function Login() {
  // Javascript
  // Zustand
  const actionLoginWithZustand = useAuthStore((state) => state.actionLoginWithZustand) 
  // console.log("test.token ==== ", test.token)

  const navigate = useNavigate()

  const { register, handleSubmit, formState, reset } = useForm({
    resolver:zodResolver(loginSchema)
  });
  const { isSubmitting, errors } = formState;
  console.log("errors ==== ", errors)

  console.log("isSubmitting ==== ", isSubmitting);
  const hdlSubmit = async (value) => {
    console.log("value==== ", value);
    //Delay
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      const res = await actionLoginWithZustand(value)
      // const res = await actionLogin(value);
      console.log("res====", res);
      // const role = res.data.payload.role
      // console.log("role ==== ", role)
      roleRedirect(res.role)
      reset()
      createAlert("success", "Login Success");
    } catch (error) {
      // console.log(err.response.data.message);
      createAlert("error", error.response?.data?.message);
    }
  };

  const roleRedirect = (role) => {
    if(role === 'ADMIN'){
      navigate('/admin')
    }else{
      navigate('/user')
    }
  }

  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div className="w-64 border p-4 rounded-md">
        <h1 className="text-xl font-bold text-center">Login</h1>
        {/* Form  */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col gap-2 py-4">
            <FormInput register={register} name="email" errors={errors}/>
            <FormInput register={register} name="password" type="password" errors={errors}/>
          </div>
          <div className="flex justify-center">
            <Buttons isSubmitting={isSubmitting} label="Login"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
