import React from 'react';
export default class CTA extends React.Component {
  public render = () => {
    return (
      /* CTA */
      <section className="pt-6 pt-md-8">
      <div className="container pb-6 pb-md-8 border-bottom">
        <div className="row align-items-center">
          <div className="col-12 col-md">
            
            <h3 className="font-weight-bold mb-1">
              Interested in joining our growing team?
            </h3>

            
            <p className="font-size-lg text-muted mb-5 mb-md-0">
              Shoot us an email! We're always on the lookup for talent.
            </p>
          </div>
          <div className="col-12 col-md-auto">
            
            <a href="mailto:edgar@iamfyt.com" className="btn btn-primary lift">
              Apply now
            </a>
          </div>
        </div>
        
      </div>
      
    </section>
    )
  }
}
