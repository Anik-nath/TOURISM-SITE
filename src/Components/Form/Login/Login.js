import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
library.add(fab);

const Login = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <div>
      <div className="container">
        <div style={{ height: "100vh" }} className="row py-5 mt-5">
          <div className="col col-lg-6 mx-auto">
            <form className="p-3 shadow mt-5">
              <h3>Please Login</h3>
              <div className="form-outline my-4">
                <label className="form-label" htmlFor="form2Example1">
                  Email address
                </label>
                <input type="email" id="form2Example1" className="form-control" />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example2">
                  Password
                </label>
                <input
                  type="password"
                  id="form2Example2"
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-4">
                Log in
              </button>
              <div className="text-center pb-3">
                <p>
                  Not a member?{" "}
                  <Link to="/registration">
                   Register
                  </Link>
                </p>
                <p>or sign up with:</p>
                <button type="button" className="btn mx-1 text-primary shadow">
                  <FontAwesomeIcon icon={["fab", "facebook-f"]} size="lg" />
                </button>

                <button
                  onClick={signInWithGoogle}
                  type="button"
                  className="btn mx-1 text-primary shadow"
                >
                  <FontAwesomeIcon icon={["fab", "google"]} size="lg" />
                </button>

                <button type="button" className="btn mx-1 text-primary shadow">
                  <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
                </button>

                <button type="button" className="btn mx-1 shadow">
                  <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

/* 

 
*/
