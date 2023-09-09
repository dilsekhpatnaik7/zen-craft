import React from 'react'
import WorkCard from './WorkCard'

import a from '../Assets/p11.png'
import b from '../Assets/p12.png'
import c from '../Assets/p13.png'
import d from '../Assets/p14.png'
import e from '../Assets/p21.png'
import f from '../Assets/p22.png'
import g from '../Assets/p23.png'
import h from '../Assets/p24.jpg'
import i from '../Assets/091.jpg'
import j from '../Assets/092.jpg'
import k from '../Assets/093.jpg'
import l from '../Assets/094.png'

const Works = () => {
  return (
    <div className='mt-20 lg:mt-24 m-4 lg:m-12 p-8 rounded-2xl shadow-2xl bg-gray-200'>
      <div>
        <h1 className='text-4xl text-center font-serif font-semibold'>Our Recent Works</h1>
        <div className='text-center mt-10 mx-auto'>
            <div className='grid lg:grid-cols-3 gap-7 mx-auto'>
                <WorkCard photo={a}/>
                <WorkCard photo={b}/>
                <WorkCard photo={c}/>
                <WorkCard photo={d}/>
                {/* <WorkCard photo={e}/> */}
                <WorkCard photo={f}/>
                <WorkCard photo={g}/>
                {/* <WorkCard photo={h}/> */}
                <WorkCard photo={i}/>
                <WorkCard photo={j}/>
                <WorkCard photo={k}/>
                <WorkCard photo={l}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Works
