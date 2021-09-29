import React from "react";
import { connect } from "react-redux";
import { authenticationThunk } from "../store/createUser";
import { Link } from "react-router-dom";
import { me } from "../store";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      isEmailFormat: true,
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

    const { error } = this.props;
    let errorName;
    if (
      error &&
      error.response &&
      error.response.data === "Username already in use"
    ) {
      errorName = "username";
    }
    if (
      error &&
      error.response &&
      error.response.data === "Email already in use"
    ) {
      errorName = "email";
    }

    if (this.props.token) {
      return (
       <div>
          <div>Your acount was created!</div>
          <Link to="/login">Make sure to Login!</Link>
        </div>
      );
    }
    return (
      <div style={{ textAlign: "center" }}>
        <h3>WE ARE SO HAPPY YOU'RE GOING TO JOIN US!</h3>
        <form onSubmit={this.handleSubmit}>
          <ul style={{ listStyle: "none" }}>
            <li>
              <label
                style={
                  ({ display: "inline-block" }, { display: "inline-flex" })
                }
                name="email"
              >
                email:{" "}
              </label>
              <input
                name="email"
                type="text"
                onChange={this.handleChange}
                value={this.state.email}
                style={{ margin: ".5rem" }}
              />
            </li>
            {this.state.isEmailFormat ? "" : <div>wrong email format</div>}
            {errorName === "email" ? <div> Email already in use</div> : ""}
            <li>
              <label style={{ display: "inline-block" }} name="username">
                username:{" "}
              </label>
              <input
                name="username"
                type="text"
                onChange={this.handleChange}
                value={this.state.username}
                style={{ margin: ".5rem" }}
              />
            </li>
            {errorName === "username" ? (
              <div> Username already in use</div>
            ) : (
              ""
            )}
            <li>
              <label style={{ display: "inline-block" }} name="password">
                password:{" "}
              </label>
              <input
                name="password"
                type="text"
                onChange={this.handleChange}
                value={this.state.password}
                style={{ margin: ".5rem" }}
              />
            </li>
            <li>
              <label style={{ display: "inline-block" }} name="confirmPassword">
                confirm password:{" "}
              </label>
              <input
                name="confirmPassword"
                type="text"
                onChange={this.handleChange}
                value={this.state.confirmPassword}
                style={{ margin: ".5rem" }}
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
  error: state.createUser.error,
  token: state.createUser.token,
});

const mapDispatchToProps = (dispatch) => ({
  createUser: (user) => dispatch(authenticationThunk(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
