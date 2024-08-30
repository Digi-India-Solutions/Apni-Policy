import React, { useEffect } from 'react'
import AdvantageHome from '../../Components/AdvantageHome/AdvantageHome'
import { Link } from 'react-router-dom'

function SchengenTravelInsurance() {
  useEffect(()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
},[])
  const handleAddSesstion = () => {
    sessionStorage.setItem('InsuranceName' , 'Schengen Travel Insurance')
}
  return (
    <section className='HealthGainPolicy-section'>
      <div className="HealthGainPolicy-container">
        <div className="top">
            <div className="left">
              <span>Schengen Travel Insurance</span>
              <h3>Travel with Confidence with Coverage Up to ₹10 Lakh - Quick & Easy Enrollment Process</h3>
              <p>Apni Policy offers Schengen Travel Insurance with quick approval and flexible coverage options. Get hassle-free online travel insurance at low premiums with minimal documentation.</p>
              <Link onClick={handleAddSesstion} to="/form">APPLY NOW</Link>
            </div>
            <div className="right"></div>
        </div>
        <div className="about-policy">
          <div className="detail">
            <h2>Online <span>Schengen Travel Insurance</span></h2>
            <p>Schengen travel insurance is a vital safeguard that provides comprehensive coverage for various travel-related needs within the Schengen area.</p>
            <p>Discover the extensive benefits of Apni Policy's Schengen Travel Insurance. Our plans cater to various requirements, from ensuring quality medical care abroad to covering unforeseen travel emergencies in Schengen countries.</p>
            <p>Experience a seamless digital application process where you can secure travel coverage of up to ₹10,00,000. Enjoy affordable premiums and the flexibility to choose the coverage that suits your needs.</p>
            <p>With Apni Policy's Schengen Travel Insurance, the peace of mind that comes with comprehensive travel coverage is within reach. Apply today and step into a future where your travel experiences within the Schengen area are safeguarded.</p>
          </div>
        </div>
        <div className="adavantage-policy">
          <AdvantageHome />
        </div>
      </div>
    </section>
  )
}

export default SchengenTravelInsurance
