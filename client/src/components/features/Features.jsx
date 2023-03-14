import React from 'react'
import './Features.scss'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const Features = () => {
  return (
    <div className='features'>
      <div className='wrapper'>
        <div className='text'>
          <h2>A whole world of freelance talent at your fingertips</h2>
          <ul>
            <li>
              <h6>
                <span>
                  <AiOutlineCheckCircle className='icon' />
                </span>
                The best for every budget
              </h6>
              <p>
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </p>
            </li>
            <li>
              <h6>
                <span>
                  <AiOutlineCheckCircle className='icon' />
                </span>
                Quality work done quickly
              </h6>
              <p>
                Find the right freelancer to begin working on your project
                within minutes.
              </p>
            </li>
            <li>
              <h6>
                <span>
                  <AiOutlineCheckCircle className='icon' />
                </span>
                Protected payments, every time
              </h6>
              <p>
                Always know what you'll pay upfront. Your payment isn't released
                until you approve the work.
              </p>
            </li>
            <li>
              <h6>
                <span>
                  <AiOutlineCheckCircle className='icon' />
                </span>
                24/7 support
              </h6>
              <p>
                Questions? Our round-the-clock support team is available to help
                anytime, anywhere.
              </p>
            </li>
          </ul>
        </div>
        <div className='video'>
          <iframe
            width='700'
            height='445'
            src='https://www.youtube.com/embed/KI5CnJ9u5ok'
            title='React Fiverr App Design Tutorial  | React UI Full Course for Beginners'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Features
