import React from "react";

import styled from "styled-components";
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  transition: all 0.5s ease;
  cursor: pointer;
  justify-content: center;
  left: 0;
`;

const Container = styled.div`
  margin: 15px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 230px;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Image = styled.img`
  z-index: 2;
  width: 100%;
  height: 100%;
`;

const Icon = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  color: white;
  margin: 10px;
  align-items: center;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Musee = ({ item }) => {
  return (
    <Container onClick={() => alert("hi")}>
      {/* <Circle/> */}
      <Image src={item.images[0]} />
      <Info>
        <Icon>
          <h2>{item.nom}</h2>
        </Icon>
      </Info>
    </Container>
  );
};

export default Musee;
