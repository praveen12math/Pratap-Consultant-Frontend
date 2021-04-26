import React from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

const Header = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
     M.Sidenav.init(elems, {});
  });


  return (    <>
      <div className="navbar-fixed">
        <nav className="black ">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              <img src="./img/pc1.png" alt="" style={{ width: "70%" }} />
            </Link>
            <Link data-target="slide-out" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view">
            <Link to="/">
              <img src="./img/pc1.png" alt=""/>
            </Link>
            <div>
              <span className="white-black name">John Doe</span>
            </div>
            <div>
              <span className="white-black email">john@pratap.com</span>
            </div>
          </div>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutus">About us</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
