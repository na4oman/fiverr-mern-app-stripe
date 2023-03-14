import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories'>
      <div className='wrapper'>
        <h2>Explore the marketplace</h2>
        <ul>
          <li>
            <Link to='/' className='link'>
              <img src='/img/graphics-design.svg' alt='' />
              <span>Graphics & Design</span>
            </Link>
          </li>
          <li>
            <Link to='/' className='link'>
              <img src='/img/online-marketing.svg' alt='' />
              Digital Marketing
            </Link>
          </li>
          <li>
            <Link to='/' className='link'>
              <img src='/img/writing-translation.svg' alt='' />
              Writing & Translation
            </Link>
          </li>
          <li>
            <Link to='/' className='link'>
              <img src='/img/video-animation.svg' alt='' />
              Video & Animation
            </Link>
          </li>
          <li>
            <Link to='/' className='link'>
              <img src='/img/music-audio.svg' alt='' />
              Music & Audio
            </Link>
          </li>
          <li>
            <Link to='/' className='link'>
              <img src='/img/programming.svg' alt='' />
              Programming & Tech
            </Link>
          </li>
          <li>
            <Link to='/' className='link'>
              <img src='/img/business.svg' alt='' />
              Business
            </Link>
          </li>
          <li>
            <Link to='/' className='link'>
              <img src='/img/lifestyle.svg' alt='' />
              Lifestyle
            </Link>
          </li>
          <li>
            <Link to='/' className='link'>
              <img src='/img/data.svg' alt='' />
              Data
            </Link>
          </li>
          <li>
            <Link to='/' className='link'>
              <img src='/img/photograph.svg' alt='' />
              Photography
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Categories
