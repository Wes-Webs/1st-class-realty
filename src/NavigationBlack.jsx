import React, { useState } from 'react';
import './css/Navigation.css';
import logo from './images/logo-grey-text.png';
import { Link } from 'react-router-dom';

function NavigationBlack() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
        {/* Navigation */}
        <nav id="navigation" className="navbar navbar-expand-lg bg-black mb-0">
            <div className="container">
            <Link to="/"><img src={logo} alt="Logo" className='image-fluid navbar-logo'/></Link>
            <button className="navbar-toggler border-none" type="button" onClick={toggleNav} aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse justify-content-end ${isNavOpen ? 'show' : ''}`} id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <Link
                    className="nav-link pr-5 text-right"
                    activeClass="active"
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    HOME
                </Link>
                {/* <Link
                    className="nav-link px-4"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    ABOUT
                </Link>
                <Link
                    className="nav-link px-4"
                    activeClass="active"
                    to="culture"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    CULTURE
                </Link>
                <Link
                    className="nav-link px-4"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    CONTACT
                </Link> */}
                </div>
            </div>
            </div>
        </nav>
    </>
  )
}

export default NavigationBlack;
