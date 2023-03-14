import React from 'react'
import './Orders.scss'

const Orders = () => {
  const currentUser = {
    id: 1,
    username: 'Anna',
    isSeller: true,
  }

  return (
    <div className='orders'>
      <div className='wrapper'>
        <h1>Orders</h1>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>{currentUser.isSeller ? 'Buyer' : 'Seller'}</th>
              <th>Contact</th>
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
              <td>Gig1</td>
              <td>
                11 <sup>59</sup>
              </td>
              <td>113</td>
              <td>
                <img className='delete' src='/img/message.png' alt='' />
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
              <td>Gig2</td>
              <td>
                11 <sup>59</sup>
              </td>
              <td>113</td>
              <td>
                <img className='delete' src='/img/message.png' alt='' />
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
              <td>Gig3</td>
              <td>
                11 <sup>59</sup>
              </td>
              <td>113</td>
              <td>
                <img className='delete' src='/img/message.png' alt='' />
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
              <td>Gig4</td>
              <td>
                11 <sup>59</sup>
              </td>
              <td>113</td>
              <td>
                <img className='delete' src='/img/message.png' alt='' />
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
              <td>Gig5</td>
              <td>
                11 <sup>59</sup>
              </td>
              <td>113</td>
              <td>
                <img className='delete' src='/img/message.png' alt='' />
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
              <td>Gig6</td>
              <td>
                11 <sup>59</sup>
              </td>
              <td>113</td>
              <td>
                <img className='delete' src='/img/message.png' alt='' />
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
              <td>Gig7</td>
              <td>
                11 <sup>59</sup>
              </td>
              <td>113</td>
              <td>
                <img className='delete' src='/img/message.png' alt='' />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders
