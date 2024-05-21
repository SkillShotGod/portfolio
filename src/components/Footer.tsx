'use client'
import { updateDataApi } from '@/hooks/updateData'
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = ({scrollToTop}: {scrollToTop?: any}) => {

  const data = {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }

  const onClickUpdate = (data: any)=>{
    updateDataApi(data)
  }

  return (
    <div className='flex gap-4 cursor-pointer justify-center' onClick= {()=>onClickUpdate(data)} >
    <FontAwesomeIcon icon={faCircleArrowUp} className='h-6 w-6'  />
      <p>
        Scroll to top
      </p>
    </div>
  )
}

export default Footer