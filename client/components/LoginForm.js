import React from 'react'
import { Link } from 'react-router-dom'

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }; 
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(evt) {
    this.setState({[evt.target.name]: evt.target.value});
  } 

  onSubmit(evt) {
    evt.preventDefault();
    const {username, password} = this.state;
    this.props.signIn({
      username,
      password
    });
  }

  render () {
    const {onChange, onSubmit} = this;
    const {username, password} = this.state;
    return (
      <div style={{textAlign: 'center'}} >
      <h1 style={{margin: '5rem'}}>Please sign in</h1>
      <form className='signup' onSubmit={onSubmit}>
        <label style={{display:'inline-flex'}}>
          <p>Username</p>
          <input style={{height:'50%'}, {margin: '.5rem'}} type="text" value={username} onChange={onChange} name='username' />
        </label>
        <label style={{display:'inline-flex'}}>
          <p>Password</p>
          <input style={{height:'50%'}, {margin: '.5rem'}} type="text" value={password} onChange={onChange} name='password'/>
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
}

// const Login = () => {

//   return (
//       <div style={{textAlign: 'center'}}>
//         <h1 style={{margin: '5rem'}}>Please sign in</h1>
//         <form className='signup'>
//           <label style={{display:'inline-flex'}}>
//             <p>Username</p>
//             <input style={{height:'50%'}, {margin: '.5rem'}} type="text" />
//           </label>
//           <label style={{display:'inline-flex'}}>
//             <p>Password</p>
//             <input style={{height:'50%'}, {margin: '.5rem'}} type="text" />
//           </label>
//           <div>
//             <button type="submit">Login</button>
//           </div>
//         </form>
//         <p>Not registered? You can sign up below!</p>
//         <Link to='/signup'> Sign up</Link>

//       </div>
//   )
// }

//export default SignIn


{/* <div style={{textAlign: 'center'}} >
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

    </div> */}