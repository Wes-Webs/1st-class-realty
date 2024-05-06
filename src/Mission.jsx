import { useState } from 'react'
import './css/Mission.css'
import PlanImage from './images/real-estate-culture-image-1.jpg';


function Mission() {

  return (
    <>
      <div className='main-background-image'></div>
        <div id="culture">
          <div className='container py-5 text-white'>
            <div className='text-center mb-5'>
              <h1 className='main-header mt-3'>MISSION STATEMENT</h1>
              <div className='d-flex justify-content-center mb-2'>
                <hr className='hr-custom-r' />
              </div>
              <h4 className='mb-4 sub-header'>A CULTURE OF EXCELLENCE</h4>
              <h4 className='mb-4 sub-header'>Every day, our company will serve our sellers, buyers, and agents to have smooth, successful transactions and develop the career of our family of agents and support staff through hard work, integrity and defined processes that are the best in the industry.</h4>
            </div>
          </div>
        </div>
    </>
  )
}

export default Mission