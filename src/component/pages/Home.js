import React, { useEffect } from "react";
import featuresimg from "../img/feature.png";
import anime from "../img/video6d.mp4";
import Footer from "../layout/Footer";
import Aos from "aos";
import M from "materialize-css/dist/js/materialize.min.js";
import "aos/dist/aos.css";
import "../css/Home.css";
import HieringHome from "./HieringHome";
import TestimonialHome from "./TestimonialHome";
import RequestJobHome from "./RequestJobHome";

const Home = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems, {});
  });

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <video
        autoPlay
        loop
        muted
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
      >
        <source src={anime} type="video/mp4" />
      </video>

      <main className="scroll-container">
        <section className="homeBody1 valign-wrapper">
          <div className="container">
            <h1 data-aos="fade-down" className="white-text center">
              <b> Find your job better and faster</b>
            </h1>
            <p className="white-text center">
              <h6>
                <b>
                  {" "}
                  Find your best job better and faster with Pratap Consultant
                </b>
              </h6>
            </p>
          </div>
        </section>

        <section className="homeBody1 valign-wrapper">
          <div className="container">
            <h1 className="white-text center">
              <b> Find your passion and achieve success</b>
            </h1>
            <p className="white-text center">
              <h6>
                <b>
                  find a job that suits your interests and talents.
                  <br /> A high salary is not the top priority.
                  <br /> Most importantly,You can work according to your heart's
                  desire.
                </b>
              </h6>
            </p>
          </div>
        </section>

        <section className="homeBody1 valign-wrapper">
          <div className="container">
            <h1 className="white-text center">
              <b> Thousands of companys, got what they are looking for</b>
            </h1>
            <p className="white-text center">
              <h6>
                <b>We provide best employes who fits your companys needs</b>
              </h6>
            </p>
          </div>
        </section>

        <section className="row homeBody1">
          <HieringHome />
        </section>

        <section className="row homeBody1 ">
          <div className="col l5 s12">
            <img src={featuresimg} alt="" style={{ width: "100%" }} />
          </div>
          <div className="col l2"></div>
          <div className="col s12 l4">
            <br />
            <br />
            <br />
            <br />
            <h3 className="center-align white-text">
              <b>Over 10,000 top companies join with us</b>
            </h3>
            <p className="center-align white-text">
              <b>
                Posting now includes out of the box integration with major CRM
                &amp; accounting and ERP platforms, as well as an open API that
                allows you to seamlessly integrate with your business systems.
              </b>
            </p>
          </div>
          <div className="col l1"></div>
        </section>

        <section className="homeBody1">
          <RequestJobHome/>
        </section>

        <section className="homeBody1">
          <TestimonialHome />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Home;
