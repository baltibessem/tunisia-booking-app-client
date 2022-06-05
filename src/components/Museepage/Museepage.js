import React from "react";
import MuseeCard from "../MuseeCard/MuseeCard";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Museepage = ({ museedata }) => {
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
        {museedata.map((item) => {
          return <MuseeCard item={item} key={item.id} />;
        })}
      </div>
        <Footer/>
    </div>
  );
};

export default Museepage;
