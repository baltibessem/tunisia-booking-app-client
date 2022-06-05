import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../../redux/actions/orderActions";
import { useHistory } from "react-router-dom";

function Checkout({ subtotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const history = useHistory();

  const { loading, error, success } = orderstate;

  const dispatch = useDispatch();

  function tokenHander(token) {
    dispatch(placeOrder(token, subtotal));
    console.log(token);
  }

  return (
    <div>
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHander}
        stripeKey={
          "pk_test_51KeRR0JO42TJpmFAh6Lk7BIPUEQzHvwnMyXe0orAooVUyPOAS0Zbg29ZfCJX2qtsxPgE32UXTqqa0cjCvUyIJY8200UlMiXlqb"
        }
        currency="TTD"
      >
        <button
          //  padding: 15px;
          //  border: 2px solid #cb896a;
          //  font-weight: 300;
          //  width: 150px;
          //  background-color: white;
          //  cursor: pointer;
          //  &:hover {
          //    background-color: #cb896a;
          //  }
          style={{
            cursor:"pointer",
            border : "2px solid white",
            padding: "15px",
            width: "150px",
            fontWeight:"300",
            marginTop:"15px",
            marginLeft:"40%",
            backgroundColor: "#cb896a",
            color: "white",
          }}
        >
          Payer
        </button>
      </StripeCheckout>
    </div>
  );
}

export default Checkout;
