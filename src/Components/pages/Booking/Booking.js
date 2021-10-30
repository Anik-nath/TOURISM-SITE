import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";

const Booking = () => {
  const { bookingId } = useParams();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    const url = `https://glacial-lake-74710.herokuapp.com/tours/${bookingId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  return (
    <div className="py-5">
      <div className="container-fluid ">
        <div className="row pt-5 text-center cover">
          <div className="col mt-5 text-white pt-5">
            <h2>Booking Now</h2>
            <p>Enjoy Your Package</p>
          </div>
        </div>
      </div>
      <Container>
        <div className="row py-5">
          <div className="col-lg-6 col-12 col-md-12 mb-5">
            <h2>{details.name}</h2>
            <img className="w-100 my-3" src={`${details.img}`} alt="" />
            <h2>Overview</h2>
            <p>{details.description}</p>
            <h3>Tour</h3>
            <p>
              {details.daytime} days {details.nighttime} nights
            </p>
            <h3>Package: $ {details.price}</h3>
          </div>
          <div className="col-lg-6 col-12 col-md-12">
            <form className="shadow p-3" action="">
              <h3>Book Now</h3>
              <div class="form-outline my-4">
                <label class="form-label" for="form2Example0">
                  Your Fullname
                </label>
                <input type="text" id="form2Example0" class="form-control" />
              </div>
              <div class="form-outline my-4">
                <label class="form-label" for="form2Example1">
                  Email address
                </label>
                <input type="email" id="form2Example1" class="form-control" />
              </div>
              <div class="form-outline my-4">
                <label class="form-label" for="form2Example2">
                  Phone Number
                </label>
                <input type="text" id="form2Example2" class="form-control" />
              </div>
              <div class="form-outline my-4">
                <label class="form-label" for="form2Example3">Ticket Types:</label>
                <select class="form-control" name="carlist" form="carform">
                  <option selected value="">Choose Type</option>
                  <option value="saab">Travel With Plane</option>
                  <option value="opel">Travel With Bus</option>
                </select>
              </div>
              <div class="form-outline my-4">
                <label class="form-label" for="form2Example2">
                  Date
                </label>
                <input type="date" className="form-control" />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form4Example3">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="form4Example3"
                  rows="4"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-100 mb-4">
                BOOK NOW
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Booking;
