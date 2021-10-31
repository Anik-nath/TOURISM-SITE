import React from 'react';
import './banner.css';
import banner1 from '../../../images/banner-2.jpg'
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className="banner">
           <img src={banner1} alt="" /> 
           <div className="title">
               <h1 className="display-2">YOUR BEST TRIP</h1>
               <p>Choose your next domestic get-away from more than 6000 local accommodation offerings. Personalize your accommodation and flights to suit your individual needs perfectly.</p>
               <Link to="/about">
                <button className="btn btn-outline-light px-4">About Us</button> 
               </Link>
           </div>
        </div>
    );
};

export default Banner;