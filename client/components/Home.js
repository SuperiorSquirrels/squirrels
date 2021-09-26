import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import AllProducts from './AllProducts'

export const Home = props => {
  const {username} = props

  return (
    // <div>
    //   <h3>Welcome, {username}</h3>
    // </div>
    <div style={{ textAlign:'center'}}>
      <h3>Welcome, {username}</h3>
      <h1>Welcome to the SuperiorSquirrelStore!</h1>
       <h3>Where we meet all of your stuffed animal needs</h3>

      <p className={'styleme'} style={{ margin:'5rem'}} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
       </p>

     </div>
  )
}

const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)

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
