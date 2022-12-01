import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./components/App";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

import Layout from "./components/admin/Layout";
import Dashboard from "./components/pages/Dashboard";
import Room from "./components/Room";
import User from "./components/User";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      {/* <Route path="/admin" element={<Dashboard />}></Route> */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="room" element={<Room />}></Route>
        <Route path="orders" element={<Room />}></Route>
        <Route path="user" element={<User />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
