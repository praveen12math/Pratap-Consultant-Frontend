import React, { useEffect, useState } from "react";

const Connect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const api = `${process.env.REACT_APP_BACKENDAPI}/getallconnect`;
    const result = await fetch(api);
    const getReasult = await result.json();
    setData(getReasult);
  }

  const onRemove = (id) => {
    return fetch(`${process.env.REACT_APP_BACKENDAPI}/connect/${id}`, {
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
      <h4>Connect Us</h4>
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
                {datas.email}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connect;
