import React from 'react'
import avinash from '../Assets/am.png'
import piyush from '../Assets/pm.png'
import TeamCard from './TeamCard'


const Team = () => {
  return (
    <div>
      <div className='mt-20'>
        <div><h1 className='text-4xl text-center font-serif font-semibold'>The Working Team</h1></div>
        <div className='text-center pt-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-0 gap-10'>
                <TeamCard photo={avinash} name='Mr. Avinash Kameswar' lastname='Vanamali' />
                <TeamCard photo={piyush} name='Mr. Piyush Kumar Dash' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Team
