import React, { useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Aos from 'aos';
import "aos/dist/aos.css";

const OurCard = (props) => {
    const {_id,name,daytime,nighttime,price,img} = props.tour;

    useEffect(()=>{
      Aos.init({duration:1000});
    },[])
  return (
    <div data-aos="zoom-in">
        <Col>
        <Card className="mb-4">
        <Link to={`/booking/${_id}`}>
        <Card.Img style={{height:"200px"}} variant="top" src={img} />
        </Link>
          <Card.Body>
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
          <Card.Footer className="d-flex justify-content-between bg-info text-white">
            <div>
            <small className="">Package $ {price} </small>
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

export default OurCard;
