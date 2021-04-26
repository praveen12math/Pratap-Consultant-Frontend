import React, { useEffect, useState } from "react";
import {addHiering} from "../Adddata/adddata"
import M from "materialize-css/dist/js/materialize.min.js";

const Hiering = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
  });

  const [data, setData] = useState([]);

  async function getData() {
    const api = `${process.env.REACT_APP_BACKENDAPI}/getallhiering`;
    const result = await fetch(api);
    const getReasult = await result.json();
    //  console.log(getReasult);
    setData(getReasult);
  }

  useEffect(() => {
    getData();
  }, []);

  const [addrole, setAddrole] = useState()


  const onSubmit = event => {
    event.preventDefault()
    addHiering({role: addrole})
    .then(resData => {
      if(resData.error){
        console.log(resData.error);
      }
      getData()
    })
    .catch(console.log("Error in add role"))
  }

  const onRemove = id => {
    return fetch(`${process.env.REACT_APP_BACKENDAPI}/hiering/${id}` , {
      method: "DELETE",
      headers: {
        Accept: "application/json"
      }
    })
    .then(response => {
      return getData()
    })
    .catch(err => console.log(err))

  }


  return (
    <div className="jobrequest">
      <h4>
        Hiering Open{" "}
        <span data-target="modal1" className="modal-trigger">
          <i className="fas fa-plus orange-text"
          style={{cursor:"pointer"}}
          />
        </span>
      </h4>
      <div className="row">
        {data.map((datas) => (
          <div className="col s12 m3">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span>
                  {" "}
                  <i className="right fas fa-trash orange-text" onClick={ () => {onRemove(datas._id)}}
                    style={{cursor:"pointer"}}
                  ></i>
                </span>
                <span className="card-title">{datas.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>Add Hiering Open</h4>
          <div className="row">
            <div className="input-field col s12">
              <input type="text" className="validate" value={addrole}
            onChange={(e) => setAddrole(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="modal-close waves-effect waves-green btn-flat" onClick={onSubmit}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Hiering;
