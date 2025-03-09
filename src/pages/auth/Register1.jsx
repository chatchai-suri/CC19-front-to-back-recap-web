// rfce
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import FormInput from "../../components/FormInput";
import Buttons from "../../components/Buttons";

// validator
import { registerSchema } from "../../utils/validators";
import { zodResolver } from "@hookform/resolvers/zod"; 

function Register1() {
  // Javascript
  const { register, handleSubmit, formState } = useForm({
    resolver:zodResolver(registerSchema)
  });
  const { isSubmitting, errors } = formState;
  console.log("errors ==== ", errors)

  console.log("isSubmitting ==== ", isSubmitting);
  const hdlSubmit = async (value) => {
    console.log("value==== ", value);
    //Delay
    await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      const res = await axios.post("http://localhost:8000/api/register", value);
      console.log("res====", res);
      createAlert("success", "Register Success");
    } catch (error) {
      // console.log(err.response.data.message);
      createAlert("error", error.response?.data?.message);
    }
  };

  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div className="w-64 border p-4 rounded-md">
        <h1 className="text-xl font-bold text-center">Register1</h1>
        {/* Form  */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col gap-2 py-4">
            <FormInput register={register} name="email" />
            <FormInput register={register} name="firstname" />
            <FormInput register={register} name="lastname" />
            <FormInput register={register} name="password" />
            <FormInput register={register} name="confirmPassword" />
          </div>
          <div className="flex justify-center">
            <Buttons isSubmitting={isSubmitting} label="Register"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register1;
