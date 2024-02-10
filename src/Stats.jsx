import { useState } from 'react'
import './css/Stats.css'
import logo from './images/logo-grey.png';


function Stats() {

  return (
    <>
      <div id="stats">
        <div className='container text-center py-5'>
            <h1 className='main-header mt-3'>WHY YOU SHOULD CHOOSE 1st CLASS</h1>
            <div className='d-flex justify-content-center mb-2'>
              <hr className='hr-custom-r' />
            </div>
            <h4 className='mb-5'>REAL ESTATE YOU CAN TRUST</h4>
            <div className='row align-items-center'>
              <div className='col-12 col-sm-12 col-md-4 col-lg-4 rotating-text'>
                <div className='stat-1'>
                  <h5 className='mb-3'>WE SELL HOMES FOR MORE MONEY</h5>
                  <h1 className='mb-3'>99%</h1>
                  <div className='mb-3'>SALE TO LIST PRICE RATIO</div>
                </div>
                {/* <div className='stat-2'>
                  <h5>WE SELL HOMES FOR MORE MONEY</h5>
                  <h1>97%</h1>
                  <div>SALE TO LIST PRICE RATIO</div>
                </div>
                <div className='stat-3'>
                  <h5>WE SELL HOMES FOR MORE MONEY</h5>
                  <h1>98%</h1>
                  <div>SALE TO LIST PRICE RATIO</div>
                </div> */}
              </div>
              <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                <img src={logo} alt="Logo" className='image-fluid w-75'/>
              </div>
              <div className='col-12 col-sm-12 col-md-4 col-lg-4 rotating-text'>
                <div className='stat-1'>
                  <h5 className='mb-3'>WE CREATE JOBS IN OUR COMMUNITY</h5>
                  <h1 className='mb-3'>290%</h1>
                  <div className='mb-3'>GROWTH IN STAFF</div>
                </div>
                {/* <div className='stat-2'>
                  <h5>WE CREATE JOBS IN OUR COMMUNITY</h5>
                  <h1>290%</h1>
                  <div>GROWTH IN STAFF</div>
                </div>
                <div className='stat-3'>
                  <h5>WE CREATE JOBS IN OUR COMMUNITY</h5>
                  <h1>290%</h1>
                  <div>GROWTH IN STAFF</div>
                </div> */}
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Stats