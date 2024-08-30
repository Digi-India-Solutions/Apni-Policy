import React, { useEffect } from 'react'
import './HealthGainPolicy.css'
import { Link } from 'react-router-dom'
import AdvantageHome from '../../Components/AdvantageHome/AdvantageHome'

function HealthGainPolicy() {
  useEffect(()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
},[])
  const handleAddSesstion = () => {
    sessionStorage.setItem('InsuranceName' , 'Health Gain Policy')
}
  return (
    <section className='HealthGainPolicy-section'>
      <div className="HealthGainPolicy-container">
        <div className="top">
            <div className="left">
              <span>Health Gain Policy</span>
              <h3>Secure Your Health with Coverage Up to ₹10 Lakh - Quick & Easy Enrollment Process</h3>
              <p>Apni Policy offers Health Gain Policies with quick approval and flexible coverage options. Get hassle-free online health insurance at low premiums with minimal documentation.</p>
              <Link onClick={handleAddSesstion} to="/form">APPLY NOW</Link>
            </div>
            <div className="right"></div>
        </div>
        <div className="about-policy">
          <div className="detail">
            <h2>Online <span>Health Gain Policy</span></h2>
            <p>A health insurance policy is a vital safety net that provides comprehensive coverage for various medical needs.</p>
            <p>Discover the extensive benefits of Apni Policy's Health Gain Policies. Our health insurance plans cater to a variety of requirements, from ensuring quality medical care to covering unforeseen medical emergencies.</p>
            <p>Experience a seamless digital application process where you can secure health coverage of up to ₹10,00,000. Enjoy affordable premiums and the flexibility to choose the coverage that suits your needs.</p>
            <p>With Apni Policy's Health Gain Policies, the peace of mind that comes with comprehensive health coverage is within reach. Apply today and step into a future where your health and well-being are safeguarded.</p>
          </div>
        </div>
        <div className="adavantage-policy">
          <AdvantageHome />
        </div>
      </div>
    </section>
  )
}

export default HealthGainPolicy
