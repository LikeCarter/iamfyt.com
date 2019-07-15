import React from 'react';
export default class Home extends React.Component {
  public render = () => {
    return (
      <section className="pt-6 pt-md-8">
        <div className="container pb-6 pb-md-8 border-bottom">
          <div className="row align-items-center">
            <div className="col-12 col-md">
              <h3 className="font-weight-bold mb-1">Get the app now!</h3>

              <p className="text-muted mb-6 mb-md-0">
                Work out with the best trainer for you.
              </p>
            </div>

            <div className="col-auto">
              <a
                href="https://apps.apple.com/app/fyt-1-home-fitness-app/id1468924774"
                target="_blank" rel="noopener noreferrer"
                className="text-reset d-inline-block mr-1"
              >
                <img
                  src={require("../../assets/img/buttons/button-app.png")}
                  className="img-fluid"
                  alt="..."
                  style={{ maxWidth: '155px' }}
                />
              </a>

              {/* <a href="#!" className="text-reset d-inline-block">
                <img
                  src={require("../../assets/img/buttons/button-play.png")}
                  className="img-fluid"
                  alt="..."
                  style={{ maxWidth: '155px' }}
                />
              </a> */}
            </div>
          </div>
        </div>
      </section>
    )
  }
}
