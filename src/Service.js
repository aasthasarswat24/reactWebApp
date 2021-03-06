import React from 'react';
import Sdata from "./Sdata";
import Card from "./Card";
 
const Service=()=>{
    return(
    <>
    <div className="my-3">
        <h1 className="text-center">Our Services</h1>
    </div>
    <div className="container-fluid mb-5">
    <div className="row">
        
       {
           Sdata.map((val,ind)=>{
               return<Card key={ind}
               imgsrc={val.imgsrc} title={val.title}/>
           })
       }
     
    </div>
    </div>
    </>
    ); 
};

export default Service;
 