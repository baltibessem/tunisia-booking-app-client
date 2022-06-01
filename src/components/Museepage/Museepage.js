import React from "react";
import Musee from "../Musee/Musee";

const Museepage = ({museedata}) => {
  return (
    <div>
     

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "5%",
        }}
      >
        {museedata.map((item) => {
          return <Musee item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Museepage;
