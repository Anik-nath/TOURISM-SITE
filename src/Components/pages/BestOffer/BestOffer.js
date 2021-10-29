import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OfferCard from '../../OurCard/OfferCard';

const BestOffer = () => {
    const [tours, setTours] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/tours`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);
    return (
        <div className="py-5">
            <div className="text-center py-4">
                <h6>Explore Best Offer</h6>
                <h1 className="py-2 display-4 text-uppercase"><span className="text-warning">Special</span> Offer</h1>
                <p>Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit,<br /> blandit torquent, odit placeat. Adipiscing Nostrum magnis maxime curae placeat.</p>
            </div>
         <Container>
              <Row xs={1} lg={3} md={2} className="g-5 mb-4">
              {tours.slice(0,4).map((tour) => (
               <OfferCard key={tour._id} tour={tour}></OfferCard>
              ))}
              </Row>
         </Container>
         <div className="py-3 text-center">
            <Link to="/tours">
            <button className="btn btn-warning OurBtn text-white">All Package</button>
            </Link>
         </div>
        
      </div>
    );
};

export default BestOffer;