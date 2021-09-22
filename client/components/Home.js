import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import AllProducts from './AllProducts'

// export const Home = props => {
//   const {username} = props

//   return (
//     <div>
//       <h3>Welcome, {username}</h3>
//     </div>
//   )
// }

// const mapState = state => {
//   return {
//     username: state.auth.username
//   }
// }

// we will change the home component to become more nicer later.
const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/products">
        All Products
      </Link>
    </div>
  )
}

export default Home
