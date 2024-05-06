import { useState } from 'react'
import './css/Contact.css'
import YouTube from 'react-youtube';
import Axios from 'axios';
import SignUpCarousel from './SignUpCarousel';


function Contact() {

    const videoId1 = 'au4lUJ6PMbA';
    const videoId2 = 'kj83VVBXTEE';

    const [showAlert, setShowAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [emailSent, setEmailSent] = useState(false); // Track whether email has been sent

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const updateFname = (event) => {
        const newName = event.target.value;
        setFname(newName);
    };

    const updateLname = (event) => {
        const newName = event.target.value;
        setLname(newName);
    };

    const updateEmail = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
    };

    const updatePhone = (event) => {
        const newPhone = event.target.value;
        setPhone(newPhone);
    };

    const updateMessage = (event) => {
        const newMessage = event.target.value;
        setMessage(newMessage);
    };

    const handleContactInfo = (event) => {
        event.preventDefault();
        console.log(fname, lname, email, phone, message);
        if (!emailSent) { // Check if email has not been sent yet
            Axios.post("https://first-class-realty-7b21d8ef32da.herokuapp.com/contact", {
                fname: fname,
                lname: lname,
                email: email,
                phone: phone,
                message: message
            }).then(() => {
                console.log("Success");
                setShowAlert(true);
                setShowErrorAlert(false);
                setEmailSent(true); // Set emailSent to true after sending email
            }).catch(error => {
                console.error("Error:", error);
                setShowAlert(false);
                setShowErrorAlert(true);
            });
        }
    };

  return (
    <>
        <div id="contact" className='bg-light'>
            <div className='container py-5'>
                <h2 className='text-center mb-3'>OUR PARTNER & ENTREPRENEUR MODELS</h2>
                <div className='row justify-content-center flex-xl-nowrap m-2'>
                    <div className='col-12 col-xl-6 m-2 text-center video-container'>
                        <iframe
                            title="YouTube video"
                            src="https://www.youtube.com/embed/au4lUJ6PMbA"
                            frameBorder="0"
                            allowFullScreen
                            className="video"
                        ></iframe>
                    </div>
                    <div className='col-12 col-xl-6 m-2 text-center video-container'>
                        <iframe
                            title="YouTube video"
                            src="https://www.youtube.com/embed/kj83VVBXTEE"
                            frameBorder="0"
                            allowFullScreen
                            className="video"
                        ></iframe>
                    </div>
                </div>
                <div className='d-flex justify-content-center my-5'>
                    <SignUpCarousel/>
                </div>
                <div className='text-center mb-4'>
                    <h2 className='mt-3'>Have any questions? Feel free to contact us.</h2>
                </div>
                <div className='d-flex justify-content-center'>
                    <form id="contact-form"  onSubmit={handleContactInfo} >
                        <div className='row'>
                            <div className='col-md-6 col-lg-6 col-xl-6'>
                                <label className='d-none' htmlfor="firstName">First Name</label>
                                <input className='bg-light mb-3 border-bottom-only rounded-0' type="text" id="fname" name="fname" placeholder='First Name' onChange={updateFname} required/><br/>

                                <label className='d-none' htmlfor="lastName">Last Name</label>
                                <input className='bg-light mb-3 border-bottom-only rounded-0' type="text" id="lname" name="lname" placeholder='Last Name' onChange={updateLname} required/><br/>
                            </div>
                            <div className='col-md-6 col-lg-6 col-xl-6'>
                                <label className='d-none' htmlfor="email">Email Address</label>
                                <input className='bg-light mb-3 border-bottom-only rounded-0' type="email" id="email" name="email" placeholder='Email Address' onChange={updateEmail} required/><br/>

                                <label className='d-none' htmlfor="phone">Phone Number</label>
                                <input className='bg-light mb-3 border-bottom-only rounded-0' type="tel" id="phone" name="phone" placeholder='Phone Number' onChange={updatePhone}/><br/>
                            </div>
                        </div>

                        <label className='d-none' htmlfor="message">Message:</label>
                        <textarea className='bg-light border-bottom-only mb-4 rounded-0' id="message" name="message" placeholder='Message' rows="3" onChange={updateMessage} required></textarea><br/>

                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div>
                                {showAlert && (
                                    <div className="alert alert-success mt-3 text-center" role="alert">
                                        We have received your message! A representative will contact you shortly.
                                    </div>
                                )}
                                {showErrorAlert && (
                                    <div className="alert alert-danger mt-3 text-center" role="alert">
                                        Please make sure the information above is valid.
                                    </div>
                                )}
                            </div>
                            <button className='btn btn-secondary btn-lg py-2' type="submit">Send Message</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </>
  )
}

export default Contact