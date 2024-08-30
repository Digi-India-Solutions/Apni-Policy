import React, { useState } from 'react';
import './LoansHome.css';
import one from './one.webp';
import l2 from './l2.jpg';
import l3 from './l3.jpg';
import l4 from './l4.jpg';
import health from './health.jpg'
import cor from './cor.jpg'

function LoansHome() {
    const [activeTab, setActiveTab] = useState('Health');

    const activePersonal = () => {
        setActiveTab('Health');
    }

    const activeEMI = () => {
        setActiveTab('Car');
    }

    const activeBusiness = () => {
        setActiveTab('Term');
    }

    const activeInvoice = () => {
        setActiveTab('Investment');
    }

    const activeEbike = () => {
        setActiveTab('Other');
    }

    return (
        <section className='loansHome-section'>
            <div className="loan-container">
                <div className="loan-main-container">
                    <div className="loan-box">
                        <div className="navigater-box">
                            <div onClick={activePersonal} className={`same-navigate ${activeTab === 'Health' ? 'active-tab' : ''}`}>
                                <p>Health Insurance</p>
                            </div>
                            <div onClick={activeEMI} className={`same-navigate ${activeTab === 'Car' ? 'active-tab' : ''}`}>
                                <p>Travel Insurance</p>
                            </div>
                            <div onClick={activeBusiness} className={`same-navigate ${activeTab === 'Term' ? 'active-tab' : ''}`}>
                                <p>Motor Insurance</p>
                            </div>
                            <div onClick={activeInvoice} className={`same-navigate ${activeTab === 'Investment' ? 'active-tab' : ''}`}>
                                <p>Corporate Plans</p>
                            </div>
                            <div onClick={activeEbike} className={`same-navigate ${activeTab === 'Other' ? 'active-tab' : ''}`}>
                                <p>Other Insurance</p>
                            </div>
                        </div>
                        {activeTab === 'Health' && (
                            <div className="details">
                                <img src={health} alt="Personal Loan" />
                                <div className="right">
                                    <p>Whether you're seeking comprehensive coverage for routine check-ups or need support during a medical emergency, our health insurance plans are designed to provide peace of mind. We offer unique health insurance products tailored to match your specific requirements.</p>
                                    <ul>
                                        <li><i className="ri-arrow-right-s-line"></i> Customized health insurance plans</li>
                                        <li><i className="ri-arrow-right-s-line"></i> Coverage amount up to Rs.10 lakhs</li>
                                        <li><i className="ri-arrow-right-s-line"></i> Flexible repayment options</li>
                                    </ul>
                                    {/* <div className="btns">
                                        <a href="">APPLY FOR INDIVIDUAL</a>
                                        <a href="">APPLY FOR FAMILY</a>
                                    </div> */}
                                </div>
                            </div>
                        )}
                        {activeTab === 'Car' && (
                            <div className="details">
                                <img src={l2} alt="EMI Free Loan" />
                                <div className="right">
                                    <p>Protect your vehicle and drive with confidence with our comprehensive car insurance plans. Secure coverage for damages, theft, and third-party liabilities at affordable rates.</p>
                                    <ul>
                                        <li><i className="ri-arrow-right-s-line"></i> Coverage for up to 36 months</li>
                                        <li><i className="ri-arrow-right-s-line"></i> Quick approval and claim processing</li>
                                        <li><i className="ri-arrow-right-s-line"></i> No hidden charges</li>
                                    </ul>
                                    {/* <div className="btns">
                                        <a href="">APPLY NOW</a>
                                    </div> */}
                                </div>
                            </div>
                        )}
                        {activeTab === 'Term' && (
                            <div className="details">
                                <img src={l3} alt="Business Loan" />
                                <div className="right">
                                    <p>Secure your family's future with our comprehensive term insurance plans. Get coverage amounts up to Rs.10 lakhs at affordable premiums.</p>
                                    <ul>
                                        <li><i className="ri-arrow-right-s-line"></i> Flexible coverage terms up to 36 months</li>
                                        <li><i className="ri-arrow-right-s-line"></i> Quick approval and policy issuance</li>
                                        <li><i className="ri-arrow-right-s-line"></i> No hidden charges</li>
                                    </ul>
                                    {/* <div className="btns">
                                        <a href="">APPLY NOW</a>
                                    </div> */}
                                </div>
                            </div>
                        )}
                        {activeTab === 'Investment' && (
                            <div className="details">
                                <img src={cor} alt="Invoice Loan" />
                                <div className="right">
                                    <p>Designed to help you achieve your financial goals, our investment plans offer a range of options for tenures ranging from 1 to 10 years.</p>
                                    <ul>
                                        <li><i className="ri-arrow-right-s-line"></i> Investment amounts up to Rs.5 lakhs</li>
                                        <li><i className="ri-arrow-right-s-line"></i> Easy onboarding process</li>
                                        <li><i className="ri-arrow-right-s-line"></i> Instant approval</li>
                                    </ul>
                                    {/* <div className="btns">
                                        <a href="">APPLY NOW</a>
                                    </div> */}
                                </div>
                            </div>
                        )}
                        {activeTab === 'Other' && (
                            <div className="details">
                                <img src={l4} alt="e-Bike Loan" />
                                <div className="right">
                                    <p>Secure your assets and peace of mind with our diverse insurance options. Apply now for customized insurance plans that fit your unique needs.</p>
                                    <ul>
                                        <li><i className="ri-arrow-right-s-line"></i> Flexible coverage options</li>
                                        <li><i className="ri-arrow-right-s-line"></i> Quick approval process</li>
                                        <li><i className="ri-arrow-right-s-line"></i> Competitive premiums</li>
                                    </ul>
                                    {/* <div className="btns">
                                        <a href="">APPLY NOW</a>
                                    </div> */}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoansHome;
