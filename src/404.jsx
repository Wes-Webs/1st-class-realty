import React from "react";
import { useState } from 'react'
import mainLogo from './images/logo-grey.png';
import './css/Privacy.css'
import { Link } from "react-router-dom";

function Error() {

  return (
    <>
       <section id="error" className='d-flex flex-column justify-content-center align-items-center text-center bg-light py-5'>
            <img src={mainLogo} alt="Image of Real Estate Agents Planning with Clients" className='img-fluid mb-5 w-25'/>
            <h1 className="mb-3">404 Error</h1>
            <h4>Oh no! Looks like you're in the wrong place</h4>
            <div><Link className="text-secondary" to="/">Return to home page</Link></div>
        </section>
    </>
  )
}

export default Error