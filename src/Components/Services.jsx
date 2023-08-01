import React from 'react'
import building from '../Assets/building.jpeg'
import construction from '../Assets/construction.jpeg'
import model from '../Assets/3d.jpeg'
import interior from '../Assets/interior.jpeg'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='mt-20'>
      <div>
        <h1 className='text-4xl text-center font-serif font-semibold'>Services We Offer</h1>
        <div className='text-center mt-10 mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:gird-cols-1 gap-7 mx-auto'>
                <ServiceCard photo={building} text='Building Designing' />
                <ServiceCard photo={construction} text='Construction' />
                <ServiceCard photo={model} text='3D CAD Modelling' />
                <ServiceCard photo={interior} text='Interior Designing' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services

/* 
<div className='pt-6 border-2 rounded-2xl bg-gray-200 w-52 inline-block text-center'>
                <div className='inline-block text-center'><img src={building}/></div>
                <h1 className='font-serif text-xl font-semibold'>Building Designing</h1>
            </div>

*/
