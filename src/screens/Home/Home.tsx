import React from 'react';
import CTA from './CTA';
import Sponsors from './Sponsors';
import VProp from './VProp';

export default class Home extends React.Component {
  public render = () => {
    return (
      <div>
        <section className="pt-6 pt-md-8">
          <div className="container">
            <div className="row align-items-center justify-content-center justify-content-md-between">
              <div className="col-10 col-sm-8 col-md-6 order-md-2">
                <div className="device-combo device-combo-iphonex-iphonex mb-6 mb-md-0">
                  <div className="device device-iphonex" data-aos="fade-left">
                    <img
                      src={require('../../assets/img/screenshots/mobile/fyt-home-screen.png')}
                      className="device-screen"
                      alt="..."
                    />
                    <img
                      src={require('../../assets/img/devices/iphonex.svg')}
                      className="img-fluid"
                      alt="..."
                    />
                  </div>

                  <div
                    className="device device-iphonex"
                    data-aos="fade-left"
                    data-aos-delay="150"
                  >
                    <img
                      src={require('../../assets/img/screenshots/mobile/fyt-workout-screen.png')}
                      className="device-screen"
                      alt="..."
                    />
                    <img
                      src={require('../../assets/img/devices/iphonex.svg')}
                      className="img-fluid"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-5" data-aos="fade-right">
                <h1 className="font-weight-bold">
                  Workout with the best trainer for
                  <span className="text-primary"> you.</span> <br />
                </h1>

                <p className="font-size-lg text-muted mb-6">
                  Stream instructor-led classes anytime, anywhere on the FYT
                  app.
                </p>
                <div>
              <a
                href="https://apps.apple.com/app/fyt-1-home-fitness-app/id1468924774"
                target="_blank" rel="noopener noreferrer"
                className="text-reset d-inline-block mr-2 mb-2"
              >
                <img
                  src={require("../../assets/img/buttons/button-app.png")}
                  className="img-fluid"
                  alt="..."
                  style={{ maxWidth: '155px' }}
                />
              </a>

              <a href="https://play.google.com/store/apps/details?id=com.iamfyt.fyt" target="_blank" rel="noopener noreferrer" className="text-reset d-inline-block">
                <img
                  src={require("../../assets/img/buttons/button-play.png")}
                  className="img-fluid"
                  alt="..."
                  style={{ maxWidth: '155px' }}
                />
              </a>
            </div>

              </div>
            </div>
          </div>
        </section>
        <VProp />
        <Sponsors />
        <CTA />
      </div>
    )
  }
}
