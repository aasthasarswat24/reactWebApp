import React from 'react';
import web from "../src/images/img1.png";

const Contact =()=>{
    return(
    <> 
    <div className="my-2">
        <h1 className="text-center">Contact us </h1>
    </div>
    <div className="row w-100">
        <div className="col-10 mx-auto">
        <div className="row">
            <div className="col-lg-6">
            <img src={web} className="img-fluid animated" alt="contact image"/>
            </div>
            <div className="col-lg-5 p-5 ms-5 mt-5">
            
<form>
 
  <div className="form-outline mb-4 ">
    <input type="text" id="form4Example1" className="form-control" />
    <label className="form-label" for="form4Example1">Name</label>
  </div>

  <div className="form-outline mb-4">
    <input type="email" id="form4Example2" className="form-control" />
    <label className="form-label" for="form4Example2">Email address</label>
  </div>

  <div className="form-outline mb-4">
    <textarea className="form-control" id="form4Example3" rows="4"></textarea>
    <label className="form-label" for="form4Example3">Message</label>
  </div>

  <button type="submit" className="btn s-btn btn-block mb-4">Send</button>
</form>
            </div>
        </div>
        </div>
        <div className="col-md-6"></div>
    </div>
    </>
    ); 
};

export default Contact;
 