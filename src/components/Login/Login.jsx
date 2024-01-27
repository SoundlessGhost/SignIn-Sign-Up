/* eslint-disable no-unused-vars */
import "./Login.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../Provider/AuthProvider";
const Login = () => {
  const { signIn } = useContext(userContext);

  const loginSubmitHandler = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    // sign In_Function 
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((e) => {
        console.log(e);
      });

  };
  return (
    <div className="loginContainer">
      <div className="loginSubContainer">
        <span className="borderline"></span>
        <form onSubmit={loginSubmitHandler}>
          <h2 className="loginTittle">Login</h2>
          <input placeholder="Your Email" type="email" name="" id="email" />
          <br />
          <br />
          <input
            placeholder="Your Password"
            type="password"
            name=""
            id="password"
          />
          <small className="ForgetPassword">Forget Password</small>
          <br />
          <br />
          <p>
            <small>
              New User? <Link to="/register">Register</Link>
            </small>
          </p>
          <button>Login</button>
          <br />
          <hr />
          <p>
            <small>Login With Social Media</small>
          </p>
        </form>
        <div>
          <p className="success"></p>
          <p className="error"></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
