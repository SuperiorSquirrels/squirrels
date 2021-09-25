import React from 'react'
import {connect} from 'react-redux'
import {authenticate} from '../store'
import { Link } from 'react-router-dom'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props
  console.log('props', props)
  return (
    <div style={{textAlign: 'center'}} >
      <h1 style={{margin: '5rem'}}>Please sign in</h1>
      <form className='signup' onSubmit={handleSubmit} name={name}>
        <label style={{display:'inline-flex'}} htmlFor="username">
          <p>Username</p>
          <input style={{height:'50%'}, {margin: '.5rem'}} type="text" name="username" />
        </label>
        <label style={{display:'inline-flex'}} htmFor="password">
          <p>Password</p>
          <input style={{height:'50%'}, {margin: '.5rem'}} type="text" name="password"/>
        </label>
        <div>
          <button type="submit">Login {displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <p>Not registered? You can sign up below!</p>
      <Link to='/signup'> Sign up</Link>

    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error
  }
}

const mapDispatch = dispatch => {
  //console.log('event', evt)
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const username = evt.target.username.value
      const password = evt.target.password.value
      dispatch(authenticate(username, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)
export default AuthForm

  // <div>
  //   <form onSubmit={handleSubmit} name={name}>
  //     <div>
  //       <label htmlFor="username">
  //         <small>Username</small>
  //       </label>
  //       <input name="username" type="text" />
  //     </div>
  //     <div>
  //       <label htmlFor="password">
  //         <small>Password</small>
  //       </label>
  //       <input name="password" type="password" />
  //     </div>
  //     <div>
  //       <button type="submit">{displayName}submit </button>
  //     </div>
  //     {error && error.response && <div> {error.response.data} </div>}
  //   </form>
  //   <p>Not registered? You can sign up below!</p>
  //   <Link to='/signup'> Sign up</Link>
  
  // </div>