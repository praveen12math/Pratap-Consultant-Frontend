import React, { useEffect, useState } from "react";

const Jobrequest = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const api = `${process.env.REACT_APP_BACKENDAPI}/getallrequest`;
    const result = await fetch(api);
    const getReasult = await result.json();
    setData(getReasult);
  }

  const onRemove = (id) => {
    return fetch(`${process.env.REACT_APP_BACKENDAPI}/requestJob/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        return getData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="jobrequest">
      <h4>Job Request</h4>
      <div className="row">
        {data.map((datas) => (
          <div className="col s12 m3">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span>
                  <i
                    className="right fas fa-trash orange-text"
                    onClick={() => {
                      onRemove(datas._id);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </span>
                <span className="card-title">{datas.name}</span>
                Email : <span className="orange-text">{datas.email} </span>
                <br />
                Phone : {datas.phone} <br />
                Profile : {datas.profile} <br />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobrequest;
