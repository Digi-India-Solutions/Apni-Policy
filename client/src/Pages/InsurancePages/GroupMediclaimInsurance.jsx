import React, { useEffect } from 'react';
import AdvantageHome from '../../Components/AdvantageHome/AdvantageHome';
import { Link } from 'react-router-dom';

function GroupMediclaimInsurance() {
  useEffect(()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
},[])
  const handleAddSesstion = () => {
    sessionStorage.setItem('InsuranceName' , 'Group Mediclaim Insurance')
}
  return (
    <section className='HealthGainPolicy-section'>
      <div className="HealthGainPolicy-container">
        <div className="top">
            <div className="left">
              <span>Group Mediclaim Insurance</span>
              <h3>Comprehensive Health Coverage for Your Employees - Quick & Easy Enrollment Process</h3>
              <p>Apni Policy offers Group Mediclaim Insurance with quick approval and flexible coverage options. Get hassle-free online health insurance for your employees at competitive premiums with minimal documentation.</p>
              <Link onClick={handleAddSesstion} to="/form">APPLY NOW</Link>
            </div>
            <div className="right"></div>
        </div>
        <div className="about-policy">
          <div className="detail">
            <h2>Online <span>Group Mediclaim Insurance</span></h2>
            <p>Group Mediclaim insurance provides comprehensive health coverage for employees under a single policy, ensuring their well-being and financial security.</p>
            <p>Discover the extensive benefits of Apni Policy's Group Mediclaim Insurance. Our policies offer tailored coverage to meet the healthcare needs of your workforce.</p>
            <p>Experience a seamless digital application process where you can secure health insurance for your employees. Enjoy competitive premiums and the flexibility to choose coverage options that suit your company's requirements.</p>
            <p>With Apni Policy's Group Mediclaim Insurance, ensure your employees' health and financial security are protected. Get a quote today and provide them with the assurance of comprehensive health coverage.</p>
          </div>
        </div>
        <div className="adavantage-policy">
          <AdvantageHome />
        </div>
      </div>
    </section>
  );
}

export default GroupMediclaimInsurance;
