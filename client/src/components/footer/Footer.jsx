import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='wrapper'>
        <div className='top'>
          <div className='col'>
            <h3>Categories</h3>
            <ul>
              <li>
                <Link className='link' to='/'>
                  Graphics & Design
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Writing & Translation
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Video & Animation
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Music & Audio
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Programming & Tech
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Data
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Business
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Photography
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          <div className='col'>
            <h3>About</h3>
            <ul>
              <li>
                <Link className='link' to='/'>
                  Graphics & Design
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Writing & Translation
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Video & Animation
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Music & Audio
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Programming & Tech
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Data
                </Link>
              </li>
            </ul>
          </div>
          <div className='col'>
            <h3>Support</h3>
            <ul>
              <li>
                <Link className='link' to='/'>
                  Graphics & Design
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Writing & Translation
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          <div className='col'>
            <h3>Community</h3>
            <ul>
              <li>
                <Link className='link' to='/'>
                  Graphics & Design
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Writing & Translation
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Video & Animation
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Music & Audio
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Programming & Tech
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Data
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Business
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Photography
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          <div className='col'>
            <h3>More From Fiverr</h3>
            <ul>
              <li>
                <Link className='link' to='/'>
                  Graphics & Design
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Writing & Translation
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Video & Animation
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Music & Audio
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Programming & Tech
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Data
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Business
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Photography
                </Link>
              </li>
              <li>
                <Link className='link' to='/'>
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className='bottom'>
          <div className='left'>
            <h2>fiverr.</h2>
            <span>&copy; Fiverr International Ltd. 2023</span>
          </div>
          <div className='right'>
            <div className='social'>
              <img src='/img/twitter.png' alt='' />
              <img src='/img/facebook-logo.png' alt='' />
              <img src='/img/linkedin.png' alt='' />
              <img src='/img/pinterest.png' alt='' />
              <img src='/img/instagram.png' alt='' />
            </div>
            <div className='link'>
              <img src='/img/language.png' alt='' />
              <span>English</span>
            </div>
            <div className='link'>
              <img src='/img/coin.png' alt='' />
              <span>USD</span>
            </div>
            <div className='image'>
              <img src='/img/accessibility.png' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
