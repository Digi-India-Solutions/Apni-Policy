import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Hero.css';
import banner1 from './banner1.jpg'
import banner2 from './banner2.jpg'

function Hero() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true, // Enable fade effect
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000 // Autoplay speed in milliseconds
    };

    return (
        <section className='hero-section'>
            <div className="hero-container">
                <Slider className='slider-main-box' {...settings}>
                    <div className='slider-box'>
                        <img src={banner1} alt="" />
                        {/* <h3>One</h3> */}
                    </div>
                    <div className='slider-box'>
                        <img src={banner2} alt="" />
                    </div>
                </Slider>
            </div>
        </section>
    );
}

export default Hero;
