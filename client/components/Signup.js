import React from "react";
import { connect } from "react-redux";
import { createUserThunk } from "../store/createUser";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      isEmailFormat: true,
      allGood: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (!this.state.email.includes("@")) {
      this.setState({
        isEmailFormat: false,
      });
    }
    if (this.state.confirmPassword === this.state.password) {
      this.props.createUser({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
      });
      this.setState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      });
    }
  }

  render() {
    // if (
    //   this.props.userInfo.isEmail === "email already in use" &&
    //   this.props.userInfo.isUsername === "username already in use" &&
    //   this.state.confirmPassword !== this.state.password
    // ) {
    //   this.setState({
    //     allGood: true,
    //   });
    // }
    // if (this.state.allGood) {
    //   return (
    //     <div>
    //       <div> Thank you for joining us we look forward to you patronage</div>
    //       <Link to="/products">Back to store</Link>
    //     </div>
    //   );
    // }
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
            {this.state.isEmailFormat ? "" : <div>wrong email format</div>}
            {this.props.userInfo.isEmail === "email already in use" ? (
              <div> email already in use</div>
            ) : (
              ""
            )}
            <li>
              <label name="username">username: </label>
              <input
                name="username"
                type="text"
                onChange={this.handleChange}
                value={this.state.username}
              />
            </li>
            {this.props.userInfo.isUsername === "username already in use" ? (
              <div>username already in use</div>
            ) : (
              ""
            )}
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
            {this.state.password === this.state.confirmPassword ? (
              ""
            ) : (
              <div>password not the same</div>
            )}
          </ul>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.createUser,
});

const mapDispatchToProps = (dispatch) => ({
  createUser: (user) => dispatch(createUserThunk(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
