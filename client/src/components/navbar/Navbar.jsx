import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { BsGlobe } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { MdOutlineEuro } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)

  const { pathname } = useLocation()

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', isActive)

    return () => {
      window.removeEventListener('scroll', isActive)
    }
  }, [])

  const currentUser = {
    id: 1,
    username: 'Anna',
    isSeller: true,
    img: 'https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600',
  }

  return (
    <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
      <div className='wrapper'>
        <div className='logo-search'>
          <div className='logo'>
            <Link to='/' className='link'>
              <span className='text'>fiverr</span>
            </Link>
            <span className='dot'>.</span>
          </div>
          {(active || pathname !== '/') && (
            <div className='search'>
              <input
                type='text'
                placeholder='What service are you looking for today?'
              />
              <button>
                <BiSearch className='icon' />
              </button>
            </div>
          )}
        </div>
        <div className='links'>
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span className='icons'>
            <span className='icon'>
              <BsGlobe />
            </span>
            <span>English</span>
          </span>
          <span className='icons'>
            <span className='icon'>
              <MdOutlineEuro />
            </span>
            <span>EUR</span>
          </span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && (
            <Link to='/login' className='link'>
              Sign in
            </Link>
          )}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className='user' onClick={e => setOpen(!open)}>
              <img src={currentUser?.img} alt='' />
              <span>{currentUser?.username}</span>
              {open && (
                <div className='user-menu'>
                  {currentUser?.isSeller && (
                    <>
                      <Link className='link' to='/mygigs'>
                        Gigs
                      </Link>
                      <Link className='link' to='/add'>
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className='link' to='/orders'>
                    Orders
                  </Link>
                  <Link className='link' to='/messages'>
                    Messages
                  </Link>
                  <span>Logout</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== '/') && (
        <>
          <hr />
          <div className='menu'>
            <Link to='/' className='link menu-link'>
              Graphics & Design
            </Link>
            <Link to='/' className='link menu-link'>
              Digital Marketing
            </Link>
            <Link to='/' className='link menu-link'>
              Writing & Translation
            </Link>
            <Link to='/' className='link menu-link'>
              Video & Animation
            </Link>
            <Link to='/' className='link menu-link'>
              Music & Audio
            </Link>
            <Link to='/' className='link menu-link'>
              Programming & Tech
            </Link>
            <Link to='/' className='link menu-link'>
              Business
            </Link>
            <Link to='/' className='link menu-link'>
              Lifestyle
            </Link>
            <Link to='/' className='link menu-link'>
              AI Services
              <span className='new'>NEW</span>
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  )
}

export default Navbar
