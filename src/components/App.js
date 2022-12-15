import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../components/page/Login";
import Register from "./Register";
import Home from "./Home";
import Layout from "./admin/Layout";
import Dashboard from "./pages/Dashboard";
import Room from "./Room";
import User from "./User";
import TrangChu from "./trangchu/index";
import RoomDetail from "./roomDetail";
import PayMent from "./payment";
import MailConfirm from "./MailConfirm";
import PassConfirm from "./PassConfirm";
import Role from "./Role";
import RoomTypeAdmin from "./roomTypeAdmin";
function App() {
  return (
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
          <Route path="roomtypeAdmin" element={<RoomTypeAdmin />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
