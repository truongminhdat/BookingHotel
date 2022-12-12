import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./components/App";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Layout from "./components/admin/Layout";
import Dashboard from "./components/pages/Dashboard";
import Room from "./components/Room";
import User from "./components/User";
import TrangChu from "./components/trangchu/index";
import RoomDetail from "./components/roomDetail";
import PayMent from "./components/payment";
import MailConfirm from "./components/MailConfirm";
import PassConfirm from "./components/PassConfirm";
import Role from "./components/Role";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/trangchu" element={<TrangChu />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="RoomDetail" element={<RoomDetail />}></Route>
      <Route path="payment" element={<PayMent />}></Route>
      <Route path="mailconfirm" element={<MailConfirm />}></Route>
      <Route path="passwordconfirm" element={<PassConfirm />}></Route>

      {/* <Route path="/admin" element={<Dashboard />}></Route> */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="Room" element={<Room />}></Route>
        <Route path="orders" element={<Room />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="user" element={<User />}></Route>
        <Route path="role" element={<Role />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
