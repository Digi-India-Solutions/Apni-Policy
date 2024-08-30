import React, { useEffect } from 'react';
import AdvantageHome from '../../Components/AdvantageHome/AdvantageHome';
import { Link } from 'react-router-dom';

function PackageInsurance() {
  useEffect(()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
},[])
  const handleAddSesstion = () => {
    sessionStorage.setItem('InsuranceName' , 'Package Insurance')
}
  return (
    <section className='HealthGainPolicy-section'>
      <div className="HealthGainPolicy-container">
        <div className="top">
            <div className="left">
              <span>Package Insurance</span>
              <h3>Comprehensive Coverage for Your Assets - Quick & Easy Enrollment Process</h3>
              <p>Apni Policy offers Package Insurance with quick approval and flexible coverage options. Get hassle-free online insurance for your assets at competitive premiums with minimal documentation.</p>
              <Link onClick={handleAddSesstion} to="/form">APPLY NOW</Link>
            </div>
            <div className="right"></div>
        </div>
        <div className="about-policy">
          <div className="detail">
            <h2>Online <span>Package Insurance</span></h2>
            <p>Package insurance provides comprehensive protection that covers multiple assets or risks under a single policy.</p>
            <p>Discover the extensive benefits of Apni Policy's Package Insurance. Our policies offer tailored coverage to protect various aspects of your life, including home, health, travel, and more.</p>
            <p>Experience a seamless digital application process where you can secure insurance for all your valuable assets. Enjoy competitive premiums and the flexibility to choose coverage options that suit your specific needs.</p>
            <p>With Apni Policy's Package Insurance, protect your assets and your financial interests with confidence. Get a quote today and ensure comprehensive coverage for everything that matters to you.</p>
          </div>
        </div>
        <div className="adavantage-policy">
          <AdvantageHome />
        </div>
      </div>
    </section>
  );
}

export default PackageInsurance;
