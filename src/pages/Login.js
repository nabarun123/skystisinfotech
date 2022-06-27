import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Login() {
  const [showSignup, setShowSignup] = useState(false);

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div>
      <div className="bg-primary text-light  px-5 py-2">
        <div className="row">
          <div className="col">
            <h2>EXOMMERCE</h2>
          </div>
        </div>
      </div>

      <div className="container text-center my-5 text-primary">
        <h1>Hello, Welcome to Exommerce</h1>

        {!showSignup ? (
          <div
            style={{ width: 25 + "rem" }}
            className="container bg-light text-center text-dark px-5 py-1"
          >
            <h3>Login</h3>
            <form>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control m-2"
                  placeholder="Username"
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  className="form-control m-2"
                  placeholder="Password"
                />
              </div>
              <Link to="/home">
                <div className="input-group">
                  <input
                    type="submit"
                    className="btn btn-primary form-control m-2 mt-4"
                    value="Login as a user"
                  />
                </div>
              </Link>
              <div className="text-center">
                <p className="text-info" onClick={() => toggleSignup()}>
                  Don't have an account? Signup here!
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div
            style={{ width: 25 + "rem" }}
            className="container bg-light text-center text-dark px-5 py-1"
          >
            <h3>Signup</h3>
            <form>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control m-2"
                  placeholder="Username"
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control m-2"
                  placeholder="Email"
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  className="form-control m-2"
                  placeholder="Password"
                />
              </div>
              <Link to="/home">
                <div className="input-group">
                  <input
                    type="submit"
                    className="btn btn-primary form-control m-2 mt-4"
                    value="Signup as a user"
                  />
                </div>
              </Link>
              <div className="text-center">
                <p className="text-info" onClick={() => toggleSignup()}>
                  Already have an account? Login here!
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
