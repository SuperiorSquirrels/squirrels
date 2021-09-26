import axios from "axios";

//action type
const CREATE_USER = "CREATE_USER";
const USER_INFO_IN_USE = "USER_INFO_IN_USE";

//action creator
const createUserAction = (user) => {
  return {
    type: CREATE_USER,
    user,
  };
};

const createUserError = (user) => {
  return {
    type: USER_INFO_IN_USE,
    user,
  };
};

//T H U N K
export const createUserThunk = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("api/users", user);
      console.log(response.data.isEmail);
      if (
        response.data.isEmail === "email already in use" ||
        response.data.isUsername === "username already in use"
      ) {
        dispatch(createUserError(response.data));
      } else {
        const { data } = await axios.post("api/users", user);
        dispatch(createUserAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export default function createUserReducer(state = [], action) {
  switch (action.type) {
    case CREATE_USER:
      return [...state, action.user];
    case USER_INFO_IN_USE:
      return action.user;
    default:
      return state;
  }
}
