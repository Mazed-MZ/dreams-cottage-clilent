import React, { useState, useEffect } from 'react';
import '../Header/Header.css';
import { Link } from 'react-router-dom';
import { Button } from '../../Shared/Button/Button';



const Nav = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);

    const closeMobileManu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='nav-bar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo" onClick={closeMobileManu}>
                        <img src="https://i.ibb.co/DznH6kS/logo-3.png" alt="logo-3" border="0"/>
                    </Link>
                        <div className='manu-icon' onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        <ul className={click ? 'nav-manu active' : 'nav-manu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileManu}>
                                    Home
                            </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/host' className='nav-links' onClick={closeMobileManu}>
                                    Host your Cottage
                            </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/review' className='nav-links' onClick={closeMobileManu}>
                                    Review
                            </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/signup' className='nav-links' onClick={closeMobileManu}>
                                    Log in
                            </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/signin' className='nav-links-mobile' onClick={closeMobileManu}>
                                    Sign in
                            </Link>
                            </li>
                        </ul>
                        {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}
                </div>
            </nav>
        </>
    );
};

export default Nav;