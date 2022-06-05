
import axios from 'axios'


export const placeOrder=(token, subtotal) => async(dispatch, getState) => { 

    const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

    const cartItems = getState().cartReducer.cartItems

dispatch({
    type : 'PLACE_ORDER_REQUEST'
})

try {

 const response = await axios.post('http://localhost:5000/api/orders/placeorder' , {token,subtotal ,currentUser,cartItems }, {headers: {"Access-Control-Allow-Origin":"*"}})
    dispatch({
        type : 'PLACE_ORDER_SUCCESS' , payload : response.data.data    })
    console.log('POST REQUEST',response.data.data)
}
catch(error){
       dispatch({
        type : 'PLACE_ORDER_FAILED'
    })

}

}

