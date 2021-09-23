import axios from 'axios'

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
export const createUserThunk = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("api/users", user);
      dispatch(createUserAction(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export default function createUserReducer(state = [], action) {
  switch (action.type) {
    case CREATE_USER:
      return [...state, action.user];
    default:
      return state;
  }
}
