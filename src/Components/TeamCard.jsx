import React from 'react'

const TeamCard = (props) => {
  return (
    <div>
      <div className='border-2 inline-block p-7 bg-[#e9ecef] rounded-xl shadow-2xl'>
            <div className='text-center'>
                <img src={props.photo} className='w-72  rounded-lg shadow-2xl text-center'/>
                <h1 className='text-serif font-semibold text-2xl text-center mt-4'>{props.name}</h1>
                <h1 className='text-serif font-semibold text-2xl text-center'>{props.lastname}</h1>
            </div>
        </div>
    </div>
  )
}

export default TeamCard
