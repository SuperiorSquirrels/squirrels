import axios from "axios";

// Action types

const GET_USER_CART = 'GET_USER_CART'

// const ADD_TO_CART = 'ADD_TO_CART'

// const UPDATE_CART = 'UPDATE_CART'

// const DELETE_FROM_CART = "DELETE_FROM_CART"


// Action creators

const getUserCart = (cart) => {
  return {
    type: GET_USER_CART,
    cart
  }
}


// Thunks

export const getUserCartThunk = (id) => {
  console.log('🧤 id', id);

  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/cart/${id}`)
      console.log('🧤 response[0]', response[0]);

      dispatch(getUserCart(response))
    } catch (err) {
      console.log('🧤 getUserCart - err', err);
      }
  }

}


// Reducer

const initialState = []

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_USER_CART:
      return action.cart

    default:
      return state
  }
}

export default cartReducer
