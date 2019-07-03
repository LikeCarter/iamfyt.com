import React from 'react';
export default class Team extends React.Component {
  public render = () => {
    return (
      /* Team */
      <section className="pt-8 pt-md-11 py-md-11 bg-gradient-light border-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h1 className="mb-7 mb-md-9">Team</h1>
            </div>
          </div>

          <div className="row">
            <div
              className="col-12 col-md-4 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="card shadow-light-lg mb-6 mb-md-0 lift lift-lg">
                <img
                  src={require('../../assets/img/photos/edgar-brown-headshot.jpg')}
                  alt="..."
                  className="card-img-top"
                />

                <div className="position-relative">
                  <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                    <svg
                      viewBox="0 0 2880 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div className="card-body position-relative">
                  <h3>Edgar Brown</h3>

                  <p className="text-muted">CEO, Co-Founder</p>

                  <a
                    href="https://www.linkedin.com/in/edgar-brown-90a925120/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <img
                      src={require('../../assets/img/icons/social/linkedin.svg')}
                      className="list-social-icon"
                      alt="..."
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-4 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card shadow-light-lg mb-6 mb-md-0 lift lift-lg">
                <img
                  src={require('../../assets/img/photos/carter-sprigings-headshot.jpg')}
                  alt="..."
                  className="card-img-top"
                />

                <div className="position-relative">
                  <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                    <svg
                      viewBox="0 0 2880 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div className="card-body position-relative">
                  <h3>Carter Sprigings</h3>

                  <p className="text-muted">CTO, Co-Founder</p>

                  <a
                    href="https://www.linkedin.com/in/carter-sprigings"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <img
                      src={require('../../assets/img/icons/social/linkedin.svg')}
                      className="list-social-icon"
                      alt="..."
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-4 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card shadow-light-lg lift lift-lg">
                <img
                  src={require('../../assets/img/photos/milena-fagandini-headshot.jpg')}
                  alt="..."
                  className="card-img-top"
                />

                <div className="position-relative">
                  <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                    <svg
                      viewBox="0 0 2880 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div className="card-body position-relative">
                  <h3>Milena Fagandini</h3>

                  <p className="text-muted">CPO, Co-Founder</p>

                  <a
                    href="https://www.linkedin.com/in/milena-fagandini-36b7a392/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <img
                      src={require('../../assets/img/icons/social/linkedin.svg')}
                      className="list-social-icon"
                      alt="..."
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
