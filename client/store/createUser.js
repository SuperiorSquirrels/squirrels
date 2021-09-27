import axios from "axios";

//action type
const CREATE_USER = "CREATE_USER";

//action creator
const createUserAction = (user) => {
  return {
    type: CREATE_USER,
    user,
  };
};

//T H U N K

export const authenticationThunk = (user) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/auth/signup`, user);
    dispatch(createUserAction(data));
  } catch (error) {
    return dispatch(createUserAction({ error: error }));
  }
};

export default function createUserReducer(state = [], action) {
  switch (action.type) {
    case CREATE_USER:
      return action.user;
    default:
      return state;
  }
}
