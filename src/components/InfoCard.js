import React from 'react'
import './InfoCard.css'

const Info = ({ title, body, number}) => {
  return (
    <>
      <div className="info-card-wrapper">
        <div class="info-card-title">
          <span className='number'>{number}</span>
          <h3 className="title">
          {title}
          </h3>
        </div>
        <p className='info-card-body'>{body}</p>
      </div>

    </>
  )
}

export default Info
