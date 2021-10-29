import React from "react";
import { Link } from "react-router-dom";
import notFound from '../../../images/404-removebg-preview.png';

const NotFound = () => {
  return (
    <div className="container">
      <div className="row py-5 mt-5 text-center">
        <div className="col">
          <h1 className="display-3">OOPS!</h1>
          <img className="w-100" src={notFound} alt="" />
        </div>
        <Link to="/home">
              <button className="btn btn-warning">Go Home</button>
          </Link>
      </div>
    </div>
  );
};

export default NotFound;
