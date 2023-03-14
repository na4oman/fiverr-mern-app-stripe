import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectCard.scss'

const ProjectCard = ({ item }) => {
  return (
    <Link className='link' to='/projects/test'>
      <div className='project-card'>
        <img src={item.img} alt='' />
        <div className='info'>
          <img src={item.pp} alt='' />
          <div className='gig-info'>
            <span className='cat'>{item.cat}</span>
            <span className='user'>{item.username}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
