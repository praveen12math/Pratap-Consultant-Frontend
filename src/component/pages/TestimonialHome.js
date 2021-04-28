import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "../css/Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TestimonialHome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const api = `${process.env.REACT_APP_BACKENDAPI}/getalltestimonial`;
      const result = await fetch(api);
      const getReasult = await result.json();
      setData(getReasult);
    }
    getData();
  }, []);

  return (
    <div>
      <h3 className="center white-text">
        <b>Testimonial</b>
      </h3>
      <Carousel autoPlay>
        {data.map((datas) => (
          <div>
            <img
              src={`${process.env.REACT_APP_BACKENDAPI}${datas.photo}`}
              alt=""
            />
            <p className="legend white-text">{datas.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialHome;
