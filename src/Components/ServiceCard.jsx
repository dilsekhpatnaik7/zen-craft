import React from 'react'

const ServiceCard = (props) => {
  return (
    <div>
        <div className='border-2 inline-block p-7 bg-[#e9ecef] rounded-xl shadow-2xl text-center'>
            <div>
                <img src={props.photo} className='w-auto h-auto rounded-lg shadow-2xl'/>
                <h1 className='text-serif font-semibold text-2xl text-center mt-4'>{props.text}</h1>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard
