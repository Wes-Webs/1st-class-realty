import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import 'animate.css';
import Navigation from './Navigation.jsx'
import NavigationBlack from './NavigationBlack.jsx'
import Stats from './Stats.jsx'
import About from './About.jsx'
import Mission from './Mission.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import Privacy from './Privacy.jsx'
import Error from './404.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// library.add(fas, faTwitter, faFontAwesome, faHatCowboy, faHatChef, faPlateUtensils)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=''>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navigation /><Stats /><About/><Mission/><Contact/><Footer/></>} />
        <Route path="/privacy" element={<><NavigationBlack /><Privacy/><Footer/></>} />
        <Route exact path="*" element={<><NavigationBlack /><Error/><Footer/></>}/>
      </Routes>
    </BrowserRouter>
    </div>
  </React.StrictMode>,
)
