import React, { useEffect } from 'react'
import AdvantageHome from '../../Components/AdvantageHome/AdvantageHome'
import { Link } from 'react-router-dom'

function TwoWheelerInsurance() {
  useEffect(()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
},[])
  const handleAddSesstion = () => {
    sessionStorage.setItem('InsuranceName' , 'Two Wheeler Insurance')
}
  return (
    <section className='HealthGainPolicy-section'>
      <div className="HealthGainPolicy-container">
        <div className="top">
            <div className="left">
              <span>Two Wheeler Insurance</span>
              <h3>Ride with Confidence with Comprehensive Coverage - Quick & Easy Enrollment Process</h3>
              <p>Apni Policy offers Two Wheeler Insurance with quick approval and flexible coverage options. Get hassle-free online insurance for your bike or scooter at competitive premiums with minimal documentation.</p>
              <Link onClick={handleAddSesstion} to="/form">APPLY NOW</Link>
            </div>
            <div className="right"></div>
        </div>
        <div className="about-policy">
          <div className="detail">
            <h2>Online <span>Two Wheeler Insurance</span></h2>
            <p>Two wheeler insurance provides essential protection for your bike or scooter against various risks and liabilities.</p>
            <p>Discover the extensive benefits of Apni Policy's Two Wheeler Insurance. Our policies offer comprehensive coverage, including protection against accidents, theft, and third-party liability.</p>
            <p>Experience a seamless digital application process where you can secure insurance tailored to your two wheeler. Enjoy competitive premiums and the flexibility to choose coverage options that suit your budget.</p>
            <p>With Apni Policy's Two Wheeler Insurance, ride confidently knowing that your vehicle and your financial interests are well-protected. Get a quote today and safeguard your journeys on the road.</p>
          </div>
        </div>
        <div className="adavantage-policy">
          <AdvantageHome />
        </div>
      </div>
    </section>
  )
}

export default TwoWheelerInsurance
