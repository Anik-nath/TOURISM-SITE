import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Aos from 'aos';
import "aos/dist/aos.css";

const About = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);

  return (
    <div>
      <div className="container-fluid ">
        <div className="row pt-5 text-center cover">
          <div className="col mt-5 text-white pt-5">
            <h2>About us</h2>
            <p>Your Best Trip Book Now</p>
            <Link className="text-white" to="/home">
              Home
            </Link>{" "}
            /
            <Link className="text-white" to="/about">
              About
            </Link>
          </div>
        </div>
      </div>
      {/* about part */}
      <Container className="py-5">
        <Row>
          <Col xs={12} lg={6} md={12} sm={12}>
            <h1 className="display-4 text-uppercase">About Us</h1>
            <p>
              Top Tour Operators and Travel Agency. We offering in total 793
              tours and holidays throughout the world. Combined we have received
              1532 customer reviews and an average rating of 5 out of 5 stars.{" "}
              <br />
              Travel has helped us to understand the meaning of life and it has
              helped us become better people. Each time we travel, we see the
              world with new eyes.
            </p><br />
            <div className="row">
                <div className="col-lg-6 col-6 col-md-12">
                  <li className="h5">Safety Travel System</li>
                </div>
                <div className="col-lg-6 col-6 col-md-12">
                  <li className="h5">Budget-Friendly Tour</li>
                </div>
                <div className="col-lg-6 col-6 col-md-12"><li className="h5">Expert Trip Planning</li></div>
                <div className="col-lg-6 col-6 col-md-12"><li className="h5">Fast Communication</li></div>
                <div className="col-lg-6 col-6 col-md-12"><li className="h5">Right Solution and Guide</li></div>
                <div className="col-lg-6 col-6 col-md-12"><li className="h5">24/7 Customer Support</li></div>
            </div>
          </Col>
          <Col data-aos="zoom-in" className="p-5" xs={12} lg={6} md={12} sm={12}>
            <img className="w-100" src="https://images.unsplash.com/photo-1604363937376-bde1acf2a658?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
