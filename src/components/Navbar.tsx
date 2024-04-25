import React from 'react'

const Navbar = () => {
  return (
    <div className='flex w-full justify-between px-8'>
        <div className='flex text-3xl font-bold'>
            <p className='uppercase text-gray-300'>Mayank</p> 
            <p className='uppercase'>Pujari</p>
        </div>
        <div className='flex gap-4'>
            <p>
                About
            </p>
            <p>
                Skills
            </p>
            <p>
                Projects
            </p>
        </div>
        <div className='flex gap-4'>
            <p>
                Linkedin
            </p>
            <p>
                GitHub
            </p>
            <p>
                Email
            </p>
        </div>
    </div>
  )
}

export default Navbar