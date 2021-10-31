import React, { useEffect } from "react";
import Banner from "../../Header/banner/Banner";
import service1 from "../../../../src/images/service1.png"
import service2 from "../../../../src/images/service2.png"
import service3 from "../../../../src/images/service3.png"
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
                  src={service1}
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
                  src={service2}
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
                  src={service3}
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
