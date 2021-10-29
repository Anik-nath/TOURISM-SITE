import React from "react";
import { Card, Col } from "react-bootstrap";

const DestinationCard = (props) => {
  const { name, img } = props.destination;
  return (
    <div>
      <Col>
        <Card>
          <div className="image-container">
            <Card.Img variant="top" src={img} />
            <div class="centered"></div>
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


