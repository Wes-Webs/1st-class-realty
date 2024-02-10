import { useState } from 'react'
import './css/Contact.css'


function Contact() {

  return (
    <>
      <div id="about" className='bg-light'>
        <div className='container py-5'>
            <div className='text-center mb-5'>
                <h1 className='mt-3'>5 STEPS TO BECOMING A REAL ESTATE AGENT</h1>
            </div>
            <div className='mb-4'>
                1. ENROLL IN A PRE-LICENSING CLASS<br/>
                Licensing requirements and how long it takes to get your real estate license can vary by state.<br/>
                Find real estate schools in your area or take the courses Online from our partner, The CE Shop.
            </div>
            <div className='mb-4'>
                2. APPLY TO TAKE THE REAL ESTATE EXAM<br/>
                Some states require you to take the exam within a certain window of time after you've completed your education. Other states require a background check and fingerprinting before taking the exam. The details will be addressed within your state's real estate regulatory commission.
            </div>
            <div className='mb-4'>
                3. PASS THE REAL ESTATE LICENSING EXAM AND OBTAIN YOUR LICENSE<br/>
                If you don't pass on the first try, don't worry—you can take it again. Make sure to reschedule right away while the info is still fresh. Once you've passed, you can apply for your license. You'll need to submit an application including any required documents and fees to your state's real estate agency.
            </div>
            <div className='mb-4'>
                4. CHOOSE A REAL ESTATE BROKERAGE<br/>
                Once you've received your real estate license by mail, your next step is to find a brokerage that's right for you. We offers a variety of roles for licensed real estate agents, including full-time or part-time positions.
            </div>
            <div className='mb-5'>
                5. JOIN THE MLS AND REALTOR® ASSOCIATIONS<br/>
                If you work with us, we'll tell you which MLS and REALTOR® memberships you need.
            </div>
            <div className='text-center mb-5'>
                <h2 className='mt-3'>Ready to get started?</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <form>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-xl-6'>
                            <label className='d-none' for="firstName">First Name</label>
                            <input className='bg-light mb-3 border-bottom-only' type="text" id="firstName" name="firstName" placeholder='First Name'/><br/>

                            <label className='d-none' for="lastName">Last Name</label>
                            <input className='bg-light mb-3 border-bottom-only' type="text" id="lastName" name="lastName" placeholder='Last Name'/><br/>
                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6'>
                            <label className='d-none' for="email">Email Address</label>
                            <input className='bg-light mb-3 border-bottom-only' type="email" id="email" name="email" placeholder='Email Address'/><br/>

                            <label className='d-none' for="phone">Phone Number</label>
                            <input className='bg-light mb-3 border-bottom-only' type="tel" id="phone" name="phone" placeholder='Phone Number'/><br/>
                        </div>
                    </div>

                    <label className='d-none' for="message">Message:</label>
                    <textarea className='bg-light border-bottom-only mb-4' id="message" name="message" placeholder='Message' rows="3"></textarea><br/>
                    <div className='d-flex justify-content-center'>
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>

        </div>
      </div>
    </>
  )
}

export default Contact