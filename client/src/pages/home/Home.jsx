import React from 'react'
import Hero from '../../components/hero/Hero'
import Slide from '../../components/slide/Slide'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import './Home.scss'
import { cards, projects } from '../../data'
import CatCard from '../../components/catCard/CatCard'
import Features from '../../components/features/Features'
import Categories from '../../components/categories/Categories'
import FibBanner from '../../components/fibBanner/FibBanner'
import ProjectCard from '../../components/projectCard/projectCard'

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <TrustedBy />
      <Slide
        title='Popular professional services'
        slidesToShow={5}
        arrowsScroll={5}
      >
        {cards.map(card => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <Features />
      <Categories />
      <FibBanner />
      <Slide
        title='Get inspired with projects made by our freelancers'
        slidesToShow={4}
        arrowsScroll={4}
      >
        {projects.map(project => (
          <ProjectCard key={project.id} item={project} />
        ))}
      </Slide>
    </div>
  )
}

export default Home
