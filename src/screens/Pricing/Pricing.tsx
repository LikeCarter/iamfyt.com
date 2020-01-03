import React from "react";
import FAQ from "./FAQ";

export default class About extends React.Component {
  public render = () => {
    return (
      <div>
        <section className="pt-8 pt-md-11 pb-10 pb-md-15 bg-primary">
          <div className="shape shape-blur-3 svg-shim text-white">
            <svg
              viewBox="0 0 1738 487"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0H1420.92C1420.92 0 2134.35 457.505 1420.92 485.868C707.502 514.231 0 0 0 0Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="0"
                  y1="0"
                  x2="1049.98"
                  y2="912.68"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="currentColor" stop-opacity="0.075" />
                  <stop offset="1" stop-color="currentColor" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 text-center">
                <h1 className="display-2 text-white">Invest in your personal training business. </h1>

                <p className="lead text-white-80 mb-6 mb-md-8">
                If FYT helps you train just one additional client or sames you 30 minutes a week, it will more than pay for itself
                </p>

                {/*
                <form className="d-flex align-items-center justify-content-center mb-7 mb-md-9">
                  <span className="text-white-80">Annual</span>

                  <div className="custom-control custom-switch custom-switch-dark mx-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="billingSwitch"
                      data-toggle="price"
                      data-target=".price"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="billingSwitch"
                    ></label>
                  </div>

                  <span className="text-white-80">Monthly</span>
                </form>
                */}
              </div>
            </div>
          </div>
        </section>

        <div className="position-relative">
          <div className="shape shape-bottom shape-fluid-x svg-shim text-light">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        <section className="mt-n8 mt-md-n14">
          <div className="container">
            <div className="form-row">
              <div className="col-12 col-md-4">
                <div className="card shadow-lg mb-6 mb-md-0">
                  <div className="card-body">
                    <div className="text-center mb-3">
                      <span className="badge badge-pill badge-primary-soft">
                        <span className="h6 text-uppercase">Basic</span>
                      </span>
                    </div>

                    <div className="d-flex justify-content-center">
                      <span className="h2 mb-0 mt-2">$</span>
                      <span
                        className="price display-2 mb-0"
                        data-annual="0"
                        data-monthly="0"
                      >
                        19
                      </span>
                      <span className="h2 align-self-end mb-1">/mo</span>
                    </div>

                    <div className="d-flex">
                      <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                        <i className="fe fe-check"></i>
                      </div>

                      <p>Up to 5 active clients</p>
                    </div>
                    

                    <a
                      href="https://fytapp.typeform.com/to/ronLJS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-block btn-primary-soft"
                    >
                      Start with Basic{" "}
                      <i className="fe fe-arrow-right ml-3"></i>
                    </a>
                    </div>
                  </div>
                </div>
              <div className="col-12 col-md-4">
                <div className="card shadow-lg mb-6 mb-md-0">
                  <div className="card-body">
                    <div className="text-center mb-3">
                      <span className="badge badge-pill badge-primary-soft">
                        <span className="h6 text-uppercase">Standard</span>
                      </span>
                    </div>

                    <div className="d-flex justify-content-center">
                      <span className="h2 mb-0 mt-2">$</span>
                      <span
                        className="price display-2 mb-0"
                        data-annual="29"
                        data-monthly="49"
                      >
                        49
                      </span>
                      <span className="h2 align-self-end mb-1">/mo</span>
                    </div>

                    <div className="d-flex">
                      <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                        <i className="fe fe-check"></i>
                      </div>

                      <p>Up to 20 active clients</p>
                    </div>
                    
                    <a
                      href="https://fytapp.typeform.com/to/ronLJS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-block btn-primary"
                    >
                      Start with Standard{" "}
                      <i className="fe fe-arrow-right ml-3"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card shadow-lg mb-md-0">
                  <div className="card-body">
                    <div className="text-center mb-3">
                      <span className="badge badge-pill badge-primary-soft">
                        <span className="h6 text-uppercase">Premium</span>
                      </span>
                    </div>

                    <div className="d-flex justify-content-center">
                      <span className="h2 mb-0 mt-2">$</span>
                      <span
                        className="price display-2 mb-0"
                        data-annual="49"
                        data-monthly="69"
                      >
                        99
                      </span>
                      <span className="h2 align-self-end mb-1">/mo</span>
                    </div>

                    <div className="d-flex">
                      <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                        <i className="fe fe-check"></i>
                      </div>

                      <p>Up to 50 active clients</p>
                    </div>

                    <a
                      href="https://fytapp.typeform.com/to/ronLJS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-block btn-primary-soft"
                    >
                      Start with Premium{" "}
                      <i className="fe fe-arrow-right ml-3"></i>
                    </a>
                  </div>
                </div>
              </div>
          </div>
          </div>
        </section>
        {/*<FAQ />*/}
      </div>
    );
  };
}
