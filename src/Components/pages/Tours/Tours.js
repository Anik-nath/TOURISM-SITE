import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import OurCard from "../../OurCard/OurCard";


const Tours = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const url = `https://glacial-lake-74710.herokuapp.com/tours`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);
  return (
    <div>
     <div className="container-fluid ">
           <div className="row pt-5 text-center cover">
               <div className="col mt-5 text-white pt-5">
                   <h2>Tours</h2>
                   <p>Your Best Trip Book Now</p>
               </div>
           </div>
      </div>
      {tours.length === 0 ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Container className="py-5">
          <Row sm={2} md={3} xs={1} lg={3}>
            {tours.map((tour) => (
              <OurCard key={tour._id} tour={tour}></OurCard>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Tours;
