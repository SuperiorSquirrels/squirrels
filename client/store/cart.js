import axios from "axios";

// Action types

const GET_USER_CART = 'GET_USER_CART'
const NEW_CART = "NEW_CART"
const ADD_TO_CART = 'ADD_TO_CART'

// const UPDATE_CART = 'UPDATE_CART'

const DELETE_FROM_CART = "DELETE_FROM_CART"


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

const deleteToCart = (cart, orderId) => {
  return {
    type: DELETE_FROM_CART,
    cart,
    orderId
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
        dispatch(addToCart(editCart[0].products));
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteUserCartThunk = (id, orderId) => {
  console.log('🧤 id', id);
  console.log('🧤 orderId', orderId);


  return async (dispatch) => {
    try {
      const {data: cart} = await axios.delete(`/api/cart/${id}`, orderId)
      console.log('🧤 cart', cart);

      const cartDetail = cart[0].products
      dispatch(deleteToCart(cartDetail, orderId.id))
    } catch (err) {
      console.log('🧤 deleteUserCart - err', err);
      }
  }
}




// Reducer

const initialState = []

const cartReducer = (state = initialState, action) => {
  console.log('🧤 action', action);

  switch(action.type) {
    case GET_USER_CART:
      return action.cart
    case NEW_CART:
      return [...state, ...action.cart];
    case ADD_TO_CART:
      return action.cart
    case DELETE_FROM_CART:
      return state.filter((cart) => cart.orderId !== action.orderId)
    default:
      return state
  }
}

export default cartReducer
