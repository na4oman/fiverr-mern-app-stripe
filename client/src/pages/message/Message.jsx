import React from 'react'
import { Link } from 'react-router-dom'
import './Message.scss'

const Message = () => {
  return (
    <div className='message'>
      <div className='wrapper'>
        <span className='breadcrumbs'>
          <Link to='/messages'>MESSAGES</Link> &gt; JOHN DOE &gt;
        </span>
        <div className='messages'>
          <div className='item'>
            <img
              src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              eligendi architecto culpa modi hic molestias vero maxime totam
              aperiam non! Dolore eligendi architecto culpa modi hic molestias
              vero maxime totam aperiam non!
            </p>
          </div>
          <div className='item'>
            <img
              src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              eligendi architecto culpa modi hic molestias vero maxime totam
              aperiam non! Dolore eligendi architecto culpa modi hic molestias
              vero maxime totam aperiam non!
            </p>
          </div>
          <div className='item owner'>
            <img
              src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              eligendi architecto culpa modi hic molestias vero maxime totam
              aperiam non! Dolore eligendi architecto culpa modi hic molestias
              vero maxime totam aperiam non!
            </p>
          </div>
          <div className='item'>
            <img
              src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              eligendi architecto culpa modi hic molestias vero maxime totam
              aperiam non! Dolore eligendi architecto culpa modi hic molestias
              vero maxime totam aperiam non!
            </p>
          </div>
          <div className='item owner'>
            <img
              src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              eligendi architecto culpa modi hic molestias vero maxime totam
              aperiam non! Dolore eligendi architecto culpa modi hic molestias
              vero maxime totam aperiam non!
            </p>
          </div>
          <div className='item'>
            <img
              src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              eligendi architecto culpa modi hic molestias vero maxime totam
              aperiam non! Dolore eligendi architecto culpa modi hic molestias
              vero maxime totam aperiam non!
            </p>
          </div>
          <div className='item owner'>
            <img
              src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              eligendi architecto culpa modi hic molestias vero maxime totam
              aperiam non! Dolore eligendi architecto culpa modi hic molestias
              vero maxime totam aperiam non!
            </p>
          </div>
        </div>
        <hr />
        <div className='send'>
          <textarea placeholder='write a message' cols='80' rows='5'></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message
