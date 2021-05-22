import React, { useState, useEffect} from 'react';
import { Button } from './Button';
import { TestimonialData } from './TestimonialData'

import Testimonial from './Testimonial'
import './TestimonialSection.css'


function TestimonialSlider({ testimonials }) {
  const [x, setX] = useState(0)
  const length = testimonials.length

  let interval;

  useEffect(() => {
    setInterval(() => {setX(x => x + 100)}, 3000)
  }, [])

  const goLeft = () => {
    clearInterval(interval)
    x === 0 ? setX(-100 * (length -1)) : setX(x + 100)
  }

  console.log(goLeft)

  if (!Array.isArray(testimonials) || length <=0) {
    return null
  }

  return (
    <>
      <div className='testimonial-section'>
        <div className='testimonial-container'>
          <h1 className='heading'>What they’ve said</h1>
          <div className='slider'>
            {TestimonialData.map((testimonial, index) => {
              return (
                <Testimonial 
                  className="testimonial-card"
                  text={testimonial.text}
                  name={testimonial.name}
                  src={testimonial.image} 
                />
              )
            })}

          </div>
          <Button className='testimonial-btn' buttonStyle='btn-primary'>Get Started</Button>         
        </div>
      </div>
    </>
  )}

export default TestimonialSlider;