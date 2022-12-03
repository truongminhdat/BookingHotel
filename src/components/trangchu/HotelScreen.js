import React from "react";
import "./HotelScreen.css";
import Header from "./Header";
import Khachsan from "../../assets/khachsan.png";
import Room from "./Room";
import SlideRoom from "./SlideRoom";

const HotelScreen = () => {
  return (
    <>
      <Header />
      <section className="book">
        <div className="container flex_space">
          <div className="form">
            <form className="gird">
              <input type="date" placeholder="Araival Date" />
              <input type="date" placeholder="Araival Date" />
              <input type="number" placeholder="Audurt" />
              <input type="number" placeholder="Children" />
              <input type="submit" value="CHECK AVAILABILITY" />
            </form>
          </div>
        </div>
      </section>
      <section className="about top mt-20">
        <div className="container flex">
          <div className="left">
            <div className="heading">
              <h1>Welcome</h1>
              <h2>Crowny Hotel</h2>
            </div>
            <p>
              Khách sạn Hoàng Sơn Peace tọa lạc gần Quảng trường Đinh Tiên Hoàng
              - Công trình lịch sử chào mừng đại lễ 1000 năm Thăng Long Hà Nội.
              Nằm giữa trung tâm kinh tế và văn hóa của Thành Phố Ninh Bình,
              Khách sạn Hoàng Sơn Peace mong muốn là cánh cửa đầu tiên ở Ninh
              Bình chào đón Quý khách trong nước và Quốc tế về với Ninh Bình,
              miền đất sở hữu 2 loại hình du lịch đặc trưng là du lịch sinh thái
              và du lịch văn hóa tâm linh. Với chất lượng đạt chuẩn Quốc tế 4
              sao, Khách sạn Hoàng Sơn Peace không chỉ đáp ứng hoàn hảo nhu cầu
              nghỉ ngơi của Quý khách mà còn mang đến những giây phút thư giãn
              giải trí tuyệt vời và để lại dư vị ấn tượng trong văn hóa ẩm thực
              nơi đây. Khách sạn là sự kết hợp hài hòa của phong cách mang màu
              sắc sang trọng, hiện đại và cổ kính bao gồm cả quần thể Nhà hàng,
              Bể Bơi, sân Tennis và các khu vui chơi giải trí khác được quy tụ
              trong một khuôn viên rộng lớn gần 15.000 m2.
            </p>
            <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
              Contact Us
            </button>
          </div>
          <div className="right">
            <img src={Khachsan}></img>
          </div>
        </div>
      </section>
      <Room />
      <div className="mt-2">
        <SlideRoom />
      </div>
    </>
  );
};
export default HotelScreen;
