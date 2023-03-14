import React from 'react'
import { Link } from 'react-router-dom'
import './Messages.scss'

const Messages = () => {
  const message =
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
  excepturi molestiae cupiditate architecto commodi tenetur velit
  repellat obcaecati. Quisquam, reprehenderit!`.substring(0, 100)

  return (
    <div className='messages'>
      <div className='wrapper'>
        <h1>Messages</h1>
        <table>
          <thead>
            <tr>
              <th>Buyer</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='active'>
              <td>Jonatan Wilson</td>
              <td>
                <Link className='link' to='/message/123'>
                  {message}...
                </Link>
              </td>
              <td>1 day ago</td>
              <td>
                <button>Mark as Read</button>
              </td>
            </tr>
            <tr className='active'>
              <td>Jonatan Wilson</td>
              <td>
                <Link className='link' to='/message/123'>
                  {message}...
                </Link>
              </td>
              <td>2 hours ago</td>
              <td>
                <button>Mark as Read</button>
              </td>
            </tr>
            <tr>
              <td>Jonatan Wilson</td>
              <td>
                <Link className='link' to='/message/123'>
                  {message}...
                </Link>
              </td>
              <td>1 week ago</td>
            </tr>
            <tr>
              <td>Jonatan Wilson</td>
              <td>
                <Link className='link' to='/message/123'>
                  {message}...
                </Link>
              </td>
              <td>2 weeks ago</td>
            </tr>
            <tr>
              <td>Jonatan Wilson</td>
              <td>
                <Link className='link' to='/message/123'>
                  {message}...
                </Link>
              </td>
              <td>1 year ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Messages
