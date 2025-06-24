import React from 'react'
import Hero from './hero'
import Project from './project'
// import Testimonials from './testimonia'
import Skills from './skill'
const main = () => {
  return (
    <div className='bg-indigo-600'>
      
      <Hero/>
      <Skills/>
      {/* <Testimonials/> */}
      <Project/>
      
    
    </div>
  )
}

export default main

