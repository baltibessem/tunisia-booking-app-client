import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import { cartReducer } from "../redux/reducers/cartReducer";
import {
  getAllMuseesReducer,
  getMuseeByIdReducer,
  addMuseeReviewReducer,
  deleteMuseeReducer,
  addMuseeReducer,
  updateMuseeReducer
} from "../redux/reducers/museeReducer"
import { placeOrderReducer } from "./reducers/orderReducer";

const finalReducer = combineReducers({
  getAllMuseesReducer,
  getMuseeByIdReducer,
  addMuseeReviewReducer,
  deleteMuseeReducer,
  addMuseeReducer,
  updateMuseeReducer,
  cartReducer,
  placeOrderReducer
})


const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

// const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
    cartReducer : { cartItems: cartItems},
    
}

const composeEnhancers = composeWithDevTools({})

const store= createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)))

export default store ;


