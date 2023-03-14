import React from 'react'
import { Link } from 'react-router-dom'
import './MyGigs.scss'

const MyGigs = () => {
  const currentUser = {
    id: 1,
    username: 'Anna',
    isSeller: true,
  }

  return (
    <div className='my-gigs'>
      <div className='wrapper'>
        <div className='header'>
          <h1>{currentUser?.isSeller ? 'Gigs' : 'Orders'}</h1>
          {currentUser?.isSeller && (
            <Link className='link' to='/add'>
              <button>Add New Gig</button>
            </Link>
          )}
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Orders</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  className='image'
                  src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
                  alt=''
                />
              </td>
              <td>Jonatan Wilson</td>
              <td>
                11 <sup>59</sup>
              </td>
              <td>113</td>
              <td>
                <img className='delete' src='/img/delete.png' alt='' />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className='image'
                  src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
                  alt=''
                />
              </td>
              <td>Maria Anders</td>
              <td>
                11 <sup>59</sup>
              </td>
              <td>113</td>
              <td>
                <img className='delete' src='/img/delete.png' alt='' />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className='image'
                  src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
                  alt=''
                />
              </td>
              <td>Steven Lansinoh</td>
              <td>
                11 <sup>59</sup>
              </td>
              <td>113</td>
              <td>
                <img className='delete' src='/img/delete.png' alt='' />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className='image'
                  src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
                  alt=''
                />
              </td>
              <td>Mario Estephan</td>
              <td>
                11 <sup>59</sup>
              </td>
              <td>113</td>
              <td>
                <img className='delete' src='/img/delete.png' alt='' />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className='image'
                  src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
                  alt=''
                />
              </td>
              <td>Mario Estephan</td>
              <td>
                11 <sup>59</sup>
              </td>
              <td>113</td>
              <td>
                <img className='delete' src='/img/delete.png' alt='' />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className='image'
                  src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
                  alt=''
                />
              </td>
              <td>Mario Estephan</td>
              <td>
                11 <sup>59</sup>
              </td>
              <td>113</td>
              <td>
                <img className='delete' src='/img/delete.png' alt='' />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className='image'
                  src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
                  alt=''
                />
              </td>
              <td>Mario Estephan</td>
              <td>
                11 <sup>59</sup>
              </td>
              <td>113</td>
              <td>
                <img className='delete' src='/img/delete.png' alt='' />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyGigs
