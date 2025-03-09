// rfce
import React from "react";

function FormInput({register, name}) {
  return (
    <input
      type="text"
      placeholder={name}
      {...register(name)}
      className="border w-full border-gray-400 rounded-md px-1 py-2"
    />
  );
}

export default FormInput;
