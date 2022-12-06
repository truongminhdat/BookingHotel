import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import bgImg from "../../assets/Login.background.jpg";
import "./header.css";

const Header = ({ title }) => {
  return (
    <div className="background-image bg-cover lg:h-[1200px] md:h-[500px] sm:h-[300px] w-screen ">
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
  );
};

export default Header;
