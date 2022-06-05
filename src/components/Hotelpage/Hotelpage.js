import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import HotelCard from "../HotelCard/HotelCard";

const Hotelpage = ({hoteldata}) => {
  

  return (
    <div>
      <Navbar />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "3%",
        }}
      >
        {hoteldata.map((item) => {
          return <HotelCard item={item} key={item.id} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Hotelpage;
