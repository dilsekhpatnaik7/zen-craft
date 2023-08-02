import React from 'react'

const WorkCard = (props) => {
  return (
    <div>
        <div className='inline-block bg-[#e9ecef] rounded-md shadow-2xl text-center'>
            <div>
                <img src={props.photo} className='w-auto h-auto rounded-lg shadow-2xl contain'/>
            </div>
        </div>
    </div>
  )
}

export default WorkCard
