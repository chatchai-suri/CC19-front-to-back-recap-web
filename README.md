# Client

## Step 1 Create vite

```bash
npm create vite
npm install
npm run dec
```

## Step 2 Install tailwindcss

```bash
npm install tailwincss @tailwindcss @tailwindcess/vite
```

update this code to vite.config

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

update index.css

```css
@import "tailwindcss";
```

run project and Enjoy

```jsx
<h1 class="text-3xl font-bold underline">Hello world!</h1>
```

```bash
npm run dev
```

## Step 3 Routes, there are 5 actions in Step 3

### 3.1 Install Router

https://reactrouter.com/start/library/installation

```bash
npm i react-router
```

### 3.2 update main.jsx

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router";
createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
```

### 3.3 create folder routes

/src/routes/AppRoutes.jsx

```jsx
const AppRoutes = () => {
  return <div>AppRoutes</div>;
};
export default AppRoutes;
```

### 3.4 update App.jsx

/src/App.jsx

```jsx
// rfce
import React from "react";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
```

### 3.5 update code AppRoutes.jsx

/src/routes/AppRoutes.jsx

```jsx
//rfce
import React from "react";
import { Route, Routes } from "react-router";

function AppRoutes() {
  return (
    <>
      <Routes>
        {/* Public */}
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="register" element={<h1>Register</h1>} />
        <Route path="login" element={<h1>Login</h1>} />

        {/* Private [USER] */}
        <Route path="user" element={<h1>Home User</h1>} />

        {/* Private [ADMIN] */}
        <Route path="dashboard" element={<h1>Dashboard</h1>} />
        <Route path="manage" element={<h1>Manage</h1>} />

        <Route path="*" element={<h1>404 Not found</h1>} />
      </Routes>
    </>
  );
}

export default AppRoutes;
```

## Step 4 Pages

create pages folder
/src/pages

```plaintext
Home.jsx
About.jsx
```

/src/pages/admin

```plaintext
Dashboard.jsx
Manage.jsx
```

/src/pages/user

```plaintext
HomeUser.jsx
MapUser.jsx
```

/src/pages/auth

```plaintext
Register.jsx
Login.jsx
```

## Step 5 update AppRoutes.jsx, there are 2 jobs

5.1 Layout
/src/layouts/Layout.jsx

```jsx
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      Layout
      <Outlet />
    </div>
  );
};
export default Layout;
```

5.2 Update code AppRoutes.jsx
/src/routes/AppRoutes.jsx

```jsx
//rfce
import React from "react";
import { Outlet, Route, Routes } from "react-router";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/admin/Dashboard";
import Manage from "../pages/admin/Manage";
import HomeUser from "../pages/user/HomeUser";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Private [USER] */}
        <Route path="user" element={<Layout />}>
          <Route index element={<HomeUser />} />
        </Route>

        {/* Private [ADMIN] */}
        <Route path="admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="manage" element={<Manage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
```

## Step 6 Navbar (MainNav)

6.1 create Navbar
/src/componemts/MainNav.jsx

```jsx
// rfce
import React from "react";
import { Link } from "react-router";

function MainNav() {
  return (
    <nav
      className="bg-green-950 text-white flex justify-between 
    font-semibold px-8 py-2 rounded-md shadow"
    >
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex gap-4">
        <Link to="register">Register</Link>
        <Link to="login">Login</Link>
      </div>
    </nav>
  );
}

export default MainNav;
```

6.2 update Layout
/src/layouts/Layout.jsx

```jsx
// rfce
import React from "react";
import { Outlet } from "react-router";
import MainNav from "../components/MainNav";

function Layout() {
  return (
    <div>
      <MainNav />

      <Outlet />
    </div>
  );
}

export default Layout;
```

## Step 7 Register page, there are 2 sub-steps

/src/pages/auth/Register.jsx
7.1 init Register page card and input form

```jsx
// rfce
import React from "react";

function Register() {
  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div className="w-64 border p-4 rounded-md">
        <h1 className="text-xl font-bold text-center">Register</h1>
        {/* Form  */}
        <form action="">
          <div>
            <input type="text" />
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
```

7.2 update and add others input

```jsx
// rfce
import React from "react";

function Register() {
  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div className="w-64 border p-4 rounded-md">
        <h1 className="text-xl font-bold text-center">Register</h1>
        {/* Form  */}
        <form action="">
          <div className="flex flex-col gap-2 py-4">
            <input
              type="text"
              placeholder="email"
              name="email"
              className="border w-full border-gray-400 rounded-md px-1 py-2"
            />
            <input
              type="text"
              placeholder="firstname"
              name="firstname"
              className="border w-full border-gray-400 rounded-md px-1 py-2"
            />
            <input
              type="text"
              placeholder="lastname"
              name="lastname"
              className="border w-full border-gray-400 rounded-md px-1 py-2"
            />
            <input
              type="text"
              placeholder="password"
              name="password"
              className="border w-full border-gray-400 rounded-md px-1 py-2"
            />
            <input
              type="text"
              placeholder="confirmPassword"
              name="confirmPassword"
              className="border w-full border-gray-400 rounded-md px-1 py-2"
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-green-900 text-white px-2 py-1 rounded-md">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
```

## Step 8 Onchange

/src/pages/auth/Register.jsx

```js
  const hdlOnChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: [e.target.value]
    })
```

and 1 sample from input form (do also others input)

```jsx
<input
  type="text"
  placeholder="email"
  name="email"
  className="border w-full border-gray-400 rounded-md px-1 py-2"
  onChange={hdlOnChange}
/>
```

## Step 9 useState

/src/pages/auth/Register.jsx

```js
const [value, setValue] = useState({
  email: "",
  firstname: "",
  lastname: "",
  password: "",
  confirmPassword: "",
});

const hdlOnChange = (e) => {
  setValue({
    ...value,
    [e.target.name]: [e.target.value],
  });
};
```

## Step 10 Submit

/src/pages/auth/Register.jsx

````js
  const hdlSubmit = (e) => {
    e.preventDefault()
    console.log(value)
  }
  and at form
  ```jsx
   <form onSubmit={hdlSubmit}>
````

## Step 11 Alert

https://sweetalert2.github.io/#download

```bash
npm install sweetalert2
```

import and use

```jsx
import Swal from "sweetalert2";

Swal.fire("test");
// or
Swal.fire({
  icon: "error",
  title: "Error!!",
  text: "Hello, sweetalert",
});
```

## Step 12 Connect to backend

### 12.1 install axios

```bash
npm i axios
```

### 12.2 update hdlSubmit do trycatch to api

```js
const hdlSubmit = async (e) => {
  e.preventDefault();
  console.log("value==== ", value);
  try {
    const res = await axios.post("http://localhost:8000/api/register", value);
    console.log("res====", res);
  } catch (error) {
    console.log(error);
  }
};
```

## Step 13 add alert into hdlSubmit

### 13.1 add error handling direct to fucntion

/src/pages/auth/Register.jsx

```js
const hdlSubmit = async (e) => {
  e.preventDefault();
  console.log("value==== ", value);
  try {
    const res = await axios.post("http://localhost:8000/api/register", value);
    console.log("res====", res);
    Swal.fire({
      icon: "success",
      title: "Success!!",
      text: error.response?.data?.message || "Register Success",
    });
  } catch (error) {
    // console.log(err.response.data.message);
    Swal.fire({
      icon: "error",
      title: "Error!!",
      text: error.response?.data?.message || "Input Error",
    });
  }
};
```

### 13.2 separate alert to func

/src/utils/createAlert.jsx

```js
import Swal from "sweetalert2";

export const createAlert = (icon, text) => {
  return Swal.fire({
    icon: icon || "info",
    text: text || "Somthing wrong",
    timer: 2000,
  });
};
```

### 13.3 update alert func into hdlSubmit

/src/pages/auth/Register.jsx

```js
const hdlSubmit = async (e) => {
  e.preventDefault();
  console.log("value==== ", value);
  try {
    const res = await axios.post("http://localhost:8000/api/register", value);
    console.log("res====", res);
    createAlert("success", "Register Success");
  } catch (error) {
    // console.log(err.response.data.message);
    createAlert("error", error.response?.data?.message);
  }
};
```

## Step 14 React-Hook-Form at page Register1.jsx

https://react-hook-form.com/

### 14.1 install react-hook-form

```bash
npm install react-hook-form
```

### 14.2 create Register1.jsx component and update AppRoutes.jsx

```jsx
//rfce
import React from "react";
import { Outlet, Route, Routes } from "react-router";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/admin/Dashboard";
import Manage from "../pages/admin/Manage";
import HomeUser from "../pages/user/HomeUser";
import NotFound from "../pages/NotFound";
import Register1 from "../pages/auth/Register1";

function AppRoutes() {
  return (
    <>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="register" element={<Register1 />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Private [USER] */}
        <Route path="user" element={<Layout />}>
          <Route index element={<HomeUser />} />
        </Route>

        {/* Private [ADMIN] */}
        <Route path="admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="manage" element={<Manage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
```

### 14.3 change Register1.jsx following React-Hook-Form feature

/src/pages/auth/Register1.jsx

```jsx
// rfce
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";

function Register1() {
  // Javascript
  const { register, handleSubmit } = useForm();

  const hdlSubmit = async (value) => {
    console.log("value==== ", value);
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
            <input
              type="text"
              placeholder="email"
              {...register("email")}
              className="border w-full border-gray-400 rounded-md px-1 py-2"
            />
            <input
              type="text"
              placeholder="firstname"
              {...register("firstname")}
              className="border w-full border-gray-400 rounded-md px-1 py-2"
            />
            <input
              type="text"
              placeholder="lastname"
              {...register("lastname")}
              className="border w-full border-gray-400 rounded-md px-1 py-2"
            />
            <input
              type="text"
              placeholder="password"
              {...register("password")}
              className="border w-full border-gray-400 rounded-md px-1 py-2"
            />
            <input
              type="text"
              placeholder="confirmPassword"
              {...register("confirmPassword")}
              className="border w-full border-gray-400 rounded-md px-1 py-2"
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

export default Register1;
```

### 14.4 Separate components of input

#### 14.4.1 create /components/form/FormInput.jsx

```jsx
// rfce
import React from "react";

function FormInput({ register, name }) {
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
```

#### 14.4.2 update Register1.jsx

/src/pages/auth/Register1.jsx

```jsx
// rfce
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import FormInput from "../../components/FormInput";

function Register1() {
  // Javascript
  const { register, handleSubmit } = useForm();

  const hdlSubmit = async (value) => {
    console.log("value==== ", value);
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
            <button className="bg-green-900 text-white px-2 py-1 rounded-md hover: cursor-pointer">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register1;
```

### 14.5 Separate components of Button and use of isSubmitting status (formState), and use of label props

#### 14.5.1 create components Buttons.jsx

/src/components/Buttons.jsx

```jsx
//rfce
import React from "react";

function Buttons({ isSubmitting, label }) {
  return (
    <button className="bg-green-900 text-white px-2 py-1 rounded-md hover: cursor-pointer">
      {isSubmitting ? <p>Loading</p> : <p>{label}</p>}
    </button>
  );
}

export default Buttons;
```

#### 14.5.2 use Buttons component at Register1.jsx (and try to reuse in other pages)

```jsx
// rfce
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import FormInput from "../../components/FormInput";
import Buttons from "../../components/Buttons";

function Register1() {
  // Javascript
  const { register, handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;

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
            <Buttons isSubmitting={isSubmitting} label="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register1;
```

### 14.6 Lucide icon and animation

https://lucide.dev/icons/

```bash
npm install lucide-react
```

update
/src/components/Buttons.jsx

```jsx
//rfce
import { Loader } from "lucide-react";
import React from "react";

function Buttons({ isSubmitting, label }) {
  return (
    <button className="bg-green-900 text-white px-2 py-1 rounded-md hover: cursor-pointer">
      {isSubmitting ? (
        <div className="flex" gap-2>
          <Loader className="animate-spin" />
          <p>Loading...</p>
        </div>
      ) : (
        <p>{label}</p>
      )}
    </button>
  );
}

export default Buttons;
```

## Step 15 Validate with zod at client

### 15.1 install zod & @hookform/resolvers

https://www.npmjs.com/package/@hookform/resolvers
https://zod.dev/

show error

```jsx
const { isSubmitting, errors } = formState;
console.log(errors);
```

```bash
npm i @hookform/resolvers
npm i zod
```

### 15.2 create validator.jsx

use same schema [Register] from backend
/src/utils/validators.jsx

```jsx
import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.string().email("invalid email"),
    firstname: z.string().min(3, "Firstname at least 3 charecters"),
    lastname: z.string().min(3, "Lastname at least 3 charecters"),
    password: z.string().min(6, "Password at least 6 charecters"),
    confirmPassword: z.string().min(6, "Password at least 6 charecters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Confirm Password is not match",
    path: ["confirmPassword"],
  });
```

### 15.3 update Register1.jsx by using validators.jsx and zodResolver and errors

#### 15.3.1 /src/pages/auth/Register1.jsx

```jsx
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
    resolver: zodResolver(registerSchema),
  });
  const { isSubmitting, errors } = formState;
  console.log("errors ==== ", errors);

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
            <FormInput register={register} name="email" errors={errors} />
            <FormInput register={register} name="firstname" errors={errors} />
            <FormInput register={register} name="lastname" errors={errors} />
            <FormInput register={register} name="password" errors={errors} />
            <FormInput
              register={register}
              name="confirmPassword"
              errors={errors}
            />
          </div>
          <div className="flex justify-center">
            <Buttons isSubmitting={isSubmitting} label="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register1;
```

#### 15.3.2 /src/components/FormInput.jsx

```jsx
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
      {errors[name] && (
        <p className="text-sm text-red-500">{errors[name].message}</p>
      )}
    </div>
  );
}

export default FormInput;
```

## Step 16 Separate function to API, reset after register success, field password use input type password via FormInput

### 16.1 Separate function to API

create /src/api/auth.jsx

```jsx
import axios from "axios";

export const actionRegister = async (value) => {
  return await axios.post("http://localhost:8000/api/register", value);
};
```

update /src/pages/Register1.jsx

```jsx
import { actionRegister } from "../../api/auth";

function Register1() {
  // Javascript
  const { register, handleSubmit, formState, reset } = useForm({
    resolver:zodResolver(registerSchema)
  });
  const { isSubmitting, errors } = formState;
  console.log("errors ==== ", errors)

  console.log("isSubmitting ==== ", isSubmitting);
  const hdlSubmit = async (value) => {
    console.log("value==== ", value);
    //Delay
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      const res = await actionRegister(value);
      console.log("res====", res);
      reset()
      createAlert("success", "Register Success");
    } catch (error) {
      // console.log(err.response.data.message);
      createAlert("error", error.response?.data?.message);
    }
  };
```

### 16.2 reset input form after register is success

import reset from userForm() and update /src/pages/auth/register.jsx

```jsx
function Register1() {
  // Javascript
  const { register, handleSubmit, formState, reset } = useForm({
    resolver:zodResolver(registerSchema)
  });
  const { isSubmitting, errors } = formState;
  console.log("errors ==== ", errors)

  console.log("isSubmitting ==== ", isSubmitting);
  const hdlSubmit = async (value) => {
    console.log("value==== ", value);
    //Delay
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      const res = await actionRegister(value);
      console.log("res====", res);
      reset()
      createAlert("success", "Register Success");
    } catch (error) {
      // console.log(err.response.data.message);
      createAlert("error", error.response?.data?.message);
    }
  };
```

### 16.3 input type="password" by send props to FormInput.jsx

#### 16.3.1 receiving props at component FormInput.jsx

```jsx
import React from "react";

function FormInput({ register, name, type = "text", errors }) {
  console.log(errors[name]);
  // || first true   && first false
  return (
    <div>
      <input
        type={type}
        placeholder={name}
        {...register(name)}
        className="border w-full border-gray-400 rounded-md px-1 py-2"
      />
      {errors[name] && (
        <p className="text-sm text-red-500">{errors[name].message}</p>
      )}
    </div>
  );
}

export default FormInput;
```

#### 16.3.2 send props type="password" from Register1.jsx

/src/pages/auth/Register1.jsx

```jsx
return (
  <div className="flex w-full h-full justify-end">
    {/* Card */}
    <div className="w-64 border p-4 rounded-md">
      <h1 className="text-xl font-bold text-center">Register1</h1>
      {/* Form  */}
      <form onSubmit={handleSubmit(hdlSubmit)}>
        <div className="flex flex-col gap-2 py-4">
          <FormInput register={register} name="email" errors={errors} />
          <FormInput register={register} name="firstname" errors={errors} />
          <FormInput register={register} name="lastname" errors={errors} />
          <FormInput
            register={register}
            name="password"
            type="password"
            errors={errors}
          />
          <FormInput
            register={register}
            name="confirmPassword"
            type="password"
            errors={errors}
          />
        </div>
        <div className="flex justify-center">
          <Buttons isSubmitting={isSubmitting} label="Register" />
        </div>
      </form>
    </div>
  </div>
);
```

## Step 17 Login

### 17.1 prepare api to backend-login

/src/api/auth.js

```jsx
export const actionLogin = async (value) => {
  return await axios.post("http://localhost:8000/api/login", value);
};
```

### 17.2 prepare validation with zod by copy loginSchema from api

```js
exports.loginSchema = z.object({
  email: z.string().email("invalid email"),
  password: z.string().min(6, "Password at least 6 charecters"),
});
```

### 17.3 prepare Login.jsx (/src/pages/auth/Login.jsx) by duplicate from Register.jsx then

- change Register to be Login (in 3 places)
- delete un-use input field

### 17.4 update Login.jsx and create func roledirect to navigate to ADMIN or USER authorized pages

/src/pages/auth/Login.jsx

```jsx
function Login() {
  // Javascript
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
      const res = await actionLogin(value);
      console.log("res====", res);
      const role = res.data.payload.role
      console.log("role ==== ", role)
      roleRedirect(role)
      // reset()
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
```

and update button label to be "Login"

```jsx
<div className="flex justify-center">
  <Buttons isSubmitting={isSubmitting} label="Login" />
</div>
```
## Step 18 Zustand
### 18.1 install zustand
```bash
npm install zustand
```
### 18.2 create auth-store.jsx and presist to keep data in local storage even refresh
/src/store/auth-store.jsx
```jsx
import { create } from "zustand"
import { actionLogin, actionRegister } from "../api/auth"
import { persist } from "zustand/middleware"

// step 1 create store
const authStore = (set) => ({
  user: [],
  token: null,
  actionLoginWithZustand: async (value) => {
    try {
      const res = await actionLogin(value)
      // console.log("Hello, Zustand!!!", res)
      const { payload, token } = res.data
      console.log("payload.role ==== ", payload.role)
      console.log("token ==== ", token)
      set({user: payload, token: token})
      return{sucess: true, role: payload.role}
    } catch (error) {
      return{success: false, error: error.response?.data?.message}
    }
  }
})


// step 2 export store
const useAuthStore = create(persist(authStore,{name: 'auth-store'}))

export default useAuthStore
```
### 18.3 update login
/scr/pages/auth/Login.jsx
```jsx
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
```
## Step 19 ProtectRoute
```jsx
const ProtectRoute = () => {
  console.log("Protect Route js");
  return <div>ProtectRoute</div>;
};
export default ProtectRoute;
```
### 19.1 and use
```jsx
<Route path="admin" element={<ProtectRoute el={<Layout/>} />}>
  <Route index element={<Dashboard />} />
  <Route path="manage" element={<Manage />} />
</Route>
```
and update Code in ProtectRoute.jsx
```jsx
const ProtectRoute = ({ el }) => {
  console.log("Protect Route js");
  return el;
};
export default ProtectRoute;
```
### 19.2 and then send token to backend to get role from DB (to keep security that local storage allows (anyone) to edit and change role), please make sure backend "currentUser controller is available"
```jsx
import { useEffect } from "react";
import { actionCurrentUser } from "../../api/auth";
import useAuthStore from "../../store/auth-store";

const ProtectRoute = ({ el }) => {
  const token = useAuthStore((state) => state.token);
  console.log("Protect Route js");
  console.log(token);

  useEffect(() => {
    // code
    checkPermission();
  }, []);

  const checkPermission = async () => {
    try {
      const res = await actionCurrentUser(token);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return el;
};
export default ProtectRoute;
```
### 19.3 destruct role for further use and create useState "ok" to keep status of checkPermission
```js
import { useEffect, useState } from "react";
import { actionCurrentUser } from "../../api/auth";
import useAuthStore from "../../store/auth-store";

const ProtectRoute = ({ el }) => {
  const token = useAuthStore((state) => state.token);
  //   console.log("Protect Route js");
  //   console.log(token);
  const [ok, setOk] = useState(null);

  useEffect(() => {
    // code
    checkPermission();
  }, []);

  const checkPermission = async () => {
    try {
      const res = await actionCurrentUser(token);
      const role = res.data.result.role;
      console.log(role);
      setOk(true);
    } catch (error) {
      setOk(false);
      console.log(error.response.data.message);
    }
  };
  console.log(ok);

  if (ok === null) {
    return <h1>Loading...</h1>;
  }
  if (!ok) {
    return <h1>Unauthorize</h1>;
  }
  return el;
};
export default ProtectRoute;
```
### 19.4 test in jsitor
allows.includes("text to findout in array allows") turns "true": if found text in allows and return "false": if not found
```js
const allows = ["ADMIN", "USER"];

console.log(allows.includes("USER"));
console.log(allows.includes("ADMIN"));
console.log(allows.includes("GUEST"));
```
### 19.4 update code in AppRoutes.jsx
/src/routes/AppRoutes.jsx
```jsx
<Route
  path="admin"
  element={<ProtectRoute el={<LayoutAdmin />} allows={["ADMIN"]} />}
>
  <Route index element={<Dashboard />} />
  <Route path="manage" element={<Manage />} />
</Route>
```
### 19.5 update code in ProtectRoutes.jsx
```jsx
/src/routes/ProtectRoutes.jsx
// rfce
import React, { useEffect, useState } from "react";
import useAuthStore from "../store/auth-store";
import { Check, Heading1 } from "lucide-react";
import { actionCurrent } from "../api/auth";

function ProtectRoutes({ el, allows }) {
  // console.log("Hello, Protect Route");
  // const user = useAuthStore((state) => state.user)
  const [ok, setOk] = useState(null)
  const token = useAuthStore((state) => state.token)
  // console.log("user.role ==== ", user.role )
  // console.log("token ==== ", token)

  useEffect(()=> {
    //code
    checkPermission()
  },[])

  const checkPermission = async () => {
      // code body
      console.log("check permission")
      try {
        const res = await actionCurrent(token)
        const role = res.data.result.role
        // role from backend
        // console.log("role from backend ==== ", res.data.result.role)
        // if (allows.includes(role)) {
        //   setOk(true)
        // } else {
        //   setOk(false)
        // }
        setOk(allows.includes(role))
      } catch (error) {
        console.log(error)
        setOk(false)
      }
    }
    console.log("ok ==== ", ok)
    if (ok === null) {
      return <h1>Loading....</h1>
    }
    if (!ok) {
      return <h1>Unauthorized!!!</h1>
    }
  
  return el;
}

export default ProtectRoutes;
```
## Step 20 Layout admin
### 20.1 create component LayoutAdmin
/src/layouts/LayoutAdmin.jsx
```jsx
import { Outlet } from "react-router";
import MainNav from "../components/MainNav";
import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";

const LayoutAdmin = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <Outlet />
    </div>
  );
};
export default LayoutAdmin;
```
### 20.2 separate sidebar VS (header + pages)
```jsx
import { Outlet } from "react-router";
import MainNav from "../components/MainNav";
import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";

const LayoutAdmin = () => {
  return (
    <div
      className="flex bg-neutral-100 h-screen
    w-screen overflow-hidden"
    >
      <Sidebar />
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
export default LayoutAdmin;
```
### 20.3 give properties to each component and block
#### 20.3.1 Header component: color
```jsx
const Header = () => {
  return <div className="bg-green-950 h-12">Header</div>;
};
export default Header;
```
#### 20.3.2 LayoutAdmin: flex-1 to give get remain space element
```jsx
import { Outlet } from "react-router";
import MainNav from "../components/MainNav";
import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";

const LayoutAdmin = () => {
  return (
    <div
      className="flex h-screen
    w-screen"
    >
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="p-2 m-2 border flex-1 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default LayoutAdmin;
```
#### 20.3.3 sidebar
```jsx
const Sidebar = () => {
  return <div className="bg-green-950 w-48">Sidebar</div>;
};
export default Sidebar;
```
#### 20.3.4 create link menu into sidebar
```jsx
import { BookDashed, User } from "lucide-react";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <div className="bg-green-950 w-48 text-white">
      {/* Profile */}
      <div className="flex flex-col items-center gap-2 py-12">
        <User fontSize={48} />
        <span className="text-lg">Profile</span>
      </div>
      {/* /Profile */}

      {/* Navlink */}
      <div className="flex-1 py-4">
        <Link
          className="flex items-center hover:bg-green-700 hover:duration-200
          rounded-sm px-3 py-2 gap-2"
          to={"/admin"}
        >
          <span className="text-xl">
            <BookDashed />
          </span>
          Dashboard
        </Link>
      </div>
      {/* /Navlink */}
    </div>
  );
};
export default Sidebar;
```
#### 20.3.5 separate link menu by create array of link menu list
/src/utils/links.jsx
```jsx
import { CircleGauge, User2Icon } from "lucide-react";

export const sidbarLink = [
  { label: "Dashboard", link: "/admin", icon: <CircleGauge /> },
  { label: "Manage", link: "/admin/manage", icon: <User2Icon /> },
];
```
#### 20.3.6 update sidebar, by use array of link and map method
/src/components/admin/Sidebar.jsx
```jsx
import { BookDashed, User } from "lucide-react";
import { Link } from "react-router";
import { sidbarLink } from "../../utils/links";

const Sidebar = () => {
  return (
    <div className="bg-green-950 w-48 text-white">
      {/* Profile */}
      <div className="flex flex-col items-center gap-2 py-12">
        <User fontSize={48} />
        <span className="text-lg">Profile</span>
      </div>
      {/* /Profile */}

      {/* Navlink */}
      {sidbarLink.map((item) => {
        return (
          <div className="py-1 mx-2">
            <Link
              className="flex items-center hover:bg-green-700 hover:duration-200
              rounded-sm px-3 py-1 gap-2"
              to={item.link}
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </Link>
          </div>
        );
      })}

      {/* /Navlink */}
    </div>
  );
};
export default Sidebar;
```
#### 20.3.7 update sidebar with user profile data by zustand
/src/components/admin/Sidebar.jsx
```jsx
import { User } from "lucide-react";
import { Link } from "react-router";
import { sidbarLink } from "../../utils/links";
import useAuthStore from "../../store/auth-store";

const Sidebar = () => {
  const user = useAuthStore((state) => state.user);
  return (
    <div className="bg-green-950 w-48 text-white">
      {/* Profile */}
      <div className="flex flex-col items-center gap-2 py-12">
        <User size={48} />
        <span className="text-lg">{user && user.email}</span>
        <span className="text-sm">{user && user.role}</span>
      </div>
      {/* /Profile */}

      {/* Navlink */}
      {sidbarLink.map((item) => {
        return (
          <div className="py-1 mx-2">
            <Link
              className="flex items-center hover:bg-green-700 hover:duration-200
              rounded-sm px-3 py-1 gap-2"
              to={item.link}
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </Link>
          </div>
        );
      })}

      {/* /Navlink */}
    </div>
  );
};
export default Sidebar;
```
## Step 21 Logout 
set user and token in authStore to be empty array and null respectively, then (via Logout: hdllogout) send to function checkPermission in ProtectRoutes to return unauthorize, then (via Logout: hdlLogout) navigate to "/"
### 21.1 update Header
src/components/admin/HeaderAdmin.jsx
```jsx
import Logout from "../Logout";

const Header = () => {
  return (
    <div
      className="bg-green-950 h-12 flex 
    items-center text-white justify-end px-4"
    >
      <Logout />
    </div>
  );
};
export default Header;
```
### 21.2 at authStore add method actionLogout to set user and token in authStore to be empty array and null respectively
/src/store/auth-store.jsx
```jsx
import { create } from "zustand";
import { actionLogin, actionRegister } from "../api/auth";
import { persist } from "zustand/middleware";

// step 1 create store
const authStore = (set) => ({
  user: [],
  token: null,
  actionLoginWithZustand: async (value) => {
    try {
      const res = await actionLogin(value);
      // console.log("Hello, Zustand!!!", res)
      const { payload, token } = res.data;
      console.log("payload.role ==== ", payload.role);
      console.log("token ==== ", token);
      set({ user: payload, token: token });
      return { sucess: true, role: payload.role };
    } catch (error) {
      return { success: false, error: error.response?.data?.message };
    }
  },
  actionLogout: () => {
    set({ user: [], token: null });
  },
});

// step 2 export store
const useAuthStore = create(persist(authStore, { name: "auth-store" }));

export default useAuthStore;
```
### 21.3 then (via Logout: hdllogout) send to function checkPermission in ProtectRoutes to return unauthorize, then (via Logout: hdlLogout) navigate to "/"
create src/components/Logout.jsx
```jsx
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
```
## Step 22 Manage user [listAllUser]
### 22.1 create draft page Manage.jsx
/src/pages/admin/Manage.jsx
```jsx
const Manage = () => {
  // JS
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Manage;
```
### 22.2 prepare api function to get list of all user from backend
/src/api/user.jsx
```jsx
import axios from "axios";

export const actionListUsers = () => {
  return axios.get("http://localhost:8000/api/users");
};
```
### 22.3 update this function to Manage.jsx
/src/pages/admin/Manage.jsx
```jsx
import { useEffect } from "react";
import { actionListUsers } from "../../../api/user";

const Manage = () => {
  // JS

  useEffect(() => {
    // code
    hdlFetchUsers();
  }, []);

  const hdlFetchUsers = async () => {
    try {
      const res = await actionListUsers();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Manage;
```
### 22.4 correct problem of token missing, by send token to api by zustand
both Manage.jsx and function actionListUser
#### 22.4.1
/src/pages/admin/Manage.jsx
```jsx
import { useEffect } from "react";
import { actionListUsers } from "../../../api/user";
import useAuthStore from "../../store/auth-store";

const Manage = () => {
  // JS
  const token = useAuthStore((state) => state.token);
  useEffect(() => {
    // code
    hdlFetchUsers(token);
  }, []);

  const hdlFetchUsers = async (token) => {
    try {
      const res = await actionListUsers(token);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Manage;
```
#### 22.4.2 function actionGetUser
/src/api.user.jsx
```js
import axios from "axios";

export const actionListUsers = (token) => {
  return axios.get("http://localhost:8000/api/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
```
### 22.4.3 map user list
/src/pages/Manage.jsx
```jsx
import { useEffect, useState } from "react";
import { actionListUsers } from "../../../api/user";
import useAuthStore from "../../store/auth-store";
import { Delete, DeleteIcon, Trash2 } from "lucide-react";

const Manage = () => {
  // JS
  const [users, setUsers] = useState([]);
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    // code
    hdlFetchUsers(token);
  }, []);

  const hdlFetchUsers = async (token) => {
    try {
      const res = await actionListUsers(token);
      setUsers(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <Trash2 color="red" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Manage;
```
## Step 23 Update Role
### 23.1 add api to backend to update role
/src/api/user.jsx
```js
export const actionUpdateRole = async (token, value) => {
  return await axios.patch("http://localhost:8000/api/user/update-role", value, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
```
### 23.2 create page Manage.jsx
/src/pages/admin/Manage.jsx
```jsx
// rfce
import React, { useEffect, useState } from "react";
import useAuthStore from "../../store/auth-store";
import axios from "axios";
import { actionListUser, actionUpdateRole } from "../../api/user";
import { LucideTrash2, Trash2 } from "lucide-react";
import { createAlert } from "../../utils/createAlert";

function Manage() {
  const token = useAuthStore((state) => state.token);
  console.log("token ==== ", token);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    hdlFetchUsers(token);
  }, []);

  const hdlFetchUsers = async (token) => {
    try {
      const res = await actionListUser(token);
      // console.log("res.data.result ==== ", res.data.result)
      setUsers(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("users ==== ", users);

  const hdlUpdateRole = async (token, id, role) => {
    console.log("token, id, role")
    try {
      const res = await actionUpdateRole(token, {id, role})
      createAlert("success", "Update Role Success!!!")
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <table className="table-fixed">
      <thead>
        <tr>
          <th>No.</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, index) => {
          return (
            <tr key={index}> 
              <td>{index +1}</td>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.email}</td>
              <td> 
                {/* Select */}
                <select
                onChange={(e)=>hdlUpdateRole(token, item.id, e.target.value)}
                defaultValue={item.role}
                >
                  <option>USER</option>
                  <option>ADMIN</option>
                </select>
                {/* /Select */}
              </td>
              <td><LucideTrash2 color="red" /> </td>

            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Manage;
```
## Step 24 Delete User
### 24.1 add api to backend to delete user
/src/api/user.jsx
```js
export const actionDeleteUser = async (token, id) => {
  return await axios.delete("http://localhost:8000/api/user/"+id, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
}
```
### 24.2 update page Manage.jsx [hdlDeleteUser]
/src/pages/admin/Manage.jsx
```jsx
// rfce
import React, { useEffect, useState } from "react";
import useAuthStore from "../../store/auth-store";
import axios from "axios";
import { actionDeleteUser, actionListUser, actionUpdateRole } from "../../api/user";
import { LucideTrash2, Trash, Trash2, Trash2Icon } from "lucide-react";
import { createAlert } from "../../utils/createAlert";
import Swal from "sweetalert2";

function Manage() {
  const token = useAuthStore((state) => state.token);
  console.log("token ==== ", token);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    hdlFetchUsers(token);
  }, []);

  const hdlFetchUsers = async (token) => {
    try {
      const res = await actionListUser(token);
      // console.log("res.data.result ==== ", res.data.result)
      setUsers(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("users ==== ", users);

  const hdlUpdateRole = async (token, id, role) => {
    console.log("token, id, role")
    try {
      const res = await actionUpdateRole(token, {id, role})
      createAlert("success", "Update Role Success!!!")
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const hdlDeleteUser = async (token, id) => {
    console.log(token, id)
    try {
      Swal.fire({
        icon: "info",
        text: "Are you sure",
        // showDenyButton: true,
        showCancelButton: true,
      }).then( async (data)=>{
        console.log(data.isConfirmed)
        if(data.isConfirmed){
          // true
          const res = await actionDeleteUser(token, id)
          console.log(res)
          createAlert("success", "Delete Success!!!")
          hdlFetchUsers(token)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <table className="table-fixed">
      <thead>
        <tr>
          <th>No.</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, index) => {
          return (
            <tr key={index}> 
              <td>{index +1}</td>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.email}</td>
              <td> 
                {/* Select */}
                <select
                onChange={(e)=>hdlUpdateRole(token, item.id, e.target.value)}
                defaultValue={item.role}
                >
                  <option>USER</option>
                  <option>ADMIN</option>
                </select>
                {/* /Select */}
              </td>
              <td>
                <Trash2Icon 
                  onClick={()=> hdlDeleteUser(token, item.id)}
                  color="red" 
                /> 
              </td>

            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Manage;
```






