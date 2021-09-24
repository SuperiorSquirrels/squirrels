import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {

  return (
      <div style={{textAlign: 'center'}}>
        <h1 style={{margin: '5rem'}}>Please sign in</h1>
        <form className='signup'>
          <label style={{display:'inline-flex'}}>
            <p>Username</p>
            <input style={{height:'50%'}, {margin: '.5rem'}} type="text" />
          </label>
          <label style={{display:'inline-flex'}}>
            <p>Password</p>
            <input style={{height:'50%'}, {margin: '.5rem'}} type="text" />
          </label>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
        <p>Not registered? You can sign up below!</p>
        <Link to='/signup'> Sign up</Link>

      </div>
  )
}

export default Login
