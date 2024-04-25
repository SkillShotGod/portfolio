import React from 'react'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Intro from './Intro'

const MainBody = () => {
  return (
    <div className='flex flex-col px-16'>
        <Intro />
        <About/>
        <Skills/>
        <Projects/>
    </div>
  )
}

export default MainBody