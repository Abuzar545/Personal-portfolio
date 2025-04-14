import React from 'react'
import Nav from './nov'
import Hero from './hero'
import Project from './project'
// import Testimonials from './testimonia'
import Skills from './skill'
import Footer from './footer'
const main = () => {
  return (
    <div className='bg-indigo-600'>
      <Nav/>
      <Hero/>
      <Skills/>
      {/* <Testimonials/> */}
      <Project/>
      
      <Footer/>
    </div>
  )
}

export default main

