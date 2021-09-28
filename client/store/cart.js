import axios from "axios";

// Action types

const GET_USER_CART = 'GET_USER_CART'
const NEW_CART = "NEW_CART"
const ADD_TO_CART = 'ADD_TO_CART'

// const UPDATE_CART = 'UPDATE_CART'

// const DELETE_FROM_CART = "DELETE_FROM_CART"


// Action creators

const getUserCart = (cart) => {
  return {
    type: GET_USER_CART,
    cart
  }
}

const newCart = (cart) => {
  return {
    type: ADD_TO_CART,
    cart
  }
}

const addToCart = (cart) => {
  return {
    type: ADD_TO_CART,
    cart
  }
}


// Thunks

export const getUserCartThunk = (id) => {
  console.log('🧤 id', id);

  return async (dispatch) => {
    try {
      const {data: cart} = await axios.get(`/api/cart/${id}`)
      console.log('🧤 cart', cart);

      const cartDetail = cart[0].products
      dispatch(getUserCart(cartDetail))
    } catch (err) {
      console.log('🧤 getUserCart - err', err);
      }
  }
}

export const addToCartThunk = (id, item) => {
  return async (dispatch) => {
    try {
      const {data: cart} = await axios.get(`/api/cart/${id}`)
      if (!cart.length || !cart[0].isCart) {
        const { data: createNewCart } = await axios.post(`/api/cart`, item);
        dispatch(newCart(createNewCart[0].products));
      } else {
        const { data: editCart } = await axios.put(`/api/cart/update/${id}`, item);
        console.log('..........addToCartResponse', editCart)

        dispatch(addToCart(editCart));
      }
    } catch (error) {
      console.log(error)
    }
  }
}


// Reducer

const initialState = []

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_USER_CART:
      return action.cart
    case NEW_CART:
      return action.cart
    case ADD_TO_CART:
      return [...state, ...action.cart];
    default:
      return state
  }
}

export default cartReducer
