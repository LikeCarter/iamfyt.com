import React from 'react';
import BackgroundImage from '../../assets/img/covers/trainer-background.jpg';

export default class CTA extends React.Component {
  public render = () => {
    return (
      /* CTA */
      <section
        data-jarallax=""
        data-speed=".8"
        className="py-12 py-md-14 overlay overlay-black overlay-80"
        style={{backgroundImage: 'none'}}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-1- col-lg-8 text-center">
              <h1 className="text-white">Become a Creator Today!</h1>

              <p className="font-size-lg text-white-80 mb-6 mb-md-8">
                Give your paying customers the interaction they deserve.
              </p>

              <a
                href="https://fytapp.typeform.com/to/ronLJS"
                target="_blank"
                className="btn btn-pill btn-primary lift"
              >
                Get started!
              </a>
            </div>
          </div>
        </div>
        <div
          id="jarallax-container-1"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: -150 }}
        >
          <div style={{ backgroundPosition: '50% 50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: `url(${BackgroundImage})`, top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none' }}></div>
        </div>
      </section>
    )
  }
}
