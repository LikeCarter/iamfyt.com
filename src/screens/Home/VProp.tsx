import React from 'react';
export default class Home extends React.Component {
  public render = () => {
    return (
      <section className="pt-8 pt-md-11 py-md-11">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-md-6 mb-5 mb-md-0">
              <div className="row">
                <div className="col-6 mr-n5">
                  <img
                    src={require('../../assets/img/photos/trainer-large-1.jpg')}
                    alt="..."
                    className="img-fluid mb-4 rounded"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  />

                  <img
                    src={require('../../assets/img/photos/trainer-small-1.jpg')}
                    alt="..."
                    className="img-fluid rounded"
                    data-aos="fade-right"
                    data-aos-delay="150"
                  />
                </div>
                <div className="col-6 mt-8">
                  <img
                    src={require('../../assets/img/photos/trainer-small-2.jpg')}
                    alt="..."
                    className="img-fluid mb-4 rounded"
                    data-aos="fade-right"
                  />

                  <img
                    src={require('../../assets/img/photos/trainer-large-2.jpg')}
                    alt="..."
                    className="img-fluid rounded"
                    data-aos="fade-right"
                    data-aos-delay="50"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5" data-aos="fade-left">
              <h2 className="font-weight-bold">
                Stream instructor-led studio classes in-home.
              </h2>

              <p className="font-size-lg text-muted mb-4">
                Unlimited access to workouts and programs, created and guided by
                world-class trainers.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
