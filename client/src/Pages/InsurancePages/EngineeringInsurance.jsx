import React, { useEffect } from 'react';
import AdvantageHome from '../../Components/AdvantageHome/AdvantageHome';
import { Link } from 'react-router-dom';

function EngineeringInsurance() {
  useEffect(()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
},[])
  const handleAddSesstion = () => {
    sessionStorage.setItem('InsuranceName' , 'Engineering Insurance')
}
  return (
    <section className='HealthGainPolicy-section'>
      <div className="HealthGainPolicy-container">
        <div className="top">
            <div className="left">
              <span>Engineering Insurance</span>
              <h3>Protect Your Projects with Comprehensive Coverage - Quick & Easy Enrollment Process</h3>
              <p>Apni Policy offers Engineering Insurance with quick approval and flexible coverage options. Get hassle-free online insurance for your engineering projects at competitive premiums with minimal documentation.</p>
              <Link onClick={handleAddSesstion} to="/form">APPLY NOW</Link>
            </div>
            <div className="right"></div>
        </div>
        <div className="about-policy">
          <div className="detail">
            <h2>Online <span>Engineering Insurance</span></h2>
            <p>Engineering insurance is essential protection that covers your engineering projects against various risks, including construction accidents, machinery breakdown, and third-party liability.</p>
            <p>Discover the extensive benefits of Apni Policy's Engineering Insurance. Our policies offer comprehensive coverage tailored to protect your projects from start to completion.</p>
            <p>Experience a seamless digital application process where you can secure insurance for your engineering endeavors. Enjoy competitive premiums and the flexibility to choose coverage options that suit your project's needs.</p>
            <p>With Apni Policy's Engineering Insurance, protect your projects and your financial interests with confidence. Get a quote today and ensure your engineering ventures are safeguarded against unforeseen challenges.</p>
          </div>
        </div>
        <div className="adavantage-policy">
          <AdvantageHome />
        </div>
      </div>
    </section>
  );
}

export default EngineeringInsurance;
