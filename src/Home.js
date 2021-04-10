import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/img2.png";
import Common from "./Common";

const Home=()=>{
    return(
    <>
        <Common name='Grow your business with us ' 
        imgsrc={web} 
        visit="/Service"
        btname="Get Started"
        />
        
    </>
    ); 
};

export default Home;
 