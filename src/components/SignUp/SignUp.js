import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="login-container">
      <div className="signUp-container">
        <h1 className="text">Please SignUp its Free</h1>
        <form className="form-container">
          <input
            className="input-field name-field"
            type="text"
            placeholder="First Name"
            id=""
          />
          <input
            className="input-field name-field"
            type="text"
            placeholder="Second Name"
            id=""
          />
          <br />
          <input
            className="input-field email-field"
            type="email"
            placeholder="Your Email"
            required
            id=""
          />
          <br />
          <input
            className="input-field pass-field"
            type="password"
            placeholder="Password"
            required
            id=""
          />
          <br />
          <button className="btn" type="submit">
            Sign UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
