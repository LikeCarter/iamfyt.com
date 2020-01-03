import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends React.Component {
  public render = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        {/* <!-- Brand --> */}
        <NavLink className="navbar-brand" to="/">
          <img
            src={require('../assets/img/fyt-brand.svg')}
            className="navbar-brand-img"
            alt="..."
          />
        </NavLink>

        {/* <!-- Toggler --> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Collapse --> */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          {/* <!-- Toggler --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fe fe-x"></i>
          </button>

          {/* <!-- Navigation --> */}
          <ul className="navbar-nav ml-auto">

            <li className="nav-item">
              <NavLink className="nav-link" id="navbarPages" to="/pricing">
                Pricing
              </NavLink>
            </li>
            
            {/*
            <li className="nav-item">
            <a
                className="nav-link"
                id="navbarPages"
                href="https://open.spotify.com/show/3VCduqlJuPVeraPmcG2dCT"
                target="_blank" rel="noopener noreferrer"
              >
                The Community
              </a>
            </li> */}
            <li className="nav-item">
              <a
                className="nav-link"
                id="navbarPages"
                href="https://open.spotify.com/show/3VCduqlJuPVeraPmcG2dCT"
                target="_blank" rel="noopener noreferrer"
              >
                Our Podcast
              </a>
            </li>
          </ul>

          {/* <!-- Button --> */}
          <a
            className="navbar-btn btn btn-sm btn-primary lift ml-auto drift-open-chat"
            href="#!"
            target="_blank" rel="noopener noreferrer"
          >
            Contact
          </a>
        </div>
      </nav>
    )
  }
}
