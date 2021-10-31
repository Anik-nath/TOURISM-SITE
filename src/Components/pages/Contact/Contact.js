import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

const Contact = () => {
  return (
    <div>
      <div className="container-fluid ">
        <div className="row pt-5 text-center cover">
          <div className="col mt-5 text-white pt-5">
            <h2>Contact us</h2>
            <p>For Any Help Contact Now</p>
          </div>
        </div>
      </div>
      {/* contact field */}
      <div className="container">
        <div className="row py-5">
          <div className="col col-lg-6 mx-auto">
            <form className="w-100 shadow p-3">
              <h3>Send Your Message</h3>
              <div className="form-outline my-4">
                <label className="form-label" for="form4Example1">
                  Name
                </label>
                <input
                  type="text"
                  id="form4Example1"
                  className="form-control"
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" for="form4Example2">
                  Email address
                </label>
                <input
                  type="email"
                  id="form4Example2"
                  className="form-control"
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" for="form4Example3">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="form4Example3"
                  rows="4"
                ></textarea>
              </div>

              <div className="form-check d-flex justify-content-center mb-4">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form4Example4"
                  checked
                />
                <label className="form-check-label" for="form4Example4">
                  Send me a copy of this message
                </label>
              </div>

              <button type="submit" className="btn btn-primary w-100 mb-4">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* contact no. */}
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-4 col-md-4 col-12">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h3>Address</h3>
                <h5 className="text-muted">971-949 8th Ave 949 New York, NY</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h3>Email and Phone</h3>
                <h5 className="text-muted">(123) 456 7890</h5>
                <h5 className="text-muted">Travel@gmail.com</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h3>Social Media</h3>
                <div className="row">
                  <div className="col-lg-3 col-2">
                    <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
                  </div>
                  <div className="col-lg-3 col-2">
                    <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />
                  </div>
                  <div className="col-lg-3 col-2">
                    <FontAwesomeIcon icon={["fab", "facebook-f"]} size="lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
