import React from "react";
import "./Register.scss";

export default function Register() {
  return (
    <div className="register">
      <div className="container">
        <div className="left">
          <img src="../../../img/right_home.jpg" alt="" />
        </div>
        <div className="right">
          <div className="rightContainer">
            <h1>SETUP YOUR PROFILE</h1>
            <hr />
            <form action="">
              <div className="formContainer">
                <div className="name">
                  <div className="formColumn">
                    <label for="fName">
                      <b>First Name</b>
                    </label>
                    <input type="text" name="fName" required />
                  </div>
                  <div className="formColumn">
                    <label for="lName">
                      <b>Last Name</b>
                    </label>
                    <input type="text" name="lName" required />
                  </div>
                </div>
                <label for="email">
                  <b>Email</b>
                </label>
                <input type="text" name="email" required />

                <label for="address">
                  <b>Address</b>
                </label>
                <input type="text" name="address" required />

                <label for="contact">
                  <b>Contact</b>
                </label>
                <input type="text" name="contact" required />

                <div className="location">
                  <div className="formColumn">
                    <label for="city">
                      <b>City</b>
                    </label>
                    <input type="text" name="city" required />
                  </div>
                  <div className="formColumn">
                    <label for="state">
                      <b>State</b>
                    </label>
                    <input type="text" name="state" required />
                  </div>
                </div>

                <label for="psw">
                  <b>Password</b>
                </label>
                <input type="password" name="psw" required />

                <div className="buttons">
                  <button className="cancel">Cancel</button>
                  <button className="save">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
