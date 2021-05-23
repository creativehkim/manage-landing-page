import React from 'react'
import { Button } from './Button'
import { TestimonialData } from './TestimonialData'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay } from 'swiper/core';
import Testimonial from './Testimonial'
import './TestimonialSection.css'


SwiperCore.use(Autoplay)

function TestimonialSlider() {

  return (
    <>
      <div className='testimonial-section'>
        <div className='testimonial-container'>
          <h2 className='heading'>What they’ve said</h2>
          <Swiper
            centeredSlides={true}
            loop={true}
            autoplay={{"delay": 3000, "disableOnInteraction": false}}
            slidesPerView={3}
            spaceBetween={40}

            tag='div'
            wrapperTag='ul'
            breakpoints={{
                    "350": {
                      "slidesPerView": 1,
                      "spaceBetween": 20
                    },
                    "640": {
                      "slidesPerView": 1,
                      "spaceBetween": 20
                    },
                    "768": {
                      "slidesPerView": 2,
                      "spaceBetween": 30
                    },
                    "1024": {
                      "slidesPerView": 3,
                      "spaceBetween": 40
                    }
                  }}
            >
            
              {TestimonialData.map((testimonial) => {
                return (
                  <SwiperSlide key={testimonial.id} tag='li'><Testimonial 
                    className="testimonial-card"
                    text={testimonial.text}
                    name={testimonial.name}
                    src={testimonial.image} 
                    />
                  </SwiperSlide>
                  
                  )
                  
              })}
              
          </Swiper>
          <Button className='testimonial-btn' buttonStyle='btn-primary'>Get Started</Button>         
        </div>
      </div>
    </>
  )}

export default TestimonialSlider;