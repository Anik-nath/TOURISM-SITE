import React, { useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import Aos from 'aos';
import "aos/dist/aos.css";


const DestinationCard = (props) => {
  const { name, img } = props.destination;
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])

  return (
    <div>
      <Col>
        <Card data-aos="flip-left">
          <div className="image-container h-100">
            <Card.Img variant="top" src={img} />
            <div className="centered"></div>
          </div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default DestinationCard;


