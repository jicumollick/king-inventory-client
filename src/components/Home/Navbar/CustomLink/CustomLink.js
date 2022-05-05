import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./CUstomLink.css";
const CustomLink = ({ children, to }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          textDecoration: "none",
          padding: "50px 10px",
          color: match ? "orangeRed" : "#fff",
        }}
        to={to}
      >
        {children}
      </Link>
      {match && " (active)"}
    </div>
  );
};

export default CustomLink;
