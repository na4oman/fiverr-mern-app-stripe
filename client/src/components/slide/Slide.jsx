import React from 'react'
import Slider from 'infinite-react-carousel'
import './Slide.scss'

const Slide = ({ title, children, slidesToShow, arrowsScroll }) => {
  return (
    <div className='slide'>
      <div className='wrapper'>
        <h2>{title}</h2>
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  )
}

export default Slide
