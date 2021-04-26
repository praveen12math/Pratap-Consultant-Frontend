import React from "react";
import { Redirect, useHistory } from "react-router";
import "../css/admin.css";
import Connect from "./Connectus";
import Hiering from "./Hiering";
import Jobrequest from "./Jobrequest";
import Testimonial from "./Testimonial";

const Admin = () => {


  const history = useHistory()


  if(!localStorage.getItem("jwt")){
    return(
      <Redirect to="/" />
    )
  }


  function signout(){
    localStorage.removeItem("jwt");
      history.push("/")
  }

  return (
    <div className="admin">
      <h3 className="m-5 center heading">
        <u>Welcome Admin</u>
        <i onClick={signout} class="fas fa-sign-out-alt right red-text"></i>
      </h3>
      <Hiering />
      <Testimonial />

      <Jobrequest />
      <Connect />
    </div>
  );
};

export default Admin;
