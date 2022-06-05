import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { addToCart, deleteFromCart } from "../../redux/actions/cartActions";
import Checkout from "../Checkout/Checkout";
import Navbar from "../Navbar/Navbar";

function Cart() {
  const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content:space-between;
  height: 100%;
  }
`;
  const CollectionTitle = styled.h2`
    font-size: 30px;
    font-weight: 100;
    margin-top: 15px;
  `;

  const Image = styled.img`
    z-index: 2;
    width: 30%;
    height: 300px;
    margin-left: 30px;
    border-radius: 10px;
  `;

  const Button = styled.button`
    padding: 15px;
    border: 2px solid #cb896a;
    font-weight: 300;
    width: 150px;
    background-color: white;
    cursor: pointer;
    &:hover {
      background-color: #cb896a;
    }
  `;
  const cartreducerstate = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();

  const cartItems = cartreducerstate.cartItems;

  var subtotal = cartItems.reduce((x, item) => x + item.prix, 0);

  return (
    <div>
      <Navbar />
      <h1>Panier de tickets</h1>{" "}
      {cartItems.map((item) => {
        return (
          <div>
            <Container>
              <Image src={item.image} />
              <div>
                <h2>{item.nom}</h2>
                <CollectionTitle>Horraires</CollectionTitle>
                Du 01/06 au 15/09 : De 9:00 à 17:00 <br />
                Du 16/09 au 30/05 : De 9:30 à 16:30 <br />
                <br />
                <b>Musée fermé le lundi</b>
              </div>
              <i
                className="fa fa-trash mt-5"
                style={{
                  color: "#cb896a",
                  fontSize: "40px",
                  marginTop: "50px",
                }}
                onClick={() => {
                  dispatch(deleteFromCart(item));
                }}
                aria-hidden="true"
              ></i>
              <CollectionTitle style={{ marginRight: "40px" }}>
                SubTotal : {subtotal} TND
              </CollectionTitle>
            </Container>
          </div>
        );
      })}
      <hr />
      <Checkout amount={subtotal} />
      <hr />
    </div>
  );
}

export default Cart;
