import React from "react";
import { Card, Col } from "react-bootstrap";

const DestinationCard = (props) => {
  const { name, img } = props.destination;
  return (
    <div>
      <Col>
        <Card>
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


