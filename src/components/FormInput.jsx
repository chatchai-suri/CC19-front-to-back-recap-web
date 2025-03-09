// rfce
import React from "react";

function FormInput({ register, name, errors }) {
  console.log(errors[name]);
  // || first true   && first false
  return (
    <div>
      <input
        type="text"
        placeholder={name}
        {...register(name)}
        className="border w-full border-gray-400 rounded-md px-1 py-2"
      />
      {errors[name] && <p className="text-sm text-red-500">{errors[name].message}</p>}
    </div>
  );
}

export default FormInput;
