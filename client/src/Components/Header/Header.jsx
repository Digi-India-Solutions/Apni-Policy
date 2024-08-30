import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';

function Header() {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const handleMenuActive = () => {
        setIsMenuActive(!isMenuActive);
    };

    const handleMenuDeActive = () => {
        setIsMenuActive(false);
    };

    // desktop dropdown

    const [isHealthActive, setIsHealthActive] = useState(false);
    const [isTravelActive, setIsTravelActive] = useState(false);
    const [isMotorActive, setIsMotorActive] = useState(false);
    const [isCorporateActive, setIsCorporateActive] = useState(false);
    const [isOtherActive, setIsOtherActive] = useState(false);

    const handleHealthActive = () => {
        setIsHealthActive(true);
    };

    const handleHealthDeActive = () => {
        setIsHealthActive(false);
    };

    const handleTravelActive = () => {
        setIsTravelActive(true);
    };

    const handleTravelDeActive = () => {
        setIsTravelActive(false);
    };

    const handleMotorActive = () => {
        setIsMotorActive(true);
    };

    const handleMotorDeActive = () => {
        setIsMotorActive(false);
    };

    const handleOtherActive = () => {
        setIsOtherActive(true);
    };

    const handleOtherDeActive = () => {
        setIsOtherActive(false);
    };

    const handleCorporateActive = () => {
        setIsCorporateActive(true);
    };

    const handleCorporateDeActive = () => {
        setIsCorporateActive(false);
    };

    // mobile dropdown 

    const [isHealthMobActive, setIsHealthMobActive] = useState(false);
    const [isTravelMobActive, setIsTravelMobActive] = useState(false);
    const [isMotorMobActive, setIsMotorMobActive] = useState(false);
    const [isCorporateMobActive, setIsCorporateMobActive] = useState(false);
    const [isOtherMobActive, setIsOtherMobActive] = useState(false);

    const handleHealthMobActive = () => {
        setIsHealthMobActive(!isHealthMobActive);
    };

    const handleTravelMobActive = () => {
        setIsTravelMobActive(!isTravelMobActive);
    };

    const handleMotorMobActive = () => {
        setIsMotorMobActive(!isMotorMobActive);
    };

    const handleCorporateMobActive = () => {
        setIsCorporateMobActive(!isCorporateMobActive);
    };

    const handleOtherMobActive = () => {
        setIsOtherMobActive(!isOtherMobActive);
    };

    return (
        <header>
            <div className="container">
                <div className="top">
                    <div className="content">
                        {/* <Link>My Account</Link> */}
                        <Link to={'/contact'}>Contact Us</Link>
                        <Link to={'/about'}>About Us</Link>
                        {/* <Link>Blogs</Link> */}
                    </div>
                </div>
                <div className="bottom">
                    <Link onClick={handleMenuDeActive} to={'/'} className="logo">
                        <img src={logo} alt="Logo" />
                    </Link>
                    <nav>
                        <ul className='desktop-mod'>
                            <li>
                                <Link
                                    to={''}
                                    onMouseEnter={handleHealthActive}
                                    onMouseLeave={handleHealthDeActive}
                                    className="health-pointer"
                                >

                                    Health Insurance
                                    <ul className={`health-hover ${isHealthActive ? 'health-active' : ''}`}>
                                        <li><Link onClick={handleMenuDeActive} to={'/health-gain-policy'}>Heath Gain Policy</Link></li>
                                        <li><Link onClick={handleMenuDeActive} to={'/wellness'}>Wellness</Link></li>
                                        <li><Link onClick={handleMenuDeActive} to={'/personal-accident'}>Personal Accident</Link></li>
                                    </ul>
                                </Link>
                            </li>
                            <li><Link
                                to={''}
                                onMouseEnter={handleTravelActive}
                                onMouseLeave={handleTravelDeActive}
                                // onClick={handleMenuDeActive}
                                className='travel-pointer'
                            >
                                Travel Insurance
                                <ul className={`travel-hover ${isTravelActive ? 'travel-active' : ''}`}>
                                    <li><Link onClick={handleMenuDeActive} to={'/Overseas-Travel-Insurance'}>Overseas Travel Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={'/Schengen-Travel-Insurance'}>Schengen Travel Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={'/Student-Travel-Insurance'}>Student Travel Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={'/Asia-Travel-Insurance'}>Asia Travel Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={'/Senior-Citizen-Travel-Insurance'}>Senior Citizen Travel Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={'/Annual-Multi-Trip-Insurance'}>Annual Multi Trip Insurance</Link></li>
                                </ul>
                            </Link>
                            </li>
                            <li><Link
                                className='Motor-pointer'
                                to={''}
                                onMouseEnter={handleMotorActive}
                                onMouseLeave={handleMotorDeActive}
                            // onClick={handleMenuDeActive}
                            >
                                Motor Insurance
                                <ul className={`Motor-hover ${isMotorActive ? 'Motor-active' : ''}`}>
                                    <li><Link onClick={handleMenuDeActive} to={'/Car-Insurance'}>Car Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={'/Two-Wheeler-Insurance'}>Two Wheeler Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={'/Comprehensive-Car-Insurance'}>Comprehensive Car Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={'/Commercial-Vehicle-Insurance'}>Commercial Vehicle Insurance</Link></li>
                                </ul>
                            </Link></li>
                            <li><Link
                                to={''}
                                // onClick={handleMenuDeActive}
                                onMouseEnter={handleCorporateActive}
                                onMouseLeave={handleCorporateDeActive}
                                className='Corporate-pointer'
                            >
                                Corporate Plans
                                <ul className={`Corporate-hover ${isCorporateActive ? 'Corporate-active' : ''}`}>
                                    <li><Link onClick={handleMenuDeActive} to={'/Fire-Insurance'}>Fire Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={'/Engineering-Insurance'}>Engineering Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={'/Marine-Insurance'}>Marine Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={'/Liability-Insurance'}>Liability Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={'/Package-Insurance'}>Package Insurance</Link></li>
                                </ul>
                            </Link></li>
                            <li><Link
                                to={''}
                                onClick={handleMenuDeActive}
                                onMouseEnter={handleOtherActive}
                                onMouseLeave={handleOtherDeActive}
                                className='Other-pointer'
                            >
                                Other Insurance
                                <ul className={`Other-hover ${isOtherActive ? 'Other-active' : ''}`}>
                                    <li><Link onClick={handleMenuDeActive} to={'/Burglary-and-Housebreaking'}>Burglary and Housebreaking</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={'/Fire-Insurance'}>Fire Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={'/Package-Insurance'}>Package Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={'/Marine-Insurance'}>Marine Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive} to={'/Group-Mediclaim-Insurance'}>Group Mediclaim Insurance</Link></li>
                                </ul>
                            </Link></li>
                        </ul>
                        <ul className={`mob-mod ${isMenuActive ? 'menu-Active' : ''}`}>
                            <li>
                                <Link
                                    className='health-mob-pointer formarrow'
                                    onClick={handleHealthMobActive}
                                >
                                    {
                                        isHealthMobActive ? (
                                            <> Health Insurance <i className="ri-subtract-line rotate"></i></>
                                            ) : (
                                               <> Health Insurance <i className="ri-add-line"></i></>
                                                )
                                    }
                                </Link>
                                <ul className={`health-mob-hover ${isHealthMobActive ? 'health-mob-active' : ''}`}>
                                    <li><Link to={'/health-gain-policy'} onClick={() => {handleMenuDeActive() , handleHealthMobActive()}}><i className="ri-arrow-right-line"></i> Heath gain policy</Link></li>
                                    <li><Link to={'/wellness'} onClick={() => {handleMenuDeActive() , handleHealthMobActive()}}><i className="ri-arrow-right-line"></i> Wellness</Link></li>
                                    <li><Link to={'/personal-accident'} onClick={() => {handleMenuDeActive() , handleHealthMobActive()}}><i className="ri-arrow-right-line"></i> Personal accident</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link
                                onClick={handleTravelMobActive}
                                className='formarrow'
                            >
                                 {
                                        isTravelMobActive ? (
                                            <> Travel Insurance <i className="ri-subtract-line rotate"></i></>
                                            ) : (
                                               <> Travel Insurance <i className="ri-add-line"></i></>
                                                )
                                    }
                                
                            </Link>
                                <ul className={`Travel-mob-hover ${isTravelMobActive ? 'Travel-mob-active' : ''}`}>
                                    <li><Link to={'/Overseas-Travel-Insurance'} onClick={() => {handleMenuDeActive() , handleTravelMobActive()}}><i className="ri-arrow-right-line"></i> Overseas Travel Insurance</Link></li>
                                    <li><Link to={'/Schengen-Travel-Insurance'} onClick={() => {handleMenuDeActive() , handleTravelMobActive()}}><i className="ri-arrow-right-line"></i> Schengen Travel Insurance</Link></li>
                                    <li><Link to={'/Student-Travel-Insurance'} onClick={() => {handleMenuDeActive() , handleTravelMobActive()}}><i className="ri-arrow-right-line"></i> Student Travel Insurance</Link></li>
                                    <li><Link to={'/Asia-Travel-Insurance'} onClick={() => {handleMenuDeActive() , handleTravelMobActive()}}><i className="ri-arrow-right-line"></i> Asia Travel Insurance</Link></li>
                                    <li><Link to={'/Senior-Citizen-Travel-Insurance'} onClick={() => {handleMenuDeActive() , handleTravelMobActive()}}><i className="ri-arrow-right-line"></i> Senior Citizen Travel Insurance</Link></li>
                                    <li><Link to={'/Annual-Multi-Trip-Insurance'} onClick={() => {handleMenuDeActive() , handleTravelMobActive()}}><i className="ri-arrow-right-line"></i> Annual Multi Trip Insurance</Link></li>
                                </ul>
                            </li>

                            <li><Link
                                onClick={handleMotorMobActive}
                                className='formarrow'
                            >
                                 {
                                        isMotorMobActive ? (
                                            <> Motor Insurance <i className="ri-subtract-line rotate"></i></>
                                            ) : (
                                               <> Motor Insurance <i className="ri-add-line"></i></>
                                                )
                                    }
                            </Link>
                                <ul className={`Motor-mob-hover ${isMotorMobActive ? 'Motor-mob-active' : ''}`}>
                                    <li><Link to={'/Car-Insurance'} onClick={() => {handleMenuDeActive() , handleMotorMobActive()}}><i className="ri-arrow-right-line"></i> Car Insurance</Link></li>
                                    <li><Link to={'/Two-Wheeler-Insurance'} onClick={() => {handleMenuDeActive() , handleMotorMobActive()}}><i className="ri-arrow-right-line"></i> Two Wheeler Insurance</Link></li>
                                    <li><Link to={'/Comprehensive-Car-Insurance'} onClick={() => {handleMenuDeActive() , handleMotorMobActive()}}><i className="ri-arrow-right-line"></i> Comprehensive Car Insurance</Link></li>
                                    <li><Link to={'/Commercial-Vehicle-Insurance'} onClick={() => {handleMenuDeActive() , handleMotorMobActive()}}><i className="ri-arrow-right-line"></i> Commercial Vehicle Insurance</Link></li>
                                </ul>
                            </li>
                            <li><Link
                                onClick={handleCorporateMobActive}
                                className='formarrow'
                            >
                                {
                                        isCorporateMobActive ? (
                                            <> Corporate Plans <i className="ri-subtract-line rotate"></i></>
                                            ) : (
                                               <> Corporate Plans <i className="ri-add-line"></i></>
                                                )
                                    }
                                
                            </Link>
                                <ul className={`Corporate-mob-hover ${isCorporateMobActive ? 'Corporate-mob-active' : ''}`}>
                                    <li><Link to={'/Fire-Insurance'} onClick={() => {handleMenuDeActive() , handleCorporateMobActive()}}><i className="ri-arrow-right-line"></i> Fire Insurance</Link></li>
                                    <li><Link to={'/Engineering-Insurance'} onClick={() => {handleMenuDeActive() , handleCorporateMobActive()}}><i className="ri-arrow-right-line"></i> Engineering Insurance</Link></li>
                                    <li><Link to={'/Marine-Insurance'} onClick={() => {handleMenuDeActive() , handleCorporateMobActive()}}><i className="ri-arrow-right-line"></i> Marine Insurance</Link></li>
                                    <li><Link to={'/Liability-Insurance'} onClick={() => {handleMenuDeActive() , handleCorporateMobActive()}}><i className="ri-arrow-right-line"></i> Liability Insurance</Link></li>
                                    <li><Link to={'/Package-Insurance'} onClick={() => {handleMenuDeActive() , handleCorporateMobActive()}}><i className="ri-arrow-right-line"></i> Package Insurance</Link></li>
                                </ul>
                            </li>
                            <li><Link
                                onClick={handleOtherMobActive}
                                className='formarrow'
                            >
                                 {
                                        isOtherMobActive ? (
                                            <> Other Insurance <i className="ri-subtract-line rotate"></i></>
                                            ) : (
                                               <> Other Insurance <i className="ri-add-line"></i></>
                                                )
                                    }
                            </Link>
                            <ul className={`Other-mob-hover ${isOtherMobActive ? 'Other-mob-active' : ''}`}>
                                    <li><Link to={'/Burglary-and-Housebreaking'} onClick={() => {handleMenuDeActive() , handleOtherMobActive()}}><i className="ri-arrow-right-line"></i> Burglary and Housebreaking</Link></li>
                                    <li><Link to={'/Fire-Insurance'} onClick={() => {handleMenuDeActive() , handleOtherMobActive()}}><i className="ri-arrow-right-line"></i> Fire Insurance</Link></li>
                                    <li><Link to={'/Package-Insurance'} onClick={() => {handleMenuDeActive() , handleOtherMobActive()}}><i className="ri-arrow-right-line"></i> Package Insurance</Link></li>
                                    <li><Link to={'/Marine-Insurance'} onClick={() => {handleMenuDeActive() , handleOtherMobActive()}}><i className="ri-arrow-right-line"></i> Marine Insurance</Link></li>
                                    <li><Link to={'/Group-Mediclaim-Insurance'} onClick={() => {handleMenuDeActive() , handleOtherMobActive()}}><i className="ri-arrow-right-line"></i> Group Mediclaim Insurance</Link></li>
                                </ul>
                            </li>
                            <div className="social-link">
                                <i className="ri-facebook-box-line"></i>
                                <i className="ri-instagram-line"></i>
                                <i className="ri-twitter-line"></i>
                            </div>
                        </ul>
                    </nav>
                    <div className="btn-box">
                        <Link to={'/active-form'} onClick={handleMenuDeActive}>Apply Now</Link>
                        <div className="menu" onClick={handleMenuActive}>
                            <i className="ri-menu-line"></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
