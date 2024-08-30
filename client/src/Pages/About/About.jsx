import React, { useEffect } from 'react'
import './About.css'
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from 'react-router-dom';


function About() {
  useEffect(()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
},[])
  return (
    <section className='About-section'>
      <div className="About-container">
        <div className="heading">
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
            <Link to={'/about'}>About Us</Link>
          </Breadcrumbs>
        </div>
        <div className="about-data">
          <div className="row1">
            <h2>Who are we?</h2>
            <p> We are proud to beone of the leading General Insurance Companies of India. We have a huge customer base which includes you , corporates and SMES.</p>
            <p>Which our office 1678-B Sector 10A Gurugram,</p>
            <p> You can now reach out to us and enjoy our services at your own convenience. Move over, with online and telecalling services, we have become even more accessible.</p>
          </div>
          <div className="row1">
            <h2>What do we have for you?</h2>
            <p>You can look up to us for many of your insurance solutions with respect to <span>MOTOR, HEALTH, HOME, TRAVEL, MARINE, MBD</span> etc..</p>
            <p>Through our products and services. We try to meet every customer’s individual needs by offering customised plans, In our endeavor to delight our customers, we strives to come up with innovative products like <span>India's first over The Counter health and home insurence policies</span></p>
          </div>
          <div className="row1">
            <h2>Our vision</h2>
            <p>We want to score perfectly for world standard services, products and want to be your first choice in domestic as well as global markets.</p>
          </div>
          <div className="row1">
            <h2>Our mission</h2>
            <ul>
              <li>Satisfy your need of insurance cover</li>
              <li>Offer incorporate customer service</li>
              <li>Provide innovation products</li>
              <li>Better reach through presence across India and abroad</li>
            </ul>
          </div>
          <div className="row1">
            <h2>Goals</h2>
            <ul>
              <li>Makeaffordable insurance accesible to all.</li>
              <li>Keeping you , our customer as focal point in all our operations</li>
              <li>Protect policy holders interests</li>
              <li>Be the most innovative in product development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
