import React from "react";
import Footer from "../Footer/Footer";
import HotelCard from "../HotelCard/HotelCard";
import MuseeCard from "../MuseeCard/MuseeCard";
import Navbar from "../Navbar/Navbar";
import VolCard from "../VolCard/VolCard";


const Accueil = ({ museedata,hoteldata,voldata, }) => {
  return (
    <div>
      <Navbar />
<div><center><h1>Musées</h1></center>
      <div
        style={{
            display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "3%",
        }}
      >
        {  museedata.slice(0,3).map((item) => {
            return <MuseeCard item={item} key={item.id} />;
        })}
        </div>
      </div>
      <div><center><h1>Hotels</h1></center>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "3%",
        }}
      >
 { 
        hoteldata.slice(0,3).map((item) => {
          return <HotelCard item={item} key={item.id} />;
        })}
      </div></div>
      <div><center><h1>Vols</h1></center>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "3%",
        }}
      >
 { 
        voldata.slice(0,3).map((item) => {
          return <VolCard item={item} key={item.id} />;
        })}
      </div>
      </div>









      <Footer/>
    </div>
  );
};

export default Accueil;
