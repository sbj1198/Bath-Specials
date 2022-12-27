import React from "react";
import "./HomePage.css";
import Slider from "react-slick";

import HomePage3 from "../Components/HomePage3";
import ShopCollection from "../Components/ShopCollection";
import Gotottop from "../Components/Gotottop";

import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import { Text } from "@chakra-ui/react";

export const HomePage = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    swipeToSlide: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          centerMode: true,
          rows: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          rows: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          rows: 1,
        },
      },
    ],
  };
  return (
    <>
      <Navbar />

      <div className="homeheade-01">LIMITED TIME ONLY!</div>
      <img
        src="/Image/homepage/limg1.gif"
        alt=""
        className="homeimg-tpohead1"
      />
      <img
        src="/Image/homepage/limg2.gif"
        alt=""
        className="homeimg-tpohead2"
      />

      <div className="sliderbody-0234">
        <h1>TODAY'S TOP OFFERS</h1>
        <Slider {...settings} className="nowr215">
          <div>
            <div style={{ textAlign: "center" }} className="silksliderinerdiv2">
              <h2 className="slidercardhead02">Limited time only!</h2>
              <p className="slidercarditemtype02">All candles</p>
              <h1 className="byonegetonefree">Buy1,Get 1 FREE</h1>
              <p className="slidercarditemtype02">Lowest-price item is free</p>
              <button className="sliderbtn">SHOP</button>
            </div>
          </div>
          <div>
            <div className="silksliderinerdiv2">
              {" "}
              <h2 className="slidercardhead02">2 days only!</h2>
              <Text className="slidercarditemtype02">All Body Lotion</Text>
              <h1 className="byonegetonefree">Rs. 3.95</h1>
              <p className="slidercarditemtype02">Lowest-price item is free</p>
              <button className="sliderbtn">SHOP</button>
            </div>
          </div>
          <div>
            <div className="silksliderinerdiv2">
              {" "}
              <h2 className="slidercardhead02">Limited time only!</h2>
              <p className="slidercarditemtype02">Hand Soap</p>
              <h1 className="byonegetonefree">Buy2,Get 1 FREE</h1>
              <p className="slidercarditemtype02">
                Limit 20 with code: MASAI20
              </p>
              <button className="sliderbtn">SHOP</button>
            </div>
          </div>
          <div>
            <div className="silksliderinerdiv2">
              {" "}
              <h2 className="slidercardhead02">Limited time only!</h2>
              <p className="slidercarditemtype02">Travel ,HAnd & Lip Care</p>
              <h1 className="byonegetonefree">Get low as Rs.30</h1>
              <p className="slidercarditemtype02">Lowest-price item is free</p>
              <button className="sliderbtn">SHOP</button>
            </div>
          </div>
          <div>
            <div className="silksliderinerdiv2">
              {" "}
              <h2 className="slidercardhead02">Limited time only!</h2>
              <p className="slidercarditemtype02">All candles</p>
              <h1 className="byonegetonefree">Buy1,Get 1 FREE</h1>
              <p className="slidercarditemtype02">Lowest-price item is free</p>
              <button className="sliderbtn">SHOP</button>
            </div>
          </div>
          <div>
            <div className="silksliderinerdiv2">
              {" "}
              <h2 className="slidercardhead02">Limited time only!</h2>
              <p className="slidercarditemtype02">Room Spray</p>
              <h1 className="byonegetonefree">Get low as Rs.30 </h1>
              <p className="slidercarditemtype02">Lowest-price item is free</p>
              <button className="sliderbtn">SHOP</button>
            </div>
          </div>
        </Slider>
      </div>

      <img
        src="/Image/homepage/limg3.gif"
        alt=""
        className="homeimg-tpohead3"
      />
      <img
        src="/Image/homepage/limg4.gif"
        alt=""
        className="homeimg-tpohead4"
      />

      <ShopCollection />
      <HomePage3 />
      <Gotottop />

      <Footer />
    </>
  );
};
