import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/actions/authActions";
import "./Login.css";

export class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/mentor" />;
    return (
      <div className="container">
        <div className="row">
          <div className="col s6 offset-s3">
            <div className="card grey lighten-5 darken-1 hoverable login-form">
              <div className="card-content grey lighten-5">
                <span className="card-title">Login</span>
                <form
                  onSubmit={this.handleSubmit}
                  className="grey lighten-5"
                  id="loginForm"
                >
                  <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      onChange={this.handleChange}
                      required
                    ></input>
                  </div>
                  <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      onChange={this.handleChange}
                      required
                    ></input>
                  </div>
                  <div className="input-field">
                    <button
                      className="btn blue darken-4 z-depth-0"
                      type="submit"
                      id="submitButton"
                    >
                      Login
                    </button>
                    <div className="red-text center">
                      {authError ? <p>{authError}</p> : null}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebaseReducer.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: creds => dispatch(login(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
