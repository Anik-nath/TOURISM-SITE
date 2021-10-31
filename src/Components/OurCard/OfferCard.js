import React, { useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Aos from 'aos';
import "aos/dist/aos.css";

const OfferCard = (props) => {
  const { _id, name, daytime, nighttime, price, img } = props.tour;

  useEffect(()=>{
    Aos.init({duration:1000});
  },[])

  return (
    <div data-aos="zoom-in">
      <Col>
        <Card className="shadow mb-4">
            <div className="image-container">
              <Card.Img variant="top" src={img} />
              <div className="centered"></div>
            </div>
          <Card.Body className="text-center">
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <div className="text-center">
            <Link to={`/booking/${_id}`}>
              <button className="btn btn-outline-info">Book Now</button>
            </Link>
            </div>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between bg-info">
            <div>
              <small className="text-white h6">
                Package: $<strike className="text-danger">6000 </strike>
               {price}
              </small>
            </div>
            <div>
              <small className="text-white">
                {daytime}D / {nighttime}N{" "}
              </small>
            </div>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};

export default OfferCard;
