import React from 'react';
import { connect } from 'react-redux'
import { createUserThunk } from '../store/createUser';

class Signup extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.confirmPassword === this.state.password) {
      this.props.createUser({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
      });
      this.setState({
        name: '',
        address: '',
        imageUrl: '',
        description: ''
      })
    }
  }

  render() {
    return (
      <div>
        <h3>WE ARE SO HAPPY YOU'RE GOING TO JOIN US!</h3>
        <form onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <label name="email">email: </label>
              <input
                name="email"
                type="text"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </li>
            <li>
              <label name="username">username: </label>
              <input
                name="username"
                type="text"
                onChange={this.handleChange}
                value={this.state.username}
              />
            </li>
            <li>
              <label name="password">password: </label>
              <input
                name="password"
                type="text"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </li>
            <li>
              <label name="confirmPassword">confirm password: </label>
              <input
                name="confirmPassword"
                type="text"
                onChange={this.handleChange}
                value={this.state.confirmPassword}
              />
            </li>
          </ul>
          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  createUser: (user) => dispatch(createUserThunk(user)),
})

export default connect(null, mapDispatchToProps)(Signup)
