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
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), tailwindcss()],
})
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
        <Route path="/" element={ <Layout /> } >
          <Route index element={ <Home /> } />
          <Route path="about" element={ <About /> } />
          <Route path="register" element={ <Register /> } />
          <Route path="login" element={ <Login /> } />
        </Route>

        {/* Private [USER] */}
        <Route path="user" element={ <Layout /> }>
          <Route index element={ <HomeUser /> } />
        </Route>

        {/* Private [ADMIN] */}
        <Route path="admin" element={ <Layout />}>
          <Route index element={ <Dashboard /> } />
          <Route path="manage" element={ <Manage /> } />
        </Route>

        <Route path="*" element={ <NotFound />} />
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
    <nav className="bg-green-950 text-white flex justify-between 
    font-semibold px-8 py-2 rounded-md shadow">
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
import React from 'react'

function Register() {
  return (
    <div className='flex w-full h-full justify-end'>
      {/* Card */}
      <div className='w-64 border p-4 rounded-md'>
        <h1 className='text-xl font-bold text-center'>Register</h1>
        {/* Form  */}
        <form action="">
          <div>
            <input type="text" />
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
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
  const[value, setValue] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
  })
  
  const hdlOnChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: [e.target.value] 
    })
  }
```
## Step 10 Submit
/src/pages/auth/Register.jsx
```js
  const hdlSubmit = (e) => {
    e.preventDefault()
    console.log(value)
  }
  and at form
  ```jsx
   <form onSubmit={hdlSubmit}>
  ```
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
    e.preventDefault()
    console.log("value==== ", value)
    try {
      const res = await axios.post("http://localhost:8000/api/register", value)
      console.log("res====", res)
    } catch (error) {
      console.log(error)
    }
  }
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
import Swal from "sweetalert2"

export const createAlert = (icon, text) => {
  return Swal.fire({
    icon: icon || "info",
    text: text || "Somthing wrong",
    timer: 2000,
  })
}
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
      createAlert("success", "Register Success")
    } catch (error) {
      // console.log(err.response.data.message);
      createAlert("error", error.response?.data?.message)
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
        <Route path="/" element={ <Layout /> } >
          <Route index element={ <Home /> } />
          <Route path="about" element={ <About /> } />
          <Route path="register" element={ <Register1 /> } />
          <Route path="login" element={ <Login /> } />
        </Route>

        {/* Private [USER] */}
        <Route path="user" element={ <Layout /> }>
          <Route index element={ <HomeUser /> } />
        </Route>

        {/* Private [ADMIN] */}
        <Route path="admin" element={ <Layout />}>
          <Route index element={ <Dashboard /> } />
          <Route path="manage" element={ <Manage /> } />
        </Route>

        <Route path="*" element={ <NotFound />} />
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
import {useForm} from "react-hook-form"

function Register1() {
  // Javascript
  const { register, handleSubmit } = useForm()


  const hdlSubmit = async (value) => {
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
```
#### 14.4.2 update Register1.jsx
/src/pages/auth/Register1.jsx
```jsx
// rfce
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { createAlert } from "../../utils/createAlert";
import {useForm} from "react-hook-form"
import FormInput from "../../components/FormInput";

function Register1() {
  // Javascript
  const { register, handleSubmit } = useForm()


  const hdlSubmit = async (value) => {
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
import React from 'react'

function Buttons({isSubmitting, label}) {
  return (
    <button className="bg-green-900 text-white px-2 py-1 rounded-md hover: cursor-pointer">
    {
      isSubmitting
      ? <p>Loading</p>
      : <p>{label}</p>
    }
  </button>
  )
}

export default Buttons
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
            <Buttons isSubmitting={isSubmitting} label="Register"/>
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
import {z} from 'zod'

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
            <FormInput register={register} name="email" errors={errors}/>
            <FormInput register={register} name="firstname" errors={errors}/>
            <FormInput register={register} name="lastname" errors={errors}/>
            <FormInput register={register} name="password" errors={errors}/>
            <FormInput register={register} name="confirmPassword" errors={errors}/>
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
      {errors[name] && <p className="text-sm text-red-500">{errors[name].message}</p>}
    </div>
  );
}

export default FormInput;
```
