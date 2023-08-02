import React from 'react'
import {AiOutlineWhatsApp, AiOutlineInstagram} from 'react-icons/ai'

const TeamCard = (props) => {
  return (
    <div>
      <div className='border-2 inline-block p-7 bg-[#e9ecef] rounded-xl shadow-2xl'>
            <div className='text-center'>
                <img src={props.photo} alt={props.photo} className='w-72  rounded-lg shadow-2xl text-center'/>
                <h1 className='text-serif font-semibold text-2xl text-center mt-4'>{props.name}</h1>
                <h1 className='text-serif font-semibold text-2xl text-center'>{props.lastname}</h1>
                <h1 className='text-serif font-medium text-md text-center'>{props.degree}</h1>
                <div className='mt-4 inline-block'>
                  <div className='flex gap-8'>
                    <AiOutlineWhatsApp size={27} className='cursor-pointer' onClick={() => {
                      window.open(props.wp)
                    }}/>
                    <AiOutlineInstagram size={27} className='cursor-pointer' onClick={() => {
                      window.open(props.ig)
                    }}/>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeamCard
