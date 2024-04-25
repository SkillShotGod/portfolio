import React from 'react'
import  Navbar  from './Navbar'
import MainBody from './MainBody'
import Footer from './Footer'

const PageLayout = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen w-full p-4'>  
        <Navbar />
        <MainBody />
        <Footer  />
    </div>
  )
}

export default PageLayout