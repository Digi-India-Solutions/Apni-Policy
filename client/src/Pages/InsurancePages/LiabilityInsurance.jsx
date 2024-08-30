import React, { useEffect } from 'react';
import AdvantageHome from '../../Components/AdvantageHome/AdvantageHome';
import { Link } from 'react-router-dom';

function LiabilityInsurance() {
  useEffect(()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
},[])
  const handleAddSesstion = () => {
    sessionStorage.setItem('InsuranceName' , 'Liability Insurance')
}
  return (
    <section className='HealthGainPolicy-section'>
      <div className="HealthGainPolicy-container">
        <div className="top">
            <div className="left">
              <span>Liability Insurance</span>
              <h3>Protect Your Business with Comprehensive Coverage - Quick & Easy Enrollment Process</h3>
              <p>Apni Policy offers Liability Insurance with quick approval and flexible coverage options. Get hassle-free online insurance for your business liabilities at competitive premiums with minimal documentation.</p>
              <Link onClick={handleAddSesstion} to="/form">APPLY NOW</Link>
            </div>
            <div className="right"></div>
        </div>
        <div className="about-policy">
          <div className="detail">
            <h2>Online <span>Liability Insurance</span></h2>
            <p>Liability insurance is essential protection that covers your business against legal claims and financial losses resulting from third-party claims.</p>
            <p>Discover the extensive benefits of Apni Policy's Liability Insurance. Our policies offer comprehensive coverage tailored to protect your business from various liabilities, including public liability and product liability.</p>
            <p>Experience a seamless digital application process where you can secure insurance for your business liabilities. Enjoy competitive premiums and the flexibility to choose coverage options that suit your business needs.</p>
            <p>With Apni Policy's Liability Insurance, protect your business and your financial interests with confidence. Get a quote today and ensure your business operations are safeguarded against unforeseen legal challenges.</p>
          </div>
        </div>
        <div className="adavantage-policy">
          <AdvantageHome />
        </div>
      </div>
    </section>
  );
}

export default LiabilityInsurance;
