import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Logo from '../images/logo-footer.svg';
import Form from './Form';
import './Footer.css';

function Footer() {
    return (
    <div className='footer-container'>
      <section className="footer-top">
        <div className="footer-top-wrapper">
          <h1 className='footer-top-heading'>Simplify how your team works today.</h1>
          <Button buttonStyle={'btn--white'}>Get Started</Button>
        </div>
      </section>
      <div className="footer-bottom">
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/' >
                <img src={ Logo } alt="logo" />
              </Link>
            </div>
        
            <div class='social-icons'>
              <Link
                class='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i class='fab fa-facebook-f' />
              </Link>
              <Link
                class='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i class='fab fa-youtube' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </Link>
              <Link
                class='social-icon-link pinterest'
                to='/'
                target='_blank'
                aria-label='Pinterest'
              >
                <i class="fab fa-pinterest" />
              </Link>
              <Link
                class='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </Link>
            </div>
          </div>
        </section>
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <Link to='/'>Home</Link>
              <Link to='/'>Pricing</Link>
              <Link to='/'>Products</Link>
              <Link to='/'>About Us</Link>
            </div>
            <div class='footer-link-items'>
              <Link to='/'>Careers</Link>
              <Link to='/'>Community</Link>
              <Link to='/'>Privacy Policy</Link>
            </div>
          </div>
        </div>
        <section className='footer-subscription'>
          <div className='input-areas'>
            <Form />
          </div>
        <small class='website-rights'>Copyright 2020. All Rights Reserved</small>
        </section>
      </div>
    </div>
  );
}

export default Footer;