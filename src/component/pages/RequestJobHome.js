import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addRequestJob } from "../Adddata/adddata";

const RequestJob = () => {
  const [addRequest, setAddRequest] = useState({
    name: "",
    email: "",
    phone: "",
    profile: "",
  });

  const { name, email, phone, profile } = addRequest;

  const handleChange = (name) => (event) => {
    setAddRequest({ ...addRequest, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addRequestJob({ name, email, phone, profile })
      .then((data) => {
        if (data.error) {
          return toast("Cannot send", { type: "error" });
        } else {
          setAddRequest({
            ...addRequest,
            name: "",
            email: "",
            phone: "",
            profile: "",
          });
          return toast("Response Send", { type: "success" });
        }
      })
      .catch(console.log("error in send"));
  };

  return (
    <div className="row">
      <ToastContainer position="bottom-right" />
      <form className="col s12">
        <h3 className="center white-text">
          <b>Request for job</b>
        </h3>
        <div className="container">
          <div className="row">
            <div className="input-field col s12 centered">
              <i className="material-icons prefix">person</i>
              <input
                id="icon_prefix"
                type="text"
                className="validate white-text"
                value={name}
                onChange={handleChange("name")}
              />
              <label for="icon_prefix">Full Name</label>
            </div>

            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                type="email"
                className="validate white-text"
                value={email}
                onChange={handleChange("email")}
              />
              <label for="icon_telephone">Email</label>
            </div>

            <div className="input-field col s12">
              <i className="material-icons prefix">phone</i>
              <input
                type="tel"
                className="validate white-text"
                value={phone}
                onChange={handleChange("phone")}
              />
              <label for="icon_telephone">Contact</label>
            </div>

            <div className="input-field col s12">
              <i className="material-icons prefix">work</i>
              <input
                type="text"
                className="validate white-text"
                value={profile}
                onChange={handleChange("profile")}
              />
              <label for="icon_telephone">Profile</label>
            </div>
          </div>
          <div className="center-align">
            <button className="waves-effect waves-light btn" onClick={onSubmit}>
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RequestJob;
