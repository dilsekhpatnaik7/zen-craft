import React from 'react'
import {AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai'

const TeamCard = (props) => {
  return (
    <div>
      <div className='border-2 lg:h-[570px] inline-block bg-[#e9ecef] rounded-xl shadow-2xl'>
            <div className='text-center'>
                <div>
                  <img src={props.photo} alt={props.photo} className='w-full rounded-t-xl shadow-2xl text-center'/>
                </div>
                <div className='p-4 -mt-4'>
                  <h1 className='text-serif font-semibold text-2xl text-center mt-4'>{props.name}</h1>
                  <h1 className='text-serif font-semibold text-2xl text-center'>{props.lastname}</h1>
                  <h1 className='text-serif font-medium text-md text-center'>{props.degree}</h1>
                  <div className='mt-4 inline-block'>
                    <div className='flex gap-8'>
                      <AiOutlineWhatsApp size={27} className='cursor-pointer' onClick={() => {
                        window.open(props.wp)
                      }}/>
                      <AiOutlineLinkedin size={27} className='cursor-pointer' onClick={() => {
                        window.open(props.lk)
                      }}/>
                      <AiOutlineInstagram size={27} className='cursor-pointer' onClick={() => {
                        window.open(props.ig)
                      }}/>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeamCard
