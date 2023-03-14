import React, { useState } from 'react'
import GigCard from '../../components/gigCard/GigCard'
import { gigs } from '../../data'
import './Gigs.scss'

const Gigs = () => {
  const [open, setOpen] = useState(false)
  const [sort, setSort] = useState('sales')

  const reSort = type => {
    setSort(type)
    setOpen(false)
  }

  return (
    <div className='gigs'>
      <div className='wrapper'>
        <div className='breadcrumbs'>
          <span>fiver</span>
          <svg
            width='12'
            height='12'
            viewBox='0 0 8 16'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentFill'
          >
            <path d='m.772 1.19-.619.62a.375.375 0 0 0 0 .53L5.8 8 .153 13.66a.375.375 0 0 0 0 .53l.62.62a.375.375 0 0 0 .53 0l6.544-6.545a.375.375 0 0 0 0-.53L1.302 1.19a.375.375 0 0 0-.53 0Z'></path>
          </svg>
          <span>graphics & design</span>
          <svg
            width='12'
            height='12'
            viewBox='0 0 8 16'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentFill'
          >
            <path d='m.772 1.19-.619.62a.375.375 0 0 0 0 .53L5.8 8 .153 13.66a.375.375 0 0 0 0 .53l.62.62a.375.375 0 0 0 .53 0l6.544-6.545a.375.375 0 0 0 0-.53L1.302 1.19a.375.375 0 0 0-.53 0Z'></path>
          </svg>
        </div>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className='sort'>
          <div className='left'>
            <span>Budget</span>
            <input type='text' placeholder='min' />
            <input type='text' placeholder='max' />
            <button>Apply</button>
          </div>
          <div className='right'>
            <span className='sort-by'>Sort by</span>
            <span className='best-selling'>
              {sort === 'sales' ? 'Best Selling' : 'Newest'}
            </span>
            <svg
              width='11'
              height='7'
              viewBox='0 0 11 7'
              xmlns='http://www.w3.org/2000/svg'
              onClick={e => setOpen(!open)}
            >
              <path d='M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z'></path>
            </svg>
            {open && (
              <div className='menu'>
                {sort === 'sales' ? (
                  <span onClick={e => setSort('createdAt')}>Newest</span>
                ) : (
                  <span onClick={e => setSort('sales')}>Best Selling</span>
                )}
                <span onClick={e => setSort('sales')}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className='cards'>
          {gigs.map(gig => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs
