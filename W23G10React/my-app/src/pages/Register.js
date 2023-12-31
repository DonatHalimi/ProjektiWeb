import React, { Fragment } from "react";
import { Link, useLocation } from 'react-router-dom';

function Register() {
	const location = useLocation();

	// Function to check if a given path matches the current location
	const isActive = (path) => location.pathname === path;

	return (
		<Fragment>
<>
<div className="site-logo">
<Link to="/index">
  <img src="assets/img/MainLogo.png" alt="Logo" />
  </Link>
</div>
  <title>Login 04</title>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link rel="stylesheet" href="css/style.css" />
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center mb-5">
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-12 col-lg-10">
          <div className="wrap d-md-flex">
            <div
              className="img"
              style={{ backgroundImage: "url(assets/img/books.jpg)" }}
            ></div>
            <div className="login-wrap p-4 p-md-5">
              <div className="d-flex">
                <div className="w-100">
                  <h3 className="mb-4">Sign Up</h3>
                </div>
                <div className="w-100">
                  <p className="social-media d-flex justify-content-end">
                    <a
                      href="#"
                      className="social-icon d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-facebook" />
                    </a>
                    <a
                      href="#"
                      className="social-icon d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-twitter" />
                    </a>
                  </p>
                </div>
              </div>
              <form action="#" className="signin-form">
                <div className="form-group mb-3">
                  <label className="label" htmlFor="name">
                  FirstName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="FirstName"
                    required=""
                  />
                         </div>
                         <div className="form-group mb-3">
                  <label className="label" htmlFor="name">
                  LastName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="LastName"
                    required=""
                  />
                         </div>
                <div className="form-group mb-3">
                  <label className="label" htmlFor="name">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="label" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="form-control btn btn-primary rounded submit px-3"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="form-group d-md-flex">
                  <div className="w-50 text-left">
                    <label className="checkbox-wrap checkbox-primary mb-0">
                      Remember Me
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </form>
              <p className="text-center">
        Have an account?{' '}
        {/* Use the Link component to navigate to the "/register" page */}
        <Link to="/login">Sign In</Link>
      </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

		</Fragment>
	);
}

export default Register;
