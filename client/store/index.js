import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import productsReducer from "./products";
import singleProductReducer from "./singleProduct";
import createUserReducer from "./createUser";
import auth from './auth';
import cartReducer from "./cart";

const reducer = combineReducers({
  products: productsReducer,
  singleProduct: singleProductReducer,
  createUser: createUserReducer,
  auth: auth,
  cart: cartReducer

});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth"
