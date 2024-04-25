import React from 'react'
import Image from "next/image";


const Intro = () => {
  return (
    <div>
        Hello I am
         Mayank
         Pujari

         Fullstack Developer 

         5 years of experience
         13 Projects completed


         <Image src={'/public/assets/img/ProfileIcon.png'} alt={'Profile'} width={120} height={0} />
    </div>
  )
}

export default Intro