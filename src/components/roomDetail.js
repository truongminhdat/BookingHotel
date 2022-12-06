import React from "react";
import Header from "./admin/Header";
import "./css/bgImg.css";

const roomDetail = () => {
  return (
    <>
      <div className="w-screen h-screen">
        <div className="background-image bg-cover lg:h-2/3 md:h-2/4 sm:h-1/3 w-screen ">
          <nav className=" w-auto px-2 sm:px-4 py-2.5 bg-gradient-to-b from-cyan-900 to-transparent">
            <div className="container flex flex-wrap items-center justify-between mx-auto ">
              <span className="logoText text-white ">
                <div className="">
                  <a
                    className="logoText flex flex-col pt-6 items-end rounded-xl hover:no-underline pb-4 px-4 transition duration-200 ease-in-out hover:scale-105"
                    href="./trangchu"
                  >
                    <h3 className="hodaText leading-[85px] text-9xl font-light tracking-tighter  text-white">
                      HoDa
                    </h3>
                    <h4 className="bookingText text-3xl font-mono tracking-tighter text-white">
                      Booking
                    </h4>
                  </a>
                </div>
              </span>
              <div
                className="hidden w-full md:block md:w-auto "
                id="navbar-default"
              >
                <ul className="flex flex-col p-4 mt-4 lg:text-lg md:flex-row md:space-x-8 md:mt-0 sm:text-sm md:font-medium drop-shadow-md">
                  <li className="w-16 text-center">
                    <a
                      href="#"
                      className="block text-white rounded hover:no-underline hover:bg-cyan-900 md:p-0 transition duration-150 ease-in-out hover:scale-110 "
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li className="w-16 text-center">
                    <a
                      href="#"
                      className="block py-2  text-white rounded hover:no-underline hover:bg-cyan-900 md:p-0 transition duration-150 ease-in-out hover:scale-110 "
                    >
                      About
                    </a>
                  </li>
                  <li className="w-24 text-center">
                    <a
                      href="#"
                      className="block py-2 text-white rounded hover:no-underline hover:bg-cyan-900 md:p-0 transition duration-150 ease-in-out hover:scale-110 "
                    >
                      Services
                    </a>
                  </li>
                  <li className="w-20 text-center">
                    <a
                      href="#"
                      className="block py-2   text-white rounded hover:no-underline hover:bg-cyan-900 md:p-0 transition duration-150 ease-in-out hover:scale-110 "
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="w-20 text-center">
                    <a
                      href="#"
                      className="block py-2  text-white rounded hover:no-underline hover:bg-cyan-900 md:p-0 transition duration-150 ease-in-out hover:scale-110 "
                    >
                      Contact
                    </a>
                  </li>
                  <li className="w-16 text-center">
                    <a
                      href="#"
                      className="block py-2 text-white rounded hover:no-underline hover:bg-cyan-900 md:p-0 transition duration-150 ease-in-out hover:scale-110 "
                    >
                      Login
                    </a>
                  </li>
                  <li className="w-20 text-center">
                    <a
                      href="#"
                      className="block py-2 text-white rounded hover:no-underline hover:bg-cyan-900 md:p-0 transition duration-150 ease-in-out hover:scale-110 "
                    >
                      Register
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-start justify-center detailText bg-slate-50 w-2/3 h-36">
            <h1 className="px-3 py-1 font-serif text-4xl">
              Khu nghỉ dưỡng Risemount Premier Đà Nẵng
            </h1>
            <h2 className="px-3 py-1 font-serif">
              120 Nguyễn Văn Thoại, Mỹ An, Ngũ Hành Sơn, Đà Nẵng, Việt Nam,
              550000
            </h2>
          </div>
          <div className="flex flex-col w-2/3">
            <div className="background-image h-[900px] w-full"></div>
            <div className="flex flex-col items-end px-4 py-4 bg-slate-50 h-40 w-full">
              <p className="text-lg font-serif">Giá phòng mỗi đêm từ</p>
              <p className="text-4xl mt-1" href="#">
                (1.500.000 VNĐ)
              </p>
              <button
                className="mt-2 px-10 py-2 text-xl rounded-lg bg-cyan-900 text-white hover:transition duration-150 ease-in-out hover:scale-110 hover:bg-cyan-700  "
                type="submit"
              >
                Đặt ngay
              </button>
            </div>
          </div>
          <div>tiện nghi chưa làm chi trơn ahihi </div>

          <div className="flex flex-col justify-start w-2/3 ">
            <div className="w-3/5 px-3 my-5 rounded-lg shadow-md shadow-cyan-800/60">
              <form action="" class="w-full p-4">
                <div className="mb-2">
                  <label for="comment" class="text-lg text-gray-600">
                    Add a comment
                  </label>
                  <textarea
                    className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                    name="comment"
                    placeholder=""
                  ></textarea>
                </div>
                <div>
                  <button className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">
                    Comment
                  </button>
                  <button className="px-3 py-2 text-sm text-blue-600 border border-blue-500 rounded">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default roomDetail;
