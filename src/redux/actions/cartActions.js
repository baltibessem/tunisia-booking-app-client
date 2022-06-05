export const addToCart = (item) => (dispatch, getState) => {
  console.log("inside action", item);

  var cartItem = {
    nom: item.nom,
    id: item.id,
    image: item.image,
    prix: item.prix,
  };

  dispatch({ type: "ADD_TO_CART", payload: cartItem });

  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};

export const deleteFromCart = (item) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: item });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};
