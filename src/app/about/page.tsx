"use client"
import React, { ChangeEvent, Fragment, useEffect, useState } from 'react'
import { defaultState } from './util/defaultStates'
import { makeAsyncCall } from './hook/makeAsyncCall'
import { useChangeMyObject } from './hook/useChangeMyObject'


const About = () => {
  const [formData, setFormData]= useState(defaultState)
  const mutatedObj = useChangeMyObject(formData)

  const handleChange = (e:any)=>{
    setFormData((prev: any)=>{
return {
  ...prev,
 [e.target.id]: e.target.value

}})}

  
  return (
    <div className='bg-white flex flex-col gap-2 p-4 text-black'>
      <form className='flex flex-col gap-2 p-4'>
        <label htmlFor="type">
       Type
        </label>
        <input id='type' type="text" onChange={(e)=>handleChange(e)} />
        <p>{mutatedObj.type}</p>

        <label htmlFor="name">
        Name
        </label>
        <input  id='name' type="text" onChange={(e)=>handleChange(e)} />
        <p>{mutatedObj.name}</p>

        <label id='gender' htmlFor="gender">
         Gender
        </label>
        <input id='gender' type="text" onChange={(e)=>handleChange(e)} />
        <p>{mutatedObj.gender}</p>

        <label htmlFor="phone">
        Phone
        </label>
        <input id='phone' type="text" onChange={(e)=>handleChange(e)} />
        <p>{mutatedObj.phone}</p>
      </form>

      <h2 className='font-bold'>Game :<span className='font-normal'>{mutatedObj.game}</span></h2>
      <button className='p-2 border rounded-5'>Mayank</button>
    </div>
  )
}

export default About