import React from 'react'
import './FibBanner.scss'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const FibBanner = () => {
  return (
    <div className='fib-banner'>
      <div className='wrapper'>
        <div className='text'>
          <small>
            <span>
              <b>fiverr</b> business.
            </span>
            <span className='new'>NEW</span>
          </small>
          <h2>
            A business solution designed for <i>teams</i>
          </h2>
          <p className='body'>
            Upgrade to a curated experience packed with tools and benefits,
            dedicated to businesses
          </p>
          <ul>
            <li>
              <span>
                <AiOutlineCheckCircle className='icon' />
              </span>
              Connect to freelancers with proven business experience
            </li>
            <li>
              <span>
                <AiOutlineCheckCircle className='icon' />
              </span>
              Get matched with the perfect talent by a customer success manager
            </li>
            <li>
              <span>
                <AiOutlineCheckCircle className='icon' />
              </span>
              Manage teamwork and boost productivity with one powerful workspace
            </li>
          </ul>
          <button>Explorer Fiverr Business</button>
        </div>
        <div className='image'>
          <img
            src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default FibBanner
