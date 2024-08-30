import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AdvantageHome from '../../Components/AdvantageHome/AdvantageHome'

function Wellness() {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    },[])
    const handleAddSesstion = () => {
        sessionStorage.setItem('InsuranceName' , 'Wellness')
    }
    return (
        <section className='HealthGainPolicy-section'>
            <div className="HealthGainPolicy-container">
                <div className="top">
                    <div className="left">
                        <span>Wellness</span>
                        <h3>Ensure Your Wellness with Coverage Up to ₹10 Lakh - Fast & Simple Enrollment Process</h3>
                        <p>Apni Policy offers Wellness Plans with quick approval and flexible coverage options. Enjoy hassle-free online enrollment for comprehensive wellness coverage at low premiums with minimal documentation.</p>
                        <Link onClick={handleAddSesstion} to="/form">APPLY NOW</Link>
                    </div>
                    <div className="right"></div>
                </div>
                <div className="about-policy">
                    <div className="detail">
                        <h2>Online <span>Wellness</span></h2>
                        <p>A wellness policy is a crucial support system that offers comprehensive coverage for a range of health and wellness needs.</p>
                        <p>Discover the extensive benefits of Apni Policy's Wellness Plans. Our wellness policies cater to various requirements, from maintaining optimal health to addressing unforeseen wellness emergencies.</p>
                        <p>Experience a seamless digital application process where you can secure wellness coverage of up to ₹10,00,000. Enjoy affordable premiums and the flexibility to choose the coverage that suits your needs.</p>
                        <p>With Apni Policy's Wellness Plans, the peace of mind that comes with comprehensive wellness coverage is within reach. Apply today and step into a future where your health and well-being are safeguarded.</p>
                    </div>
                </div>
                <div className="adavantage-policy">
                    <AdvantageHome />
                </div>
            </div>
        </section>
    )
}

export default Wellness
