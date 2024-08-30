import React, { useEffect } from 'react';
import AdvantageHome from '../../Components/AdvantageHome/AdvantageHome';
import { Link } from 'react-router-dom';

function CommercialVehicleInsurance() {
  useEffect(()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
},[])
  const handleAddSesstion = () => {
    sessionStorage.setItem('InsuranceName' , 'Commercial Vehicle Insurance')
}
  return (
    <section className='HealthGainPolicy-section'>
      <div className="HealthGainPolicy-container">
        <div className="top">
            <div className="left">
              <span>Commercial Vehicle Insurance</span>
              <h3>Protect Your Business Assets with Comprehensive Coverage - Quick & Easy Enrollment Process</h3>
              <p>Apni Policy offers Commercial Vehicle Insurance with quick approval and flexible coverage options. Get hassle-free online insurance for your commercial vehicles at competitive premiums with minimal documentation.</p>
              <Link onClick={handleAddSesstion} to="/form">APPLY NOW</Link>
            </div>
            <div className="right"></div>
        </div>
        <div className="about-policy">
          <div className="detail">
            <h2>Online <span>Commercial Vehicle Insurance</span></h2>
            <p>Commercial vehicle insurance is essential protection that covers your business vehicles against various risks, including accidents, theft, and third-party liability.</p>
            <p>Discover the extensive benefits of Apni Policy's Commercial Vehicle Insurance. Our policies offer comprehensive coverage tailored to protect your business assets.</p>
            <p>Experience a seamless digital application process where you can secure insurance for your commercial vehicles. Enjoy competitive premiums and the flexibility to choose coverage options that suit your business needs.</p>
            <p>With Apni Policy's Commercial Vehicle Insurance, protect your business fleet and your financial interests with confidence. Get a quote today and ensure your vehicles are safeguarded.</p>
          </div>
        </div>
        <div className="adavantage-policy">
          <AdvantageHome />
        </div>
      </div>
    </section>
  );
}

export default CommercialVehicleInsurance;
