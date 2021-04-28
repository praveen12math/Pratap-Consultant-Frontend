import React from "react";
import bgimage from "../img/bg_1.jpg";
import Footer from "../layout/Footer";
import "../css/Services.css";

const Services = () => {
  console.log(React.version);
  return (
    <div className="services">
      <section
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          position: "relative",
          width: "100",
          top: "50%",
          height: "80vh",
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="container white-text">
          <h1 className="main-h">Our Services</h1>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <section>
        <div className="container">
          <div className="row white-text">
            <div className="col l4 s12">
              <div className="card blue-grey darken-1">
                <div className="card-content">
                  <h4 className="flow-text center">
                    <b>HR Consultant</b>
                  </h4>
                </div>
              </div>
            </div>

            <div className="col l4 s12">
              <div className="card blue-grey darken-1">
                <div className="card-content">
                  <h4 className="flow-text center">
                    <b>Project Consultant</b>
                  </h4>
                </div>
              </div>
            </div>

            <div className="col l4 s12">
              <div className="card blue-grey darken-1">
                <div className="card-content">
                  <h4 className="flow-text center">
                    <b>Third Party Payrole</b>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br /> <br />
      <br />
      <section>
        <div className="container white-text flow-text">
          <h3 className="center">Our Recruitment Process</h3>
          <br />

          <div className="subhead1">
            <div className="row">
              <div className="col s1">
                <h3>
                  <b>1</b>
                </h3>
                <div className="line1"></div>
                <br />
              </div>
              <div className="col s11">
                <h5 className="flow-text">
                  Finalize Job Description: Upon Intimation of a new requirement
                  and discussions with the Client’s HR Recruiters/ Manager to
                  finalize the job description for the given role.
                </h5>
              </div>
            </div>

            <div className="row">
              <div className="col s1">
                <h3>
                  <b>2</b>
                </h3>
                <div className="line2"></div>
              </div>
              <div className="col s11">
                <h5 className="flow-text">
                  Source & Shortlist Candidate: Source suitable candidates for
                  the position using the JD and information provided from the HR
                  Recruiters/ Manager. Shortlist candidates based on criteria
                  defined in the JD. Finalize a day for a face to
                  face/telephonic conversation with the Client’s HR Recruiters.
                </h5>
              </div>
            </div>

            <div className="row">
              <div className="col s1">
                <h3>
                  <b>3</b>
                </h3>
                <div className="line1"></div>
                <br />
              </div>
              <div className="col s11">
                <h5 className="flow-text">
                  <br />
                  Obtain Feedback from Client: Obtain feedback from Client’s HR
                  Recruiters/ SPOC. Update Candidate report, Refine list of
                  Shortlisted candidates.
                </h5>
              </div>
            </div>

            <div className="row">
              <div className="col s1">
                <h3>
                  <b>4</b>
                </h3>
              </div>
              <div className="col s11">
                <h5 className="flow-text">
                  Offer Management: Interact And Follow up with the candidate
                  till he/she joins the Client’s.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br /> <br />
      <br />
      <section>
        <div className="container white-text flow-text">
          <div className="row">
            <h3 className="center">Project consultant Process</h3>
            <br />

            <div className="col s1">
              <h3>
                <b>1</b>
              </h3>
              <div className="line1"></div>
              <br />
            </div>
            <div className="col s11">
              <h5 className="flow-text">
                We get projects from many sources people who want their project
                to be made with professionals at an offrdable price.
              </h5>
            </div>
          </div>

          <div className="row">
            <div className="col s1">
              <h3>
                <b>2</b>
              </h3>
              <div className="line1"></div>
              <br />
            </div>
            <div className="col s11">
              <h5 className="flow-text">
                We provide that project to working professionals who are looking
                for some part time work or extra cash.
              </h5>
            </div>
          </div>

          <div className="row">
            <div className="col s1">
              <h3>
                <b>3</b>
              </h3>
              <div className="line1"></div>
              <br />
            </div>
            <div className="col s11">
              <h5 className="flow-text">
                <br />
                We ensure satisfaction of the client with the project and time
                flexibility of the project developer.
              </h5>
            </div>
          </div>

          <div className="row">
            <div className="col s1">
              <h3>
                <b>4</b>
              </h3>
            </div>
            <div className="col s11">
              <h5 className="flow-text">
                At the end its a win win situation the client got professional
                to provide that same quality project that an agency offers and
                the developer got a fair amount of side money.
              </h5>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
