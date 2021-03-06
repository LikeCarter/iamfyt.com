import React from 'react';
import CTA from './CTA';
import Team from './Team';
export default class About extends React.Component {
  public render = () => {
    return (
      <div>
        <section className="py-8 py-md-11 border-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 text-center">
                <h1 className="display-2">About Us</h1>
                <p className="lead text-muted mb-7 mb-md-9">
                  We founded FYT with the commitment to give everyone a
                  personalized training experience. We are working out of the Ryerson DMZ's Toronto
                  office. Follow our podcast and <a target="_blank" href="https://www.instagram.com/iamfytapp/" >instagram</a> as we document our journey, lessons
                  learned, and findings along the way!
                </p>
              </div>
            </div>
          </div>
        </section>
        <Team />
        <CTA />
      </div>
    )
  }
}
