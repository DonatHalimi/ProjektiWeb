import React, { Fragment, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:7132/api/User/GetList");

      if (response == null) {
        throw new Error(`Network response was not ok. Status: ${response.status}`);
      }

      const data = await response.json();
      const filteredUser = data.find(user => user.email == email);

      if (password == filteredUser.password) {
        navigate("/index");
      }
      else {
        window.location.reload();
        navigate("/login");
      }
      console.log("Data received from the server:", data);

      // Nese serveri kthen ndonje error, e bejme log ketu
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  // JSX per render te faqes
  return (
    <Fragment>
      <>
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
              <div className="col-md-12 col-lg-10" style={{ marginTop: "70px" }}>
                <div className="wrap d-md-flex">
                  <div
                    className="img"
                    style={{ backgroundImage: "url(assets/img/books.jpg)" }}
                  ></div>
                  <div className="login-wrap p-4 p-md-5">
                    <div className="d-flex">
                      <div className="w-100">
                        <h3 className="mb-4">Sign In</h3>
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
                    <form action="#" className="signin-form" onSubmit={handleRegisterSubmit}>
                      <div className="form-group mb-3">
                        <label className="label" htmlFor="name">
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          required=""
                          onChange={(e) => setEmail(e.target.value)}
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
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="form-control btn btn-primary rounded submit px-3"
                        >
                          Sign In
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
                        <div className="w-50 text-md-right">
                          <a href="#">Forgot Password</a>
                        </div>
                      </div>
                    </form>
                    <p className="text-center">
                      Not a member?{' '}
                      <Link to="/register">Sign Up</Link>
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

export default Login;
