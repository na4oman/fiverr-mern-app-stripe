import React from 'react'
import './Add.scss'

const Add = () => {
  return (
    <div className='add'>
      <div className='wrapper'>
        <h1>Add New Gig</h1>
        <div className='sections'>
          <div className='left'>
            <label htmlFor='title'>Title</label>
            <input
              id='title'
              type='text'
              placeholder="e.g. I will do something I'm really good at"
            />
            <label htmlFor='category'>Category</label>
            <select id='category'>
              <option value='design'>Design</option>
              <option value='web'>Web Development</option>
              <option value='music'>Music</option>
              <option value='animation'>Animation</option>
            </select>
            <label htmlFor='cover-img'>Cover Image</label>
            <input type='file' id='cover-img' />
            <label htmlFor='images'>Upload Images</label>
            <input type='file' id='images' multiple />
            <label htmlFor='description'>Description</label>
            <textarea
              id='description'
              cols='30'
              rows='16'
              placeholder='Brief descriptions to introduce your service to customers'
            ></textarea>
            <button>Create</button>
          </div>
          <div className='right'>
            <label htmlFor='service'>Service Title</label>
            <input
              id='service'
              type='text'
              placeholder='e.g. One page web design'
            />
            <label htmlFor='short-desc'>Short Description</label>
            <textarea
              id='short-desc'
              cols='30'
              rows='10'
              placeholder='Short description of your service'
            ></textarea>
            <label htmlFor='delivery'>Delivery Time (e.g. 3 days)</label>
            <input type='text' id='delivery' />
            <label htmlFor='revision'>Revision number</label>
            <input type='text' id='revision' />
            <label htmlFor='add-features'>Add Features</label>
            <input
              id='add-features'
              type='text'
              placeholder='e.g. page design'
            />
            <input type='text' placeholder='e.g. file uploading' />
            <input type='text' placeholder='e.g. setting up a domain' />
            <input type='text' placeholder='e.g. hosting' />
            <label htmlFor='price'>Price</label>
            <input type='text' id='price' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add
