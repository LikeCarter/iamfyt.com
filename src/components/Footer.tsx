import React from "react";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
  public render = () => {
    return (
      <footer className="py-8 py-md-11 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">

              {/* <!-- Text --> */}
              <p className="text-gray-700 mb-2">contact@iamfyt.com</p>

              {/* <!-- Social --> */}
              <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
                <li className="list-inline-item list-social-item mr-3">
                  <a
                    href="https://www.instagram.com/iamfytapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <img
                      src={require("../assets/img/icons/social/instagram.svg")}
                      className="list-social-icon"
                      alt="..."
                    />
                  </a>
                </li>
                <li className="list-inline-item list-social-item mr-3">
                  <a
                    href="https://www.facebook.com/iamfyt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <img
                      src={require("../assets/img/icons/social/facebook.svg")}
                      className="list-social-icon"
                      alt="..."
                    />
                  </a>
                </li>
                <li className="list-inline-item list-social-item mr-3">
                  <a
                    href="https://www.linkedin.com/company/fytmovement/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <img
                      src={require("../assets/img/icons/social/linkedin.svg")}
                      className="list-social-icon"
                      alt="..."
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              {/* <!-- Heading --> */}
              <h6 className="font-weight-bold text-uppercase text-gray-700">
                Menu
              </h6>

              {/* <!-- List --> */}
              <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                <li className="mb-3">
                  <Link to="/" className="text-reset">
                    Home
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/" className="text-reset">
                    For Users
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/creators" className="text-reset">
                    For Creators
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/about" className="text-reset">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              {/* <!-- Heading --> */}
              <h6 className="font-weight-bold text-uppercase text-gray-700">
                Media
              </h6>

              {/* <!-- List --> */}
              <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                <li className="mb-3">
                  <a
                    className="text-reset"
                    href="https://medium.com/@fytapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="https://open.spotify.com/show/3VCduqlJuPVeraPmcG2dCT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-reset"
                  >
                    Podcasts
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0">
              {/* <!-- Heading --> */}
              <h6 className="font-weight-bold text-uppercase text-gray-700">
                Community
              </h6>

              {/* <!-- List --> */}
              <ul className="list-unstyled text-muted mb-0">
                <li className="mb-3">
                  <Link to="/about" className="text-reset">
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              {/* <!-- Heading --> */}
              <h6 className="font-weight-bold text-uppercase text-gray-700">
                Legal
              </h6>

              {/* <!-- List --> */}
              <ul className="list-unstyled text-muted mb-0">
                <li className="mb-3">
                  <Link to="/privacy-policy" className="text-reset">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/terms" className="text-reset">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- / .row --> */}
        </div>
        {/* <!-- / .container --> */}
      </footer>
    );
  };
}
