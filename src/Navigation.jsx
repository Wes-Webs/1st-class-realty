import React, { useState } from 'react';
import './css/Navigation.css';
import logo from './images/logo-grey-text.png';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className='background-image'>
        {/* Navigation */}
        <nav id="navigation" className="navbar navbar-light navbar-expand-lg mb-0 mb-lg-5">
          <div className="container">
            <a href="/"><img src={logo} alt="Logo" className='image-fluid navbar-logo'/></a>
            <button className="navbar-toggler border-none" type="button" onClick={toggleNav} aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse justify-content-end ${isNavOpen ? 'show bg-black' : ''}`} style={{ transitionDelay: isNavOpen ? '0.3s' : '0s' }} id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a
                  className={`nav-link px-4 ${isNavOpen ? 'py-4 mx-3 border-bottom border-secondary' : ''}`}
                  href="/"
                  smooth={true}
                  duration={0}
                >
                  HOME
                </a>
                <ScrollLink
                  className={`nav-link px-4 pointer ${isNavOpen ? 'py-4 mx-3 border-bottom border-secondary' : ''}`}
                  to="about"
                  smooth={true}
                  duration={0}
                >
                  ABOUT
                </ScrollLink>
                <ScrollLink
                  className={`nav-link px-4 pointer ${isNavOpen ? 'py-4 mx-3 border-bottom border-secondary' : ''}`}
                  to="culture"
                  smooth={true}
                  duration={0}
                >
                  CULTURE
                </ScrollLink>
                <ScrollLink
                  className={`nav-link px-4 pointer ${isNavOpen ? 'py-4 mx-3' : ''}`}
                  to="contact"
                  smooth={true}
                  duration={0}
                >
                  CONTACT
                </ScrollLink>
              </div>
            </div>
          </div>
        </nav>
        {/* Landing Section */}
        <div id="landing" className='container text-center text-white pt-0 pt-lg-5'>
          <div className='row justify-content-center'>
            <div className='col-12 w-75'>
              <h1 className='border-bottom pb-3 mb-3 main-header'><span className='main-header-grey-text'><b>1st Class</b></span> Real Estate</h1>
              <h4 className='sub-header mb-5'>We’ve made it possible for you to grow your business with a team of individuals without breaking the bank!</h4>
              <ScrollLink className='pointer' to="contact" smooth={true} duration={0}><button type="button" className="btn btn-outline-light border-4 rounded-0 button-link py-3 px-5">BECOME AN AGENT</button></ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation;
