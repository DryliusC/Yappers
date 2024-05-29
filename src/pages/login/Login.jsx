import React from "react";
import {
  Link
} from "react-router-dom";
import "./Login.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="left">
          <h1>Hello! Welcome Back</h1>
          <form action="">
            <div className="formContainer">
              <label for="email">
                <b>Email</b>
              </label>
              <input
                type="text"
                placeholder="Example@gmail.com"
                name="email"
                required
              />

              <label for="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="at least 8 characters"
                name="psw"
                required
              />

              <p>Forgot Password?</p>
              <button type="submit">Sign-in</button>
            </div>
          </form>
          <div className="seperator">
            <span className="line"></span>
            <span>Or</span>
            <span className="line"></span>
          </div>
          <p>
            Don't have an account?
            <Link to="/register" className="link">
              <span>Sign-up</span>
            </Link>
          </p>
        </div>
        <div className="right">
          <img src="../../../img/left_home.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
