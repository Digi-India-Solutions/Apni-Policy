import React, { useEffect } from 'react'
import AdvantageHome from '../../Components/AdvantageHome/AdvantageHome'
import { Link } from 'react-router-dom'

function CarInsurance() {
  useEffect(()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
},[])
  const handleAddSesstion = () => {
    sessionStorage.setItem('InsuranceName' , 'Car Insurance')
}
  return (
    <section className='HealthGainPolicy-section'>
      <div className="HealthGainPolicy-container">
        <div className="top">
            <div className="left">
              <span>Car Insurance</span>
              <h3>Drive with Confidence with Comprehensive Coverage - Quick & Easy Enrollment Process</h3>
              <p>Apni Policy offers Car Insurance with quick approval and flexible coverage options. Get hassle-free online car insurance at competitive premiums with minimal documentation.</p>
              <Link onClick={handleAddSesstion} to="/form">APPLY NOW</Link>
            </div>
            <div className="right"></div>
        </div>
        <div className="about-policy">
          <div className="detail">
            <h2>Online <span>Car Insurance</span></h2>
            <p>Car insurance is essential protection that covers your vehicle against various risks and liabilities.</p>
            <p>Discover the extensive benefits of Apni Policy's Car Insurance. Our policies offer comprehensive coverage, including protection against accidents, theft, and third-party liability.</p>
            <p>Experience a seamless digital application process where you can secure car insurance tailored to your needs. Enjoy competitive premiums and the flexibility to choose coverage options that suit your budget.</p>
            <p>With Apni Policy's Car Insurance, drive confidently knowing that your vehicle and your financial interests are well-protected. Get a quote today and safeguard your journeys on the road.</p>
          </div>
        </div>
        <div className="adavantage-policy">
          <AdvantageHome />
        </div>
      </div>
    </section>
  )
}

export default CarInsurance
