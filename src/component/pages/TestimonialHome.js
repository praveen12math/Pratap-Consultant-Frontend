import React,{useState, useEffect} from "react";
import { Carousel } from 'react-responsive-carousel'
import "../css/Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"


const TestimonialHome = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const api = `${process.env.REACT_APP_BACKENDAPI}/getalltestimonial`;
      const result = await fetch(api);
      const getReasult = await result.json();
      //  console.log(getReasult);
      setData(getReasult);
    }
    getData();
  }, []);




  return (
    <div>
    <h3 className="center white-text"><b>Testimonial</b></h3>
     <Carousel autoPlay>
     {data.map((datas) => (

      <div>
                    <img src={`http://localhost:8000/api/${datas.photo}`}/>
                    <p className="legend white-text">{datas.description}</p>
                </div> 

     ))}
                             
            </Carousel>

    </div>
  );
};

export default TestimonialHome;

















{/* <div
className="carousel center-align"
style={{ overflow: "visible", top: "-60px" }}
>
<div className="carousel-item">
  <div className="card" style={{ width: "270px" }}>
    <div className="card-image">
      <img className="center-align" src={user1img} alt="" />
    </div>
    <div className="card-content white-dark">
      <p>
        I am a very simple card. I am good at containing small bits of
        information. I am convenient because I require little markup to
        use effectively.
      </p>
    </div>
  </div>
</div>

<div className="carousel-item">
  <div className="card" style={{ width: "270px" }}>
    <div className="card-image">
      <img className="center-align" src={user2img} alt="" />
    </div>
    <div className="card-content white-dark">
      <p>
        I am a very simple card. I am good at containing small bits of
        information. I am convenient because I require little markup to
        use effectively.
      </p>
    </div>
  </div>
</div>

<div className="carousel-item">
  <div className="card" style={{ width: "270px" }}>
    <div className="card-image">
      <img className="center-align" src={user3img} alt="" />
    </div>
    <div className="card-content white-dark">
      <p>
        I am a very simple card. I am good at containing small bits of
        information. I am convenient because I require little markup to
        use effectively.
      </p>
    </div>
  </div>
</div>

<div className="carousel-item">
  <div className="card" style={{ width: "270px" }}>
    <div className="card-image">
      <img className="center-align" src={user4img} alt="" />
    </div>
    <div className="card-content white-dark">
      <p>
        I am a very simple card. I am good at containing small bits of
        information. I am convenient because I require little markup to
        use effectively.
      </p>
    </div>
  </div>
</div>


</div> */}
