import React from "react";

import CustomLink from "./CustomLink/CustomLink";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container">
        <CustomLink className="navbar-brand " to={"/"}>
          <span className="logo">King Inventory</span>
        </CustomLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <CustomLink
                className="nav-link active"
                aria-current="page"
                to={"/manageItems"}
              >
                Manage Items
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink className="nav-link" to={"/addItems"}>
                Add Item
              </CustomLink>
            </li>

            <li className="nav-item">
              <CustomLink className="nav-link " to={"/myItems"}>
                My Items
              </CustomLink>
            </li>
          </ul>
          <ul className="d-flex navbar-nav">
            <li className="nav-item">
              <CustomLink className="nav-link" to={"/blogs"}>
                Blogs
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink className="nav-link" to={"/about"}>
                About
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink className="nav-link" to={"login"}>
                Login
              </CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
