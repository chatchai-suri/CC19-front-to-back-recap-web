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
## Step 5 update AppRoutes.jsx
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
