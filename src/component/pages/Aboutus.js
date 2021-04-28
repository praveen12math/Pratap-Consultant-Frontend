import React, { useEffect } from "react";
import about1 from "../img/pc1.png";
import Footer from "../layout/Footer";
import Aos from "aos";
import about2 from "../img/1b.png";
import $ from "jquery";
import "../css/Aboutus.css";
import "aos/dist/aos.css";

const Aboutus = () => {
  $(window).scroll(function () {
    $(".image1").animate({
      left: "",
    });

    $(".image2").animate({
      right: "",
    });
  });

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="aboutus">
      <div className="row">
        <div className="container">
          <div className="col l6">
            <img
              className="image1"
              src={about1}
              alt=""
              style={{ height: "100vh" }}
            />
          </div>

          <div className="col l6 hide-on-med-and-down">
            <img
              className="image2"
              src={about2}
              alt=""
              style={{ height: "100vh" }}
            />
          </div>
        </div>
      </div>
      <div className="hide-on-med-and-down">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br />
        <br />
        <br /> <br />
        <br /> <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="row">
        <div className="container">
          <div className="col l3"></div>
          <div className="col l7" data-aos="zoom-out">
            <h5 className="white-text text1 flow-text">
              Pratap Consultant is an innovative recruitment agency based on
              crowdstaffing, where we connect candidates and employers to make
              full use of their respective potential. We are the growing
              recruitment firm,founded in 2020. Pratap Consultant was
              established in 2020 in response to the demand for staff in the
              BPO/BFSI/IT/other non IT industry. We through the internal
              resources of our HR department and traditional recruitment
              methods, we, in Pratap Consultant try to meet the human resource
              demands of companies
            </h5>
          </div>
          <div className="col l2"></div>
        </div>
      </div>
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="row">
        <div className="container">
          <div className="col l3"></div>
          <div className="col l7" data-aos="zoom-in">
            <h2 className="white-text">Our Goal</h2>
            <h5 className="white-text text1 flow-text">
              <blockquote className="bg-green">
                Our main goal is to furnish our clients with eligible manpower
                talent they need and when they need it. Our employment agency
                has always believed the philosophy of quality and our motto is
                to make the Customers delightful with "Total Satisfaction"
                through personal, quality and professional service. As a
                professionally managed recruitment agency we focus on the
                growing needs of companies. We provide highly customized and
                personalized Human Resource Consultancy to our clients and
                candidates as well as try to build a courteous as well as
                professional relationship with all of them.
              </blockquote>
            </h5>
          </div>
          <div className="col l2"></div>
        </div>
      </div>
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <div className="row">
        <div className="container">
          <div className="col l3"></div>
          <div className="col l7" data-aos="zoom-in">
            <h5 className="white-text flow-text">
              1. We can fill Headcount requirements internally with our Staff.
            </h5>

            <br />

            <h5 className="white-text flow-text">
              2. We can fill Headcount requirements by sourcing external
              candidates.
            </h5>
          </div>
        </div>
      </div>
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Aboutus;
