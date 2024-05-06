import React, { useState, useEffect } from 'react';
import './css/Stats.css';
import logo from './images/logo-grey.png';

function Stats() {
  const [currentStat, setCurrentStat] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prevStat) => (prevStat % 2) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="stats">
        <div className='container text-center py-5 overflow-hidden'>
            <h1 className='main-header mt-3'>WHY YOU SHOULD CHOOSE 1st CLASS</h1>
            <div className='d-flex justify-content-center mb-2'>
              <hr className='hr-custom-r' />
            </div>
            <h4 className='mb-5'>REAL ESTATE YOU CAN TRUST</h4>
            <div className='row align-items-center'>
              <div className='col-12 col-sm-12 col-md-4 col-lg-4 rotating-text'>
                {currentStat === 1 && (
                  <div className='stat animate__animated animate__backInLeft'>
                    <h5 className='mb-3'>COME FOR THE MONEY, STAY FOR THE CULTURE</h5>
                    <h1 className='mb-3'>81%</h1>
                    <div className='mb-3'>AGENT GROWTH YTD NATIONWIDE</div>
                  </div>
                )}
                {currentStat === 2 && (
                  <div className='stat animate__animated animate__backInLeft'>
                    <h5 className='mb-3'>DISRUPTING THE REAL ESTATE <br/>INDUSTRY</h5>
                    <h1 className='mb-3'>1250%</h1>
                    <div className='mb-3'>FRANCHISE GROWTH FROM 2020 NATIONWIDE</div>
                  </div>
                )}
              </div>
              <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                <img src={logo} alt="Logo" className='w-50 w-md-75 w-lg-75 w-xl-75'/>
              </div>
              <div className='col-12 col-sm-12 col-md-4 col-lg-4 rotating-text'>
                {currentStat === 1 && (
                  <div className='stat animate__animated animate__backInLeft'>
                    <h5 className='mb-3'>LEADERS IN THE INDUSTRY</h5>
                    <h1 className='mb-3'>$1 BILLION +</h1>
                    <div className='mb-3'>REAL ESTATE SOLD YTD</div>
                  </div>
                )}
                {currentStat === 2 && (
                  <div className='stat animate__animated animate__backInLeft'>
                    <h5 className='mb-3'>OUR 1ST CLASS VISION</h5>
                    <h1 className='mb-3'>4000</h1>
                    <div className='mb-3'>LOCATIONS BY 2030</div>
                  </div>
                )}
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Stats;