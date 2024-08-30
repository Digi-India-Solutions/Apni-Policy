import React, { useEffect } from 'react'
import AdvantageHome from '../../Components/AdvantageHome/AdvantageHome'
import { Link } from 'react-router-dom'

function PersonalAccident() {
  useEffect(()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
},[])
  const handleAddSesstion = () => {
    sessionStorage.setItem('InsuranceName' , 'Personal Accident')
}
  return (
    <section className='HealthGainPolicy-section'>
      <div className="HealthGainPolicy-container">
        <div className="top">
            <div className="left">
              <span>Personal Accident</span>
              <h3>Protect Yourself with Coverage Up to ₹10 Lakh - Quick & Easy Enrollment Process</h3>
              <p>Apni Policy offers Personal Accident Policies with quick approval and flexible coverage options. Get hassle-free online accident insurance at low premiums with minimal documentation.</p>
              <Link onClick={handleAddSesstion} to="/form">APPLY NOW</Link>
            </div>
            <div className="right"></div>
        </div>
        <div className="about-policy">
          <div className="detail">
            <h2>Online <span>Personal Accident Policy</span></h2>
            <p>A personal accident policy is a critical safety measure that provides comprehensive coverage for various accident-related needs.</p>
            <p>Discover the extensive benefits of Apni Policy's Personal Accident Policies. Our plans cater to various requirements, from ensuring quality medical care post-accident to covering unforeseen emergencies.</p>
            <p>Experience a seamless digital application process where you can secure accident coverage of up to ₹10,00,000. Enjoy affordable premiums and the flexibility to choose the coverage that suits your needs.</p>
            <p>With Apni Policy's Personal Accident Policies, the peace of mind that comes with comprehensive accident coverage is within reach. Apply today and step into a future where your safety and well-being are safeguarded.</p>
          </div>
        </div>
        <div className="adavantage-policy">
          <AdvantageHome />
        </div>
      </div>
    </section>
  )
}

export default PersonalAccident
