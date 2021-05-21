import React from 'react';
import { Button } from './Button';
import Testimonial from './Testimonial'
import './TestimonialSlider.css';


function TestimonialSlider() {
  return (
    <>
      <div className='testimonial-section'>
        <div className='testimonial-container'>
          <h1 className='heading'>What they’ve said</h1>
          <div className='slider'>
            <Testimonial 
              className="testimonial-card"
              text={'Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.'}
              name={'Anisha Li'}
              src={'../images/avatar-anisha.png'} 
            />
            <Testimonial 
              className="testimonial-card"
              text={'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.'}
              name={'Ali Bravo'}
              src={'../images/avatar-ali.png'} 
            />
            <Testimonial 
              className="testimonial-card"
              text={'Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!'}
              name={'Richard Watts'}
              src={'../images/avatar-richard.png'}  
            />
            <Testimonial 
              className="testimonial-card"
              text={'Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.'}
              name={'Shanai Gough'}
              src={'../images/avatar-shanai.png'}  
            />
          </div>
          <Button className='testimonial-btn' buttonStyle='btn-primary'>Get Started</Button>         
        </div>
      </div>
    </>
  )}

export default TestimonialSlider;