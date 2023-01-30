import { Route, Routes, BrowserRouter } from "react-router-dom";

import Register from "./page/authentation/Register";

import Layout from "./admin/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./page/login/Login";
import Room from "./Room";
import User from "./admin/user/User";
import TrangChu from "./trangchu/index";
import RoomDetail from "./trangchu/roomDetail";
import PayMent from "./payment";
import MailConfirm from "./MailConfirm";
import PassConfirm from "./PassConfirm";
import Role from "./Role";
import RoomTypeAdmin from "./roomTypeAdmin";
import Hotel from "./page/hotel/Hotel";
import List from "./page/list/List";
import Home from "./page/home/Home.jsx";
import PasswordReset from "./page/password/PasswordReset";
import ForgotPassword from "./page/password/ForgotPassword";
import Profile from "./page/authentation/profile/Profile";
import ChangePassword from "./page/changePassword/ChangePassword";
import AdHotel from "./Hotel";
import EditRoom from "./modal/editRoom";
import AdminLogin from "./AdminLogin";
import AddRoom from "./admin/room/AddRoom";
import AddCategories from "./admin/categories/AddCategories";
import Categories from "./admin/categories/Categories";
import AddUser from "./admin/user/AddUser";
import ListUser from "./admin/user/ListUser";


function Admin() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}></Route>

          <Route path="Room" element={<Room />}></Route>
          <Route path="addRoom" element={<AddRoom />}></Route>
          <Route path="edit/:id" element={<EditRoom />}></Route>
          <Route path="orders" element={<Room />}></Route>

          {/* <Route path="home" element={<Home />}></Route> */}
          <Route path="user" element={<ListUser />}></Route>
          <Route path="AddUser" element={<AddUser />}></Route>
          <Route path="categories" element={<Categories />}></Route>
          <Route
            path="categories/addCategories"
            element={<AddCategories />}
          ></Route>

          <Route path="role" element={<Role />}></Route>
          <Route path="roomtypeAdmin" element={<RoomTypeAdmin />}></Route>
          <Route path="adhotel" element={<AdHotel />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Admin;
