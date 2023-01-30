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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home />}></Route>
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>

        <Route path="roomDetail" element={<RoomDetail />}></Route>
        <Route path="payment" element={<PayMent />}></Route>
        <Route path="mailconfirm" element={<MailConfirm />}></Route>
        <Route path="password-reset" element={<PasswordReset />}></Route>
        <Route path="changePassword" element={<ChangePassword />}></Route>
        <Route
          path="forgot-password/:id/:token"
          element={<ForgotPassword />}
        ></Route>

        {/* <Route path="/admin" element={<Dashboard />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
