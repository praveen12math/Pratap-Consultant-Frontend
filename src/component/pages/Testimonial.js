import React, { useEffect, useState } from "react";


const Testimonial = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const api = `${process.env.REACT_APP_BACKENDAPI}/getalltestimonial`;
    const result = await fetch(api);
    const getReasult = await result.json();
    //  console.log(getReasult);
    setData(getReasult);
  }


  const [fileData, setFileData] = useState();
  const [description, setDescription] = useState();

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };


  const onSubmitHandler = (e) => {
    e.preventDefault();

    // Handle File Data from the state Before Sending
    const data = new FormData();

    data.append("image", fileData);
    data.append("description", description);

    fetch(`${process.env.REACT_APP_BACKENDAPI}addtestimonial`, {
      method: "POST",
      body: data,
    })
      .then((result) => {
        return getData()
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const onRemove = id => {
    return fetch(`${process.env.REACT_APP_BACKENDAPI}/testimonial/${id}` , {
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
      <h4>Testimonial {" "}
      <span href="" data-target="testimonialModal" className="modal-trigger">
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
                  <i className="right fas fa-trash orange-text" onClick={() => {onRemove(datas._id)}} 
                    style={{cursor:"pointer"}}
                  />
                </span><br/>
                <div className="card-image">
    <img src={`${process.env.REACT_APP_BACKENDAPI}${datas.photo}`} alt="" style={{height:"200px"}}/>

                </div>
                {datas.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div id="testimonialModal" className="modal">
        <div className="modal-content">
          <h4>Add Testimonial</h4>
          <div className="row">
            <div className="input-field col s12">
            <form onSubmit={onSubmitHandler}>
            <input type="file" onChange={fileChangeHandler}/>
               <input type="text" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
        <button type="submit" className="btn">Add</button>

            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
