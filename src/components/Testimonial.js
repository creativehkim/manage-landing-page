import React from 'react'
import './Testimonial.css'

const Testimonial = ({ src, name, text}) => {
  return (
    <>
      <div className="testimonial-card-wrapper">
        <img className="image" src={src} alt="avatar" />
        <h3 className='name'>{name}</h3>
        <p className='text'>{text}</p>
      </div>

    </>
  )
  console.log(src)
}



export default Testimonial
