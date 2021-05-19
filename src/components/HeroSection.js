import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import HeroImage from '../images/illustration-intro.svg'

function HeroSection() {
  return (
    <>
      <div className='home__hero-section'>
        <div className='container'>
          <div className='row home__hero-row'>
          <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={HeroImage} alt='Intro' className='home__hero-img' />
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <h1 className='heading'>
                  Bring everyone
                  together to build
                  better products.
                </h1>
                <p className='home__hero-subtitle'>
                  Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
                </p>
                <Link to='/'>
                  <Button buttonStyle='btn--primary'>Get Started</Button>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;