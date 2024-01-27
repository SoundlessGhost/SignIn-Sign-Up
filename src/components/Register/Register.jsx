/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import toast from "react-hot-toast";
import { userContext } from "../Provider/AuthProvider";

const Register = () => {
  const {user,createUser}= useContext(userContext)
  const registerSubmitHandler = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // Some validation
    if (!name) {
      toast("please fill name");
      return;
    } else if (!email) {
      toast("enter you email");
      return;
    } else if (!password) {
      toast("enter you password");
      return;
    } else if (password.length < 6) {
      toast("password must be 6 character");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      toast("add one uppercase");
      return;
    }
    // create user_Function
    createUser(email,password)
    .then((result)=>{
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    .catch((err)=>{
      console.log(err);
    })
    
  };
  return (
    <div className="registerContainer">
      <div className="registerSubContainer">
        <form onSubmit={registerSubmitHandler}>
          <h2 className="registerTittle">Register</h2>
          <input
            placeholder="Your Name"
            type="text"
            name="name"
            id=""
            required
          />
          <br />
          <br />
          <input
            placeholder="Your Email"
            type="email"
            name="email"
            id="email"
            required
          />
          <br />
          <br />
          <input
            placeholder="Your Password"
            type="password"
            name="password"
            id="password"
            required
          />
          <br />
          <br />
          <p>
            <small>
              Already Have An Account? <Link to="/login">Login</Link>
            </small>
          </p>
          <button>Register</button>
          <br />
        </form>
        <div>
          <p className="success"></p>
          <p className="error"></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
