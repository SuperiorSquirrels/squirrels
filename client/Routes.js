import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import { Login } from './components/AuthForm';
import Signup from './components/Signup';
import Home from "./components/Home";
//import Signup from "./components/Signup";
import SingleProduct from "./components/SingleProduct";
import NotFound from "./components/NotFound";

import {me} from "./store"
import UserCart from "./components/UserCart";
import GuestCart from "./components/GuestCart"

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            {/* <Redirect to="/home" /> */}
            <Route exact path="/products" component={AllProducts} />
            <Route exact path="/products/:id(\d+)" component={SingleProduct} />
            <Route exact path="/cart/:id(\d+)" component={UserCart} />
            {/* <Route>
             <NotFound />
           </Route> */}
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            {/* <Redirect to="/home" /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/products" component={AllProducts} />
            <Route exact path="/cart" component={GuestCart} />
            <Route exact path="/products/:id(\d+)" component={SingleProduct} />
            <Route>
             <NotFound />
           </Route>
          </Switch>
        )}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

// class Routes extends Component {
//   render() {
//     return (
//       <div>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/products" component={AllProducts} />
//           <Route exact path="/login" component={Login} />
//            <Route exact path="/signup" component={Signup} />
//           <Route path="/products/:id(\d+)" component={SingleProduct} />

//           {/* make sure the NotFound route is the last route */}
//           <Route>
//             <NotFound />
//           </Route>
//         </Switch>
//       </div>
//     );
//   }
// }

// {isLoggedIn ? (
//   <Switch>
//     <Route path="/home" component={Home} />
//     <Redirect to="/home" />
//   </Switch>
// ) : (
//   <Switch>
//     <Route exact path="/products" component={AllProducts} />

//     <Route path='/' exact component={ Login } />
//     <Route path="/login" component={Login} />
//     <Route path="/signup" component={Signup} />
//     <Route path="/products/:id(\d+)" component={SingleProduct} />
//     <Route>
//      <NotFound />
//    </Route>
//   </Switch>
// )}
