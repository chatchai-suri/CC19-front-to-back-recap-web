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
## Step 3 Routes

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
