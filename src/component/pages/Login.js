import React, { useState } from "react";
import image from "../img/hand3.jpg";
import jwt from "jsonwebtoken";
import { Redirect } from "react-router";

const Login = () => {
  const [login, setLogin] = useState();

  if (localStorage.getItem("jwt")) {
    return <Redirect to="/admin" />;
  }

  console.log(login);

  if (login === "imadminveer") {
    const token = jwt.sign({ _id: "123" }, "hello");
    localStorage.setItem("jwt", token);
  } else {
    return (
      <div>
        <img
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
          src={image}
          alt=""
        />

        <div className="">
          <input
            className="white-text"
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
      </div>
    );
  }
};

export default Login;
