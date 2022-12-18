import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../assets/anhdalat.jpg"
import './hotel.css'
const Hotel = () => {
    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Dai Minh St Quang Nam</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location  - 500m from center
                    </span>
                    <span className="hotelPriceHightLight">
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        <div className="hotelImgWrapper">
                            <img src={Logo} alt="" className="hotelImg"/>
                        </div>
                    </div>
                    <div className="hotelDesc">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">
                            Đà Lạt Sunshine Garden
                            </h1>
                            <p className="hotelDesc">
                            Located 12 km from Dalat Flower Gardens, Đà Lạt Sunshine Garden provides accommodation with a garden, a terrace and a 24-hour front desk for your convenience. The tented camp features both WiFi and private parking free of charge.

Units are equipped with a kitchen with a dining area, and a shared bathroom with slippers and bidet. A fridge, an oven and minibar are also provided, as well as a kettle and a coffee machine.

Đà Lạt Sunshine Garden offers a continental or buffet breakfast.

A car rental service is available at the accommodation.

Xuan Huong Lake is 13 km from Đà Lạt Sunshine Garden, while Yersin Park Da Lat is 13 km away. The nearest airport is Lien Khuong, 40 km from the tented camp, and the property offers a paid airport shuttle service.

Các cặp đôi đặc biệt thích địa điểm này — họ cho điểm 8,2 cho kỳ nghỉ dành cho 2 người.


                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Điểm nổi bật của chỗ nghỉ</h1>
                            <span>Địa điểm hàng đầu: Được khách gần đây đánh giá cao (8,2 điểm)</span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Đặt phòng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hotel