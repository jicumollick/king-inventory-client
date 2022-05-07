import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [registered, setRegistered] = useState(false);
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
                <form id="login-form" className="form" action="" method="">
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
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className=" primary-color">
                      Password:
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder="type your password"
                    />
                  </div>

                  {registered ? (
                    <div className="form-group">
                      <label htmlFor="password" className=" primary-color">
                        Confirm Password:
                      </label>{" "}
                      <br />
                      <input
                        type="text"
                        name="password"
                        id="password"
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
      </div>
    </div>
  );
};

export default Login;
