import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = ({scrollToTop}: {scrollToTop?: any}) => {
  return (
    <div className='flex gap-4 cursor-pointer justify-center' onClick= {scrollToTop}>
    <FontAwesomeIcon icon={faCircleArrowUp} className='h-6 w-6' />
      <p>
        Scroll to top
      </p>
    </div>
  )
}

export default Footer