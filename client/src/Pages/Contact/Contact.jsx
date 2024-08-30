import React, { useEffect } from 'react'
import './contact.css'
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import HaveQuestion from '../../Components/HaveQuestion/HaveQuestion';

function Contact() {
  useEffect(()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
},[])
  return (
    <section className='contact-section'>
      <div className="contact-container">
        <div className="heading-top">
          <Breadcrumbs>
            <Link to={'/'} className="opacity-60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Link>
            {/* <Link to="#" className="opacity-60">
              <span>Components</span>
            </Link> */}
            <Link to={'/contact'}>Contact Us</Link>
          </Breadcrumbs>
        </div>
        <div className="main-container">
          <div className="form-parent">
            <form action="">
              <div className="form-heading">
                <h2>Get in Touch</h2>
                <p>Please raise a query & we will get back to you.</p>
              </div>
              <div className="main-field">
                <div className="two-field">
                  <input type="text" name="" id="" placeholder='Full Name' />
                  <input type="text" name="" id="" placeholder='Mobile Number' />
                </div>
                <div className="two-field">
                  <input type="text" name="" id="" placeholder='Email' />
                  <input type="text" name="" id="" placeholder='Subject' />
                </div>
                <div className="message-box">
                  <textarea name="" id="" placeholder='Message'></textarea>
                </div>
                <button type='submit'>Submit</button>
              </div>
            </form>
          </div>
          <div className="social-parent">
            <div className="social-container">
              <i className="ri-instagram-fill"></i>
              <i className="ri-facebook-box-fill"></i>
              <i className="ri-linkedin-box-fill"></i>
              <i className="ri-twitter-x-fill"></i>
            </div>
          </div>
          <div className="address-container">
            <HaveQuestion />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
