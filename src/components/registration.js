import React from "react";
import "./registration.css";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import validate from "./validationinfo";
import axios from "axios";

function Registration() {
  const { handleChange, values, handleSumbit, errors } = useForm(validate);
  axios
    .post("http://localhost:4000/app/register", values)
    .then((response) => console.log(response.data));
  return (
    <div className="signupbox">
      <form onSubmit={handleSumbit}>
        <h1>Create an Account</h1>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Username"
          className="holder"
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && <p>{errors.username}</p>}
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter Your Name"
          className="holder"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter Your Email"
          className="holder"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          id="password"
          type="Password"
          name="password"
          placeholder="Password"
          className="holder"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
        <input
          id="address"
          type="text"
          name="address"
          placeholder="Address"
          className="holder"
          value={values.address}
          onChange={handleChange}
        />
        {errors.address && <p>{errors.address}</p>}
        <input
          id="phone"
          type="number"
          name="phone"
          placeholder="Enter Your Mobile Number"
          className="holder"
          value={values.phone}
          onChange={handleChange}
        />
        {errors.phone && <p>{errors.phone}</p>}
        <button className="btn" type="submit">
          Register
        </button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Registration;
