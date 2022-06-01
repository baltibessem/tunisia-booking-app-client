import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";
import Loading from "../Loading/Loading";

const Carrousel = ({ musee }) => {
  return musee.length === 0 ? (
    <Loading />
  ) : (
    <Carousel
      autoPlay={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
    >
      <div>
        <img
          src={require("../../assets/col1.png")}
          width="500px;"
          border-radius="5px;"
          height="150px"
          object-fit="cover;"
        />
        <p>Céramiques découvertes dans les nécropoles puniques.</p>
      </div>
      <div>
        <img
          src={require("../../assets/col2.jpg")}
          width="500px;"
          height="150px"
          border-radius="25px;"
          object-fit="cover;"
        />
        <p >Sarcophages du prêtre et de la prêtresse.</p>
      </div>
      <div>
        <img
          src={require("../../assets/col3.jpg")}
          width="500px;"
          border-radius="5px;"
          height="150px"
          object-fit="cover;"
        />
        <p>Rasoirs de bronze ornés.</p>
      </div>
    </Carousel>
  );
};

export default Carrousel;
