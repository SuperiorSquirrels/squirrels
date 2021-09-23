import axios from 'axios'

const SET_PRODUCTS = 'SET_PRODECTS'

// action type
const setProducts = (products) => ({
  type: SET_PRODUCTS,
  products
})

// thunk
export const fetchProducts = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/products');
    dispatch(setProducts(data))
  }
}

// reducer
function productsReducer(state = [], action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products
    default:
      return state
  }
}

export default productsReducer
