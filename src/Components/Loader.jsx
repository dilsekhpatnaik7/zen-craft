import React from 'react'
import load from '../Assets/load.gif'
import './Loader.css'

const Loader = () => {
  return (
    <div className='loader'>
      <img src={load} className='w-screen h-auto'/>
    </div>
  )
}

export default Loader
