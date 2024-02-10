import { useState } from 'react'
import './css/Navigation.css'
import logo from './images/logo-grey-text.png';


function Navigation() {

  return (
    <>
      <div className='background-image'>
        {/* Navigation */}
        <nav id="navigation" class="navbar navbar-expand-lg mb-5">
          <div class="container">
            <a class="navbar-brand" href="#"><img src={logo} alt="Logo" className='image-fluid navbar-logo'/></a>
            <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon bg-white"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link px-4" aria-current="page" href="#">HOME</a>
                <a class="nav-link px-4" href="#">ABOUT</a>
                <a class="nav-link px-4" href="#">CULTURE</a>
                <a class="nav-link px-4" href="#">CONTACT</a>
              </div>
            </div>
          </div>
        </nav>
        {/* Landing Section */}
        <div id="landing" className='container text-center text-white pt-5'>
          <div className='row justify-content-center'>
            <div className='col-12 w-75'>
              <h1 className='border-bottom pb-3 mb-3 main-header'><span className='main-header-grey-text'><b>1st Class</b></span> Real Estate</h1>
              <h4 className='sub-header mb-5'>We’ve made it possible for you to grow your business with a team of individuals without breaking the bank!</h4>
              <button type="button" class="btn btn-outline-light border-4 rounded-0 button-link py-3 px-5">BECOME AN AGENT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation
