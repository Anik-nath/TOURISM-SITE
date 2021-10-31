import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Banner from "../../Header/banner/Banner";
import BestOffer from "../BestOffer/BestOffer";
import Why from "../Why/Why";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="container-fluid p-5 shadow">
        <div className="row text-center">
          <div data-aos="fade-right" className="col-lg-4 col-md-4 col-12 mb-2">
            <div className="border rounded text-secondary">
              <div className="card-body">
                <img
                  src="http://www.nicdarkthemes.com/themes/love-travel/html/demo/img/service/service1.png"
                  alt=""
                />
                <h4 className="">ADVENTURE</h4>
                <p>Enjoy Best adventure</p>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className="col-lg-4 col-md-4 col-12 mb-2">
            <div className="border rounded text-secondary">
              <div className="card-body">
                <img
                  src="http://www.nicdarkthemes.com/themes/love-travel/html/demo/img/service/service2.png"
                  alt=""
                />
                <h4 className="">RELAX</h4>
                <p>Have a realx</p>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="col-lg-4 col-md-4 col-12">
            <div className="border rounded text-secondary">
              <div className="card-body">
                <img
                  src="http://www.nicdarkthemes.com/themes/love-travel/html/demo/img/service/service3.png"
                  alt=""
                />
                <h4 className="">HONEYMOON</h4>
                <p>Emjoy your honeymoon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <BestOffer></BestOffer>
      </div>
      <Why></Why>
    </div>
  );
};

export default Home;
