import React from 'react'
import { BiSearch } from 'react-icons/bi'
import './Hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <div className='header'>
          <h1>
            Find the perfect <i>freelance</i> services for your business
          </h1>
          <form className='search'>
            <div className='search-box'>
              <BiSearch className='icon' />
              <input type='text' placeholder='Try "building mobile app"' />
            </div>
            <button>Search</button>
          </form>
          <div className='popular'>
            Popular:
            <ul>
              <li>Website Design</li>
              <li>WordPress</li>
              <li>Logo Design</li>
              <li>AI Services</li>
            </ul>
          </div>
        </div>
        <div className='image'></div>
      </div>
    </div>
  )
}

export default Hero
