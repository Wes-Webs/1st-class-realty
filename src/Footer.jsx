import { useState } from 'react'
import './css/Footer.css'
import equalLogo from './images/realtor-equal-grey.jpg';
import mainLogo from './images/logo-grey-text.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {
  return (
    <>
      <div id="footer">
        <div className='container pt-5'>
            <div className='row pb-5'>
                <div className='col-md-3 col-lg-3 d-none d-md-block'>
                    <img src={mainLogo} alt="Image of Real Estate Agents Planning with Clients" className='img-fluid'/>
                </div>
                <div className='col-12 col-md-4 col-lg-4 text-left mb-5'>
                    <h2 className='mb-4'>CONTACT US</h2>
                    <div className='d-flex flex-row mb-3'>
                        <div style={{paddingRight:'33px'}}>
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                        </div>
                        <div className='footer-text'>
                            Locations in SLC
                        </div>
                    </div>
                    <div className='d-flex flex-row mb-3'>
                        <div style={{paddingRight:'30px'}}>
                            <i className="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <div className='footer-text'>
                            555-555-5555
                        </div>
                    </div>
                    <div className='d-flex flex-row'>
                        <div style={{paddingRight:'27px'}}>
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </div>
                        <div className='footer-text'>
                            SLCGroup@1stclassagents.com
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-5 col-lg-5 text-left'>
                    <h2 className='mb-4'>QUICK LINKS</h2>
                    <div className='d-flex flex-row'>
                        <div className='d-flex flex-column mr-5' style={{paddingRight:'80px'}}>
                            <div className='d-flex flex-row mb-3'>
                                <div style={{paddingRight:'10px'}}>
                                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                </div>
                                <div className='footer-text'>
                                    HOME
                                </div>
                            </div>
                            <div className='d-flex flex-row mb-3'>
                                <div style={{paddingRight:'10px'}}>
                                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                </div>
                                <div className='footer-text'>
                                    ABOUT
                                </div>
                            </div>
                        </div>
                        <div className='d-flex flex-column'>
                            <div className='d-flex flex-row mb-3'>
                                <div style={{paddingRight:'10px'}}>
                                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                </div>
                                <div className='footer-text'>
                                    CULTURE
                                </div>
                            </div>
                            <div className='d-flex flex-row mb-3'>
                                <div style={{paddingRight:'10px'}}>
                                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                </div>
                                <div className='footer-text'>
                                    CONTACT
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row pb-3'>
                <div className='col-6 justify-content-start'>
                    <div className='row text-nowrap'>
                        <div>
                            <img src={equalLogo} alt="Image of Real Estate Agents Planning with Clients" className='img-fluid' style={{maxWidth:'30px',marginRight:'10px'}}/> 
                            <span className='footer-text'>2024 &copy; 1st Class Real Estate</span>
                        </div>
                    </div>
                </div>
                <div className='col-6 d-flex justify-content-end'>
                    <div className='d-flex flex-row'>
                        <i class="fa fa-facebook-square fa-2x mx-2" aria-hidden="true"></i>
                        <i class="fa fa-linkedin-square fa-2x mx-2" aria-hidden="true"></i>
                        <i class="fa fa-youtube-square fa-2x mx-2" aria-hidden="true"></i>
                        <i class="fa fa-instagram fa-2x mx-2" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer