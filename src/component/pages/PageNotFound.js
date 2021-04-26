import React from "react";
import { Link } from "react-router-dom";
import "../css/PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="text-center" style={{ backgroundColor: "#ffffff" }}>
      <div className="row">
        <div className="col l12 center">
          <img className="pagenotfoundImage" src="404.gif" alt="" />
        </div>
      </div>
      <h4 className="center">The page you are looking for not available!</h4>
      <h5 className="center"> Look like you're lost</h5>
      <h2 className="center">
        <Link className="btn" to="/">
          Go to Home
        </Link>
      </h2>
    </div>
  );
};

export default PageNotFound;
