import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.svg';
import CloseIcon from '../images/icon-close.svg';
import HamburgerIcon from '../images/icon-hamburger.svg';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);  
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
    if (window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <img src={ Logo } alt="Logo" />
                </Link>
            <div className='menu-icon' onClick={handleClick}>
                {click ? <img src={CloseIcon} alt='Close Icon' /> : <img src={HamburgerIcon} alt='Menu Icon' />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Pricing
                </Link>
            </li>
            <li className='nav-item'> 
                <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu} 
                >
                Product
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
                >
                About Us
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
                >
                Careers
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
                >
                Community
                </Link>
            </li>
            </ul>
            {button && <Button buttonStyle='btn--primary'>Get Started</Button>}
        </div>
        </nav>
    </>
    );
}

export default Navbar;