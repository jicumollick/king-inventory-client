import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="" style={{ backgroundColor: " #FFF", height: "100vh" }}>
      <div
        style={{
          backgroundColor: "lightBlue",
          width: "60%",
          margin: "0 auto",
          height: "75vh",
          lineHeight: "200%",
        }}
        className="d-flex flex-column justify-content-center"
      >
        <h2>404</h2>
        <h2>Opps ! Page Not Found</h2>
        <h6 className="py-3">
          Sorry , the page you are looking for isn't exist in our application.
        </h6>
        <a href="/" className="btn btn-primary d-inline-block">
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
