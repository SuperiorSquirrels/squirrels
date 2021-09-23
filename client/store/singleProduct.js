import axios from "axios";

const SET_SINGLEPRODUCT = "SET_SINGLEPRODUCT";

// action type
const setSingleProduct = (singleProduct) => ({
  type: SET_SINGLEPRODUCT,
  singleProduct,
});

// thunk
export const fetchSingleProduct = (id) =>
  async function (dispatch) {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch(setSingleProduct(data));
  };

// reducer
function singleProduct(state = {}, action) {
  switch (action.type) {
    case SET_SINGLEPRODUCT:
      return action.singleProduct;
    default:
      return state;
  }
}

export default singleProduct;
