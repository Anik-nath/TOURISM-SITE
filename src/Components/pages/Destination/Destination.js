import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import DestinationCard from './DestinationCard';

const Destination = () => {
    const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/destinations`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);
    return (
        <div>
     <div className="container-fluid ">
           <div className="row pt-5 text-center cover">
               <div className="col mt-5 text-white pt-5">
                   <h2>Destinatioins</h2>
                   <p>Choose Your Best Destination </p>
               </div>
           </div>
      </div>
      {destinations.length === 0 ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Container className="py-5">
          <Row sm={2} md={3} xs={1} lg={3} className="g-4">
            {destinations.map((destination) => (
              <DestinationCard key={destination._id} destination={destination}></DestinationCard>
            ))}
          </Row>
        </Container>
      )}
    </div>
    );
};

export default Destination;