import { useState } from 'react'
import './css/About.css'
import PlanImage from './images/real-estate-culture-image-1.jpg';


function About() {

  return (
    <>
      <div id="about" className='bg-light'>
        <div className='container pt-5'>
          <div className='text-center mb-5'>
            <h1 className='main-header mt-3'>ABOUT US</h1>
            <div className='d-flex justify-content-center mb-2'>
              <hr className='hr-custom-r' />
            </div>
            <h4 className='mb-4 sub-header'>1st Class Real Estate is a full service real estate company that desires to help YOU grow your business! Like everyone else we offer competitive splits & support; however, it is our culture that sets us apart from the rest!</h4>
            <h4 className='mb-4 sub-header'>We’ve made it possible for you to grow your business with a team of individuals without breaking the bank!</h4>
          </div>

          <div className='row align-items-center my-5 py-5'>
            <div className='col-12 col-md-7 col-lg-7 col-xl-7 text-left'>
              <h3 className='mt-3'><b>1st Class Real Estate</b></h3>
              <h2 className='mt-3 mb-4 culture-header'>OUR CULTURE</h2>
              <div className='culture-block mb-4'>
                At 1st Class Real Estate, we believe in more than just buying and selling properties; we immerse ourselves in the culture of excellence. Our commitment to delivering top-tier real estate experiences goes beyond the transaction, delving into the heart of what makes a property truly exceptional. Join us on a journey to discover the essence of unparalleled living, where attention to detail, impeccable service, and a passion for quality define our approach. Learn more about the 1st Class Real Estate culture and elevate your real estate expectations by clicking the button below.
              </div>
            </div>
            <div className='col-12 col-md-5 col-lg-5 col-xl-5'>
              <img src={PlanImage} alt="Image of Real Estate Agents Planning with Clients" className='img-fluid'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About