import axios from 'axios'

const SET_PRODUCTS = 'SET_PRODECTS'

const setProducts = (products) => ({
  type: SET_PRODUCTS,
  products
})

export const fetchProducts = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/products');
    dispatch(setProducts(data))
  }
}

export default function(state = [], action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products
    default:
      return state
  }
}
