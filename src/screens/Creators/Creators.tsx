import React from 'react';
import BackgroundImage from '../../assets/img/covers/trainer-background.jpg';
import CTA from './CTA';
import Testimonials from './Testimonials';
import VProp from './VProp';

export default class About extends React.Component {
  public render = () => {
    return (
      <div>
        <section
          data-jarallax
          data-speed=".8"
          className="pt-10 pt-md-14 pb-12 pb-md-15 overlay overlay-primary overlay-80"
          style={{ backgroundPosition: '50% 50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: `url(${BackgroundImage})`, top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none' }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 text-center">
                <h1 className="display-1 font-weight-bold text-white mb-6 mt-n3">
                  Reach a global audience in minutes
                </h1>
              </div>
            </div>
          </div>

          <div className="position-absolute right-0 bottom-0 left-0">
            <div className="position-relative shape shape-bottom shape-fluid-x svg-shim text-white">
              <svg
                viewBox="0 0 2880 250"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M720 125L2160 0H2880V250H0V125H720Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </section>
        <VProp />
        <Testimonials />
        <CTA />
      </div>
    )
  }
}
