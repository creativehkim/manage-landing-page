import React from 'react'
import { Button } from './Button'
import { TestimonialData } from './TestimonialData'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import SwiperCore, { Autoplay } from 'swiper/core';
import Testimonial from './Testimonial'
import './TestimonialSection.css'


SwiperCore.use(Autoplay)

function TestimonialSlider() {

  return (
    <>
      <div className='testimonial-section'>
        <div className='testimonial-container'>
          <h1 className='heading'>What they’ve said</h1>
          <Swiper
            centeredSlides={true}
            loop={true}
            autoplay={{"delay": 2500, "disableOnInteraction": false}}
            slidesPerView={3}
            spaceBetween={30}
            onSlideChange={()=> console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
            tag='div'
            wrapperTag='ul'
            >
            
              {TestimonialData.map((testimonial) => {
                return (
                  <SwiperSlide key={testimonial.id} tag='li'><Testimonial 
                    className="testimonial-card"
                    text={testimonial.text}
                    name={testimonial.name}
                    src={testimonial.image} 
                  /></SwiperSlide>
                  
                  )
                  
              })}
              
          </Swiper>
          <Button className='testimonial-btn' buttonStyle='btn-primary'>Get Started</Button>         
        </div>
      </div>
    </>
  )}

export default TestimonialSlider;