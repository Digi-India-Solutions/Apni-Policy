import React, { useEffect } from 'react';
import AdvantageHome from '../../Components/AdvantageHome/AdvantageHome';
import { Link } from 'react-router-dom';

function MarineInsurance() {
  useEffect(()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
},[])
  const handleAddSesstion = () => {
    sessionStorage.setItem('InsuranceName' , 'Marine Insurance')
}
  return (
    <section className='HealthGainPolicy-section'>
      <div className="HealthGainPolicy-container">
        <div className="top">
            <div className="left">
              <span>Marine Insurance</span>
              <h3>Protect Your Shipments with Comprehensive Coverage - Quick & Easy Enrollment Process</h3>
              <p>Apni Policy offers Marine Insurance with quick approval and flexible coverage options. Get hassle-free online insurance for your marine shipments at competitive premiums with minimal documentation.</p>
              <Link onClick={handleAddSesstion} to="/form">APPLY NOW</Link>
            </div>
            <div className="right"></div>
        </div>
        <div className="about-policy">
          <div className="detail">
            <h2>Online <span>Marine Insurance</span></h2>
            <p>Marine insurance is essential protection that covers your shipments and vessels against various risks, including damage, loss, and liability during transit.</p>
            <p>Discover the extensive benefits of Apni Policy's Marine Insurance. Our policies offer comprehensive coverage tailored to protect your marine assets and shipments.</p>
            <p>Experience a seamless digital application process where you can secure insurance for your marine operations. Enjoy competitive premiums and the flexibility to choose coverage options that suit your shipping needs.</p>
            <p>With Apni Policy's Marine Insurance, protect your shipments and your financial interests with confidence. Get a quote today and ensure your marine ventures are safeguarded against unforeseen maritime risks.</p>
          </div>
        </div>
        <div className="adavantage-policy">
          <AdvantageHome />
        </div>
      </div>
    </section>
  );
}

export default MarineInsurance;
