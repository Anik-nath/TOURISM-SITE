import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container-fluid ">
        <div className="row pt-5 text-center cover">
          <div className="col mt-5 text-white pt-5">
            <h2>Contact us</h2>
            <p>Your Best Trip Book Now</p>
          </div>
        </div>
      </div>
      {/* contact field */}
      <div className="container">
        <div className="row py-5">
          <div className="col">
            <form className="w-50 mx-auto shadow p-3">
                <h3>Send Your Message</h3>
              <div class="form-outline my-4">
                <label class="form-label" for="form4Example1">
                  Name
                </label>
                <input type="text" id="form4Example1" class="form-control" />
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="form4Example2">
                  Email address
                </label>
                <input type="email" id="form4Example2" class="form-control" />
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="form4Example3">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="form4Example3"
                  rows="4"
                ></textarea>
              </div>

              <div class="form-check d-flex justify-content-center mb-4">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form4Example4"
                  checked
                />
                <label class="form-check-label" for="form4Example4">
                  Send me a copy of this message
                </label>
              </div>

              <button type="submit" class="btn btn-primary w-100 mb-4">
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
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Contact;
