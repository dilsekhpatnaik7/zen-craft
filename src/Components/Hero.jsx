import React from 'react'
import main from '../Assets/mainlogo.png'

const Hero = () => {
  return (
    <div>
      <div className='flex flex-col justify-center'>
        <div className='mt-12 text-center'>
            <img src={main} className='w-[100%] text-center'/>
        </div>
        <div className='mt-10'>
            <h1 className='text-center text-5xl font-serif font-bold'>We Build To Inspire</h1>
        </div>
        <div className='mt-7'>
            <h1 className='text-center text-xl font-serif'>Providing You With Optimised Solutions For Your Dream Home...</h1>
            <h1 className='mt-4 text-center text-xl font-serif'>We Have Got Everything Covered For You... :)</h1>
        </div>

      </div>
    </div>
  )
}

export default Hero
