import React, { useState } from "react";
import { sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import "./Login.css";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin/SocialLogin";
import { async } from "@firebase/util";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [user, loading, error] = useAuthState(auth);

  let errorMessage;
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
  const [signInWithEmailAndPassword, user2, loading2, error2] =
    useSignInWithEmailAndPassword(auth);

  if (loading2) {
    return (
      <div className="d-flex justify-content-center align-items-center m-5 p-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  // Login & Registration form handler
  const handleSubmit = async (e) => {
    // e.preventDefault();
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
      await createUserWithEmailAndPassword(email, password);
      if (signUpError) {
        alert("Error in sign Up");
        return;
      } else {
        alert("Registration Successful");
      }

      console.log("register form");
    } else {
      //login

      await signInWithEmailAndPassword(email, password);

      const { data } = await axios.post(
        "https://evening-badlands-51648.herokuapp.com/login",
        {
          email,
        }
      );

      localStorage.setItem("accessToken", data.accessToken);
    }

    if (!error2) {
      toast("Email or Password dont matched, try again");
      errorMessage = (
        <p className="text-danger">Error: email or password didn't match</p>
      );
    } else {
      toast("Login Successfull");

      // navigate("/");
    }

    e.target.reset();
  };

  // password reset

  const handlePasswordReset = () => {
    const email = window.prompt("what is your email? ");

    sendPasswordResetEmail(auth, email).then(() => {
      toast("Email sended, thanks");
      console.log("email sent for reset password");
    });
  };

  // email verification

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("email verification sended");
    });
  };

  if (signUpUser) {
    verifyEmail();
  }
  return (
    <div>
      <ToastContainer autoClose={8000} />
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
                  <div>{errorMessage}</div>

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
                      <button
                        className="btn btn-link"
                        onClick={handlePasswordReset}
                      >
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

                  {registered ? (
                    <button
                      className="btn btn-link"
                      onClick={() => setRegistered(false)}
                    >
                      Login here
                    </button>
                  ) : (
                    <button
                      className="btn btn-link"
                      onClick={() => setRegistered(true)}
                    >
                      Register here
                    </button>
                  )}
                  {/* <button
                    className="btn btn-link"
                    onClick={() => setRegistered(!registered)}
                  >
                    {" "}
                    {registered ? "Login here" : "Register here"}
                  </button> */}
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
