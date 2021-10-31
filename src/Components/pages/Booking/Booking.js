import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";

const Booking = () => {
  const { bookingId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const url = `https://glacial-lake-74710.herokuapp.com/tours/${bookingId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  // handle booking form
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    axios.post('https://glacial-lake-74710.herokuapp.com/booked',data)
    .then(res=>{
      if(res.data.insertedId){
        alert('Succesfuly Booking');
        reset();
    }
    })
  };

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
          {/* booking form */}

          <div className="col-lg-6 col-12 col-md-12">
            <form onSubmit={handleSubmit(onSubmit)} className="shadow p-3" action="">
              <h3>Book Now</h3>
              <input value={bookingId} {...register("bookingId")} readOnly/>
              <div className="form-outline my-4">
                <input type="text" className="form-control" {...register("fullname", { required: true })} />
              </div>
              <div className="form-outline my-4">
                <input type="email" className="form-control" {...register("email", { required: true })}/>
              </div>
              <div className="form-outline my-4">
                <input type="text" className="form-control" {...register("phone", { required: true })}/>
              </div>
              <div className="form-outline my-4">
                <select className="form-control"  {...register("ticket", { required: true })}>
                  <option>Choose Type</option>
                  <option value="Plane">Travel With Plane</option>
                  <option value="Bus">Travel With Bus</option>
                </select>
              </div>
              <div className="form-outline my-4">
                <input type="date" className="form-control"  {...register("date", { required: true })}/>
              </div>
              <div className="form-outline mb-4">
                <textarea
                  className="form-control"
                  {...register("Message")}
                  rows="4"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-4">
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
