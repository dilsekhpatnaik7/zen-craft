import React from 'react'
import avinash from '../Assets/am.png'
import piyush from '../Assets/pm.png'
import TeamCard from './TeamCard'


const Team = () => {
  const ai = 'https://instagram.com/avinash_.vk?igshid=MzRlODBiNWFlZA==';
  const aw = `https://wa.me/918984627829?text=Hello Avinash, %20I'm%20interested%20in%20your%20ZenKraftDesignStudio%20service`;
  const pi = 'https://instagram.com/_.piyush._.badri._?igshid=MzRlODBiNWFlZA==';
  const pw = `https://wa.me/918984627829?text=Hello%20Piyush, %20I'm%20interested%20in%20your%20ZenKraftDesignStudio%20service`;


  return (
    <div>
      <div className='mt-20 m-4 lg:m-12 p-8 rounded-2xl shadow-2xl bg-gray-200'>
        <div><h1 className='text-4xl text-center font-serif font-semibold'>The Working Team</h1></div>
        <div className='text-center pt-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-0 gap-10'>
                <TeamCard photo={avinash} name='Avinash Kameswar' lastname='Vanamali' degree='B.Tech (Civil)' ig={ai} wp={aw}/>
                <TeamCard photo={piyush} name='Piyush Kumar Dash' degree='Diploma/ B.Tech (Civil)' ig={pi} wp={pw}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Team
