import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HieringHome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const api = `${process.env.REACT_APP_BACKENDAPI}/getallhiering`;
      const result = await fetch(api);
      const getReasult = await result.json();
      setData(getReasult);
    }
    getData();
  }, []);

  return (
    <div className="">
      <h3 className="center">
        <b className="white-text">Currently Hiering</b>
      </h3>
      <div className="container">
        {data.map((datas) => (
          <div className="col s12 m6">
            <div className="card blue-grey darken-1 hoverable hieringcard">
              <div className="card-action center">
                <span className="card-title">
                  <Link> {datas.role}</Link>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HieringHome;
