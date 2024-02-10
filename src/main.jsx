import React from 'react'
import ReactDOM from 'react-dom/client'
import Navigation from './Navigation.jsx'
import Stats from './Stats.jsx'
import About from './About.jsx'
import Mission from './Mission.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// library.add(fas, faTwitter, faFontAwesome, faHatCowboy, faHatChef, faPlateUtensils)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=''>
      <Navigation />
      <Stats />
      <About/>
      <Mission/>
      <Contact/>
      <Footer/>
    </div>
  </React.StrictMode>,
)
