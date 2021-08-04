import React, { useEffect } from 'react';
import Navigation from '../Navigation/Nav';
import './Header.css';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section>
            <Navigation></Navigation>
            <div className='video-banner'>
                <div className='title-text'>
                    <h1 data-aos='zoom-out'>A nice cottage makes your dream creative</h1>
                    <p>Are you ready to host cottages?</p>
                </div>
                <div className='apply-btn'>
                <Link to='/signup'><button data-aos='fade-right' className='button'><span></span>GET STARTED</button></Link>
                    <button data-aos='fade-left' className='button'><span></span>EXPLORE</button>
                </div>
            </div>
        </section>
    );
};

export default Header;