import React from "react";
import "./Room.css";

const Room = () => {
  return (
    <>
      <section className="counter top w-screen px-3 py-3">
        <div className="grid grid-rows-1 grid-flow-col gap-6 text-center ">
          <div className="box">
            <h1 className="text-5xl">2500</h1>
            <hr />
            <span>Customer</span>
          </div>
          <div className="box">
            <h1 className="text-5xl">2500</h1>
            <hr />
            <span>Customer</span>
          </div>
          <div className="box">
            <h1 className="text-5xl">2500</h1>
            <hr />
            <span>Customer</span>
          </div>
          <div className="box">
            <h1 className="text-5xl">2500</h1>
            <hr />
            <span>Customer</span>
          </div>
        </div>
      </section>
    </>
  );
};
export default Room;
