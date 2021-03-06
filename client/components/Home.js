import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AllProducts from "./AllProducts";

export const Home = (props) => {
  const { username } = props;

  return (
    // <div>
    //   <h3>Welcome, {username}</h3>
    // </div>
    <div style={{ textAlign: "center" }}>
      <h3>Welcome, {username}</h3>
      <h1>Welcome to the Superior Squirrel Stuffies!</h1>
      <h3>Where we meet all of your stuffed animal needs</h3>

      <p className={"styleme"} style={{ margin: "5rem" }}>
        Here at SSS we are committed to connecting you with new adorable fluffy
        friends. As people with many furry friends we are confident that you
        will find a new little buddy to brighten up your day. Life can be pretty
        lonely sometimes, but we are certain that with a cute little smiling
        squirrel from SSS looking up at you, things will feel just a bit
        lighter.
      </p>
    </div>
  );
};

const mapState = (state) => {
  return {
    // userId: state.auth.id,
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);

// const Home = () => {
//   return (
//     <div style={{ textAlign:'center'}}>

//       <h1>Welcome to the SuperiorSquirrelStore!</h1>
//       <h3>Where we meet all of your stuffed animal needs</h3>

//       <p className={'styleme'} style={{ margin:'5rem'}} >
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//       </p>

//     </div>
//   )
// }

//export default Home
