import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../components/page/Login";
import Register from "./Register";

import Layout from "./admin/Layout";
import Dashboard from "./pages/Dashboard";
import Room from "./Room";
import User from "./User";
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
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="roomDetail" element={<RoomDetail />}></Route>
        <Route path="payment" element={<PayMent />}></Route>
        <Route path="mailconfirm" element={<MailConfirm />}></Route>
        <Route path="passwordconfirm" element={<PassConfirm />}></Route>

        {/* <Route path="/admin" element={<Dashboard />}></Route> */}
        <Route path="/layout" element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="Room" element={<Room />}></Route>
          <Route path="orders" element={<Room />}></Route>
          {/* <Route path="home" element={<Home />}></Route> */}
          <Route path="user" element={<User />}></Route>
          <Route path="role" element={<Role />}></Route>
          <Route path="roomtypeAdmin" element={<RoomTypeAdmin />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
