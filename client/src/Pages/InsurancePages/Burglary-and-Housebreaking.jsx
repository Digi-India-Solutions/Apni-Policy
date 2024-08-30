import React, { useEffect } from 'react';
import AdvantageHome from '../../Components/AdvantageHome/AdvantageHome';
import { Link } from 'react-router-dom';

function BurglaryAndHousebreakingInsurance() {
  useEffect(()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
},[])
  const handleAddSesstion = () => {
    sessionStorage.setItem('InsuranceName' , 'Burglary and Housebreaking Insurance')
}
  return (
    <section className='HealthGainPolicy-section'>
      <div className="HealthGainPolicy-container">
        <div className="top">
            <div className="left">
              <span>Burglary and Housebreaking Insurance</span>
              <h3>Protect Your Property with Comprehensive Coverage - Quick & Easy Enrollment Process</h3>
              <p>Apni Policy offers Burglary and Housebreaking Insurance with quick approval and flexible coverage options. Get hassle-free online insurance for your property against burglary and housebreaking incidents at competitive premiums with minimal documentation.</p>
              <Link onClick={handleAddSesstion} to="/form">APPLY NOW</Link>
            </div>
            <div className="right"></div>
        </div>
        <div className="about-policy">
          <div className="detail">
            <h2>Online <span>Burglary and Housebreaking Insurance</span></h2>
            <p>Burglary and housebreaking insurance provides essential protection that covers your property against theft, burglary, and related risks.</p>
            <p>Discover the extensive benefits of Apni Policy's Burglary and Housebreaking Insurance. Our policies offer comprehensive coverage tailored to protect your home and valuables.</p>
            <p>Experience a seamless digital application process where you can secure insurance for your property. Enjoy competitive premiums and the flexibility to choose coverage options that suit your needs.</p>
            <p>With Apni Policy's Burglary and Housebreaking Insurance, protect your property and your financial interests with confidence. Get a quote today and ensure your assets are safeguarded against theft and burglary.</p>
          </div>
        </div>
        <div className="adavantage-policy">
          <AdvantageHome />
        </div>
      </div>
    </section>
  );
}

export default BurglaryAndHousebreakingInsurance;
