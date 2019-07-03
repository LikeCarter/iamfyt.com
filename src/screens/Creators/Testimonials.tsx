import React from 'react';
export default class Team extends React.Component {
  public render = () => {
    return (
      <section className="py-8 py-md-11 border-bottom">
        <div className="container">
          <div className="row align-items-stretch">
            <div className="col-12 col-md-5">
              <blockquote className="blockquote text-center">
                {/* <div
                  className="img-fluid mb-5 mb-md-7 mx-auto svg-shim"
                  style={{ maxWidth: '120px', color: '#FF5A5F' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 228.54 46.66"
                  >
                    <title>Development_Logo-Black</title>
                    <polygon points="55.02 39.89 53.66 35.7 52.3 39.89 47.91 39.89 51.47 42.47 50.11 46.66 53.66 44.07 57.22 46.66 55.86 42.47 59.42 39.89 55.02 39.89" />
                    <polygon points="50.85 13.4 59.75 5.52 53.53 0 38.6 13.22 38.6 24.22 50.85 13.4" />
                    <polygon points="59.75 23.4 53.53 17.88 38.6 31.11 38.6 42.1 50.85 31.29 59.75 23.4" />
                    <polygon points="60.47 24.04 54.24 29.56 68.65 42.28 68.65 31.29 60.47 24.04" />
                    <polygon points="54.24 11.68 68.65 24.39 68.65 13.4 60.47 6.16 54.24 11.68" />
                    <path d="M8.47,27.94H21.84v9.55H8.47Zm0-17.68H21.84v9.55H8.47ZM24.39,45.67l5.91-5.91v-12l-4.38-3.92L30.31,20V8L24.39,2.07H0v43.6Z" />
                    <path d="M98.45,20.89H85.55V10.26h12.9Zm8.47,1.7V8l-6-5.91H77.08v43.6h8.47V29.07h7.62l5.4,16.6h8.53l-5.91-17.28Z" />
                    <path d="M136.53,20.89h-12.9V10.26h12.9Zm8.47,1.7V8l-6-5.91H115.16v43.6h8.47V29.07h7.62l5.4,16.6h8.53l-5.91-17.28Z" />
                    <polygon points="162.83 45.67 171.3 45.67 171.3 28.38 184.78 2.07 184.77 2.07 184.77 2.07 175.62 2.07 167.01 18.95 158.51 2.07 149.41 2.07 162.83 28.5 162.83 45.67" />
                    <polygon points="222.58 45.67 228.54 39.76 228.54 27.2 223.71 22.02 207.17 18.21 207.17 10.26 220.07 10.26 220.07 15.71 228.54 15.71 228.54 7.98 222.58 2.07 204.67 2.07 198.7 7.98 198.7 20.55 203.65 25.83 220.07 29.53 220.07 37.48 207.17 37.48 207.17 32.03 198.7 32.03 198.7 39.76 204.67 45.67 222.58 45.67" />
                    <polygon points="196.89 2.07 190.21 2.07 185.31 11.81 191.22 11.81 196.89 2.07" />
                  </svg>
                </div> */}
                <p className="mb-5 mb-md-7">
                  "To me, FYT is the future of the digital health & wellness.
                  It's seamless for me to create and share my expertise with my
                  fans and followers while building a stable income. My
                  celebrity clients love it as well. It's so easy for them when
                  traveling!"
                </p>
                <footer className="blockquote-footer mb-8 mb-md-0">
                  <div className="avatar mr-3">
                    <img
                      src={require('../../assets/img/avatars/avatar-2.jpg')}
                      className="avatar-img rounded-circle"
                      alt="..."
                    />
                  </div>{' '}
                  <span className="h6 text-uppercase">Bill Callan</span>
                </footer>
              </blockquote>
            </div>
            <div className="col-12 col-md-1 border-right my-n8 my-md-n11 d-none d-md-block"></div>
            <div className="col-12 col-md-5 offset-md-1">
              <blockquote className="blockquote text-center">
                {/* <div
                  className="img-fluid mb-5 mb-md-7 mx-auto svg-shim"
                  style={{ maxWidth: '120px', color: '#FF5A5F' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 228.54 46.66"
                  >
                    <title>Development_Logo-Black</title>
                    <polygon points="55.02 39.89 53.66 35.7 52.3 39.89 47.91 39.89 51.47 42.47 50.11 46.66 53.66 44.07 57.22 46.66 55.86 42.47 59.42 39.89 55.02 39.89" />
                    <polygon points="50.85 13.4 59.75 5.52 53.53 0 38.6 13.22 38.6 24.22 50.85 13.4" />
                    <polygon points="59.75 23.4 53.53 17.88 38.6 31.11 38.6 42.1 50.85 31.29 59.75 23.4" />
                    <polygon points="60.47 24.04 54.24 29.56 68.65 42.28 68.65 31.29 60.47 24.04" />
                    <polygon points="54.24 11.68 68.65 24.39 68.65 13.4 60.47 6.16 54.24 11.68" />
                    <path d="M8.47,27.94H21.84v9.55H8.47Zm0-17.68H21.84v9.55H8.47ZM24.39,45.67l5.91-5.91v-12l-4.38-3.92L30.31,20V8L24.39,2.07H0v43.6Z" />
                    <path d="M98.45,20.89H85.55V10.26h12.9Zm8.47,1.7V8l-6-5.91H77.08v43.6h8.47V29.07h7.62l5.4,16.6h8.53l-5.91-17.28Z" />
                    <path d="M136.53,20.89h-12.9V10.26h12.9Zm8.47,1.7V8l-6-5.91H115.16v43.6h8.47V29.07h7.62l5.4,16.6h8.53l-5.91-17.28Z" />
                    <polygon points="162.83 45.67 171.3 45.67 171.3 28.38 184.78 2.07 184.77 2.07 184.77 2.07 175.62 2.07 167.01 18.95 158.51 2.07 149.41 2.07 162.83 28.5 162.83 45.67" />
                    <polygon points="222.58 45.67 228.54 39.76 228.54 27.2 223.71 22.02 207.17 18.21 207.17 10.26 220.07 10.26 220.07 15.71 228.54 15.71 228.54 7.98 222.58 2.07 204.67 2.07 198.7 7.98 198.7 20.55 203.65 25.83 220.07 29.53 220.07 37.48 207.17 37.48 207.17 32.03 198.7 32.03 198.7 39.76 204.67 45.67 222.58 45.67" />
                    <polygon points="196.89 2.07 190.21 2.07 185.31 11.81 191.22 11.81 196.89 2.07" />
                  </svg>
                </div> */}
                <p className="mb-5 mb-md-7">
                  "I was surprised to see how easy FYT made it for me to share
                  my teaching with today's digital consumer. I have customers
                  all over the world through a simple to use business in my
                  pocket!"
                </p>
                <footer className="blockquote-footer mb-0">
                  <div className="avatar mr-3">
                    <img
                      src={require('../../assets/img/avatars/avatar-1.jpg')}
                      className="avatar-img rounded-circle"
                      alt="..."
                    />
                  </div>{' '}
                  <span className="h6 text-uppercase">Christopher Brown</span>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
