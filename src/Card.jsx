import React from 'react';

const Card=(props)=>{
    return(
    <>
<div className="col-md-4 col-10 ">
<div className="card">
  <img
    src={props.imgsrc}
    className="card-img-top"
    alt={props.imgsrc}
  />
  <div className="card-body">
    <h5 className="card-title ms-5 ps-5">{props.title}</h5>
    <a href="#!" className="btn s-btn ">check</a>
  </div>
</div>
</div>

    </>
    ); 
};

export default Card;