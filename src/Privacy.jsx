import React from "react";
import { useState } from 'react'
import './css/Privacy.css'

function Privacy() {

  return (
    <>
      <div id="about" className='bg-light'>
        <div className='container py-5'>
          <h2 className="mb-4">Privacy Policy</h2>
          <div className="mb-2">Your privacy is critically important to us. As such, we have a few fundamental principles</div>
          <ol>
            <li>We don’t ask you for personal information unless we truly need it</li>
            <li>We don’t share your personal information with anyone except to comply with the law, develop our products, or protect our rights</li>
            <li>We don’t store personal information on our servers unless required for the on-going operation of one of our services</li>
          </ol>
          <p className="mb-4">
            <b>Website Visitors</b><br/>
            Like most website operators, this website collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Our purpose for collecting non-personally identifying information is to better understand how visitors use this website. From time to time, we may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website. This website also collects potentially personally-identifying information like Internet Protocol (IP) addresses.
          </p>
          <p className="mb-4">
            <b>Gathering of Personally-Identifying Information</b><br/>
            Certain visitors to this website choose to interact with it in ways that requires the website to gather personally-identifying information. The amount and type of information that the website gathers depends on the nature of the interaction. In each case, this website collects such information only insofar as is necessary or appropriate to fulfill the purpose of the visitor’s interaction. The website does not disclose personally-identifying information other than as described below. Visitors can always refuse to supply personally-identifying information, with the caveat that it may prevent them from engaging in certain website-related activities or services.
          </p>
          <p className="mb-4">
            <b>Protection of Certain Personally-Identifying Information</b><br/>
            We disclose potentially personally-identifying and personally-identifying information only to those persons and affiliated organizations that: (i) need to know that information in order provide services available on this website, and (ii) that have agreed not to disclose it to others. Some of these persons and affiliated organizations may be located outside of your home country; by using this website, you consent to the transfer of such information to them. This website will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than the persons and affiliated organizations, as described above, this website discloses potentially personally-identifying and personally-identifying information only when required to do so by law, or when this website believes in good faith that disclosure is reasonably necessary to protect the property or rights of this website, third parties, or the public at large.
          </p>
          <p className="mb-4">
            <b>Cookies</b><br/>
            A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to a website each time the visitor returns. This website uses cookies to help the website identify and track visitors, their usage of the website, and their website access preferences. Visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using this website, with the drawback that certain features of this website may not function properly without the aid of cookies.
          </p>
          <p>
            <b>Privacy Policy Changes</b><br/>
            Although most changes are likely to be minor, this website may change its Privacy Policy from time to time, and in the website’s sole discretion. We encourage visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.
          </p>
        </div>
      </div>
    </>
  )
}

export default Privacy