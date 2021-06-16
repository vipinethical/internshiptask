import React from "react";
import "./login.css";
import email from "../images/email.png";
import pass from "../images/pass.png";
import { Link } from "react-router-dom";
import useForm from "./useForm";

function Login() {
  const { handleSumbit, handeChange } = useForm();
  return (
    <div className="loginbox">
      <form onSubmit={handleSumbit} className="form">
        <h1>Login</h1>
        <div className="input">
          <img src={email} className="img" />
          <input
            placeholder="Username/Email id"
            className="stylesheet"
            onChange={handeChange}
          />
        </div>
        <div className="input">
          <img src={pass} className="img" />
          <input
            placeholder="Password"
            type="password"
            className="stylesheet"
            onChange={handeChange}
          />
        </div>
        <button className="button" type="submit">
          Login
        </button>
        <a href="#">Forgot Username/Password?</a>
        <Link to="/register">Or Signup</Link>
      </form>
    </div>
  );
}

export default Login;
