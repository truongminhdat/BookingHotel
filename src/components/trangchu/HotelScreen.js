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
      <section className="book w-screen">
        <div className="flex justify-center bg-cyan-900 py-3">
          <div className="form">
            <form className="flex items-center  ">
              <p className="text-white ">Arrival Date</p>
              <input
                type="date"
                placeholder="Arrival Date"
                className="py-1 px-1 mx-3 rounded-lg "
              />
              <p className="text-white">Depart Date</p>
              <input
                type="date"
                placeholder="Depart Date"
                className="py-1 px-1 mx-2 rounded-lg "
              />
              <input
                type="number"
                placeholder="Adult"
                className="py-1 px-1 mx-2 rounded-lg w-28 text-center"
              />
              <input
                type="number"
                placeholder="Children"
                className="py-1 p-1 mx-2 rounded-lg w-28 text-center"
              />
              <input
                type="submit"
                className="py-1 px-2 mx-2 rounded-lg text-md text-white cursor-pointer bg-cyan-700 hover:bg-green-700 hover:shadow-md hover:transition ease-in-out duration-150 hover:scale-110"
                value="Check Availability"
              />
            </form>
          </div>
        </div>
      </section>
      <section className="py-5 px-5 w-screen">
        <div className=" flex flex-row justify-center items-center w-screen bg-white">
          <div className="left w-1/5">
            <div className="heading relative px-5 ">
              <h1 className="absolute text-9xl font-serif opacity-20">
                Welcome
              </h1>
              <h2 className="text-6xl font-serif">Crowny Hotel</h2>
            </div>
            <p className="">
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
            <button className="bg-cyan-900 hover:bg-green-700 hover:scale-110 hover:transition ease-in-out duration-150 text-white font-bold py-2 px-5 rounded mt-2">
              Contact Us
            </button>
          </div>
          <div className="right px-10 ">
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
