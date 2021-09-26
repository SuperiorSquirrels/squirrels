import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    {/* <h1>Superior Squirrels</h1> */}
    <nav>
      {isLoggedIn ? (
        <div className="nav" style={{ textAlign: "center" }}>
        {/* <h3>SuperiorSquirrelStore</h3> */}
        <div>
          <Link to="/home"> Home </Link>
          <Link to="/products" style={{ margin: ".5rem" }}>
            Products
          </Link>

          <form action="/" style={{ display: "inline-block" }}>
            <input type="text" placeholder="Search for Stuffies" />
            <button>search</button>
          </form>
          {/* <Link to="/login" style={{ margin: ".5rem" }}>
            Login/Sign up
          </Link> */}
          <a href="#" onClick={handleClick}>
             Logout
          </a>
          <Link style={{ margin: ".5rem" }}>Cart</Link>
        </div>
      </div>
        // <div>
        //   {/* The navbar will show these links after you log in */}
        //   <Link to="/home"> Home </Link>
        //   <a href="#" onClick={handleClick}>
        //     Logout
        //   </a>
        // </div>

      ) : (
        // <div>
        //   {/* The navbar will show these links before you log in */}
        //   <Link to="/login">Login</Link>
        //   <Link to="/signup">Sign Up</Link>

        // </div>
        <div className="nav" style={{ textAlign: "center" }}>
          {/* <h3>SuperiorSquirrelStore</h3> */}
          <div>
            <Link to="/home"> Home </Link>
            <Link to="/products" style={{ margin: ".5rem" }}>
              Products
            </Link>

            <form action="/" style={{ display: "inline-block" }}>
              <input type="text" placeholder="Search for Stuffies" />
              <button>search</button>
            </form>
            <Link to="/login" style={{ margin: ".5rem" }}>
              Login
            </Link>
            <span>/</span>
            <Link to="/signup" style={{ margin: ".5rem" }}>
              Sign up
            </Link>
            <Link style={{ margin: ".5rem" }}>Cart</Link>
          </div>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
    }
  };
};

export default connect(mapState, mapDispatch)(Navbar);

// const NavBar = () =>{
//   return (
//   <div className='nav' style={{ textAlign:'center'}}>
//     <h3>SuperiorSquirrelStore</h3>
//     <div >
//       <Link to="/"> Home </Link>
//       <Link to="/products" style={{margin:".5rem"}}>
//         Products
//       </Link>

//       <form action="/" style={{display: "inline-block"}} >
//         <input
//         type="text"
//         placeholder="Search for Stuffies"
//         />
//         <button>
//           search
//         </button>
//       </form>
//       <Link to='/login' style={{margin:".5rem"}} >
//       Login/Sign up
//       </Link>
//       <Link style={{margin:".5rem"}} >
//       Cart
//       </Link>
//     </div>

//   </div>

//     )
// }

//export default NavBar
