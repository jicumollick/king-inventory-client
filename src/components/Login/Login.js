import React, { useState } from "react";
import "./Login.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  // getting user
  const [registered, setRegistered] = useState(false);
  // for sign up
  const [
    createUserWithEmailAndPassword,
    signUpUser,
    signUpLoading,
    signUpError,
  ] = useCreateUserWithEmailAndPassword(auth);

  // for login
  const [signInWithEmailAndPassword, signInUser, signInLoading, signInError] =
    useSignInWithEmailAndPassword(auth);

  // Login & Registration form handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    // checking register or login
    if (registered) {
      // register
      const confirmPassword = e.target.confirmPassword.value;
      if (password !== confirmPassword) {
        alert("pasword didn't match ");
        return;
      }
      createUserWithEmailAndPassword(email, password);
      if (signUpError) {
        alert("Error in sign Up");
      } else {
        alert("Registration Successful");
      }

      console.log("register form");
    } else {
      //login

      signInWithEmailAndPassword(email, password);

      if (signInError) {
        alert("Login Error Occured");
      } else {
        alert("Login successful");
        navigate("/");
      }
      console.log("login form");
    }
    e.target.reset();
  };
  return (
    <div>
      <div id="login ">
        <h3 className="text-center primary-color pt-5">
          {" "}
          {registered ? "Registration" : "Login "} form
        </h3>
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form
                  id="login-form"
                  className="form"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <div className="form-group">
                    <label htmlFor="email" className=" primary-color">
                      Email:
                    </label>{" "}
                    <br />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="type your email "
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className=" primary-color">
                      Password:
                    </label>{" "}
                    <br />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder="type your password"
                      required
                    />
                  </div>

                  {registered ? (
                    <div className="form-group">
                      <label
                        htmlFor="confirmPassword"
                        className="primary-color"
                      >
                        Confirm Password:
                      </label>{" "}
                      <br />
                      <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        className="form-control"
                        placeholder="type your password again"
                      />
                    </div>
                  ) : (
                    ""
                  )}

                  <br />
                  <input
                    type="submit"
                    name="submit"
                    className="btn btn-info btn-md"
                    value={registered ? "Register" : "Login"}
                  />
                </form>{" "}
                <div className="form-group">
                  <label htmlFor="remember-me" className="">
                    <span> {registered ? "" : "Forgotten password ?"}</span>
                    <span>
                      <button className="btn btn-link">
                        {" "}
                        {registered ? "" : "Reset Password"}
                      </button>
                    </span>
                     
                  </label>
                </div>
                <div id="register-link" className="text-right">
                  <span>
                    {registered
                      ? "Already have an account ? "
                      : "New to king inventory ?"}
                  </span>
                  <button
                    className="btn btn-link"
                    onClick={() => setRegistered(!registered)}
                  >
                    {" "}
                    {registered ? "Login here" : "Register here"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
