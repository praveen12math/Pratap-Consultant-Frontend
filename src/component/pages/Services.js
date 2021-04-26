import React from "react";
import anime from "../img/video.mp4";

const Services = () => {
  console.log(React.version);
  return (
    <div className="">
      <video autoPlay loop muted>
        <source src={anime} type="video/mp4" />
      </video>
    </div>
  );
};

export default Services;
