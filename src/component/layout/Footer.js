import React,{useState} from "react";
import {addEmail} from "../Adddata/adddata"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


const Footer = () => {

  const [sendEmail, setSendEmail] = useState()


  const onSubmit = event => {
    event.preventDefault()
    addEmail({email: sendEmail})
    .then(resData => {
      if(resData.error){
       return console.log(resData.error);
      }
      return toast("Email send", { type: "success" })
    })
  }


  return (
    <div className="footer">
    <footer class="page-footer"
    style={{backgroundColor:"#263238"}}
    >
      {/* <hr/> */}
    <ToastContainer position="bottom-right" />
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h3 class="white-text">Get Started now</h3>
          </div>
          <div class="input-field col l6 s10 white-text">
            <input id="first_name" type="text" class="white-text"
            value={sendEmail}
            onChange={(e) => setSendEmail(e.target.value)}
             />
            <label className="white-text" for="first_name">
              Youremail@domain.com
            </label>
            <button
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={onSubmit}
            >
              Send
              <i class="material-icons right">send</i>
            </button>
          </div>
        </div>
      </div>
      <div className="row footericon">
        <div className="col l5 s2"></div>

        <div className="col">
          <i class="fab fa-twitter hoverable" />
        </div>

        <div className="col">
          <i class="fab fa-facebook-f hoverable" />
        </div>

        <div className="col">
          <i class="fab fa-instagram hoverable" />
        </div>

        <div className="col l4 s2"></div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2021 Website is made with &#10084; by DevMonkes
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
