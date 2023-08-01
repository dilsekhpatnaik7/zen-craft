import React from 'react'
import {AiOutlineMail, AiOutlineWhatsApp, AiOutlineInstagram} from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='mt-20' id='contact'>
      <div>
        <h1 className='text-4xl text-center font-serif font-semibold'>Contact Us</h1>
        <div>
            <div className='flex justify-center gap-7 mt-4'>
                <AiOutlineMail size={30} className='cursor-pointer' onClick={() => {
                    window.open('mailto:zenkraftds@gmail.com')
                }}/>
                <AiOutlineWhatsApp size={30} className='cursor-pointer' onClick={() => {
                    window.open(`https://wa.me/918984627829?text=I'm%20interested%20in%20your%20service`)
                }}/>
                <AiOutlineInstagram size={30} className='cursor-pointer' onClick={() => {
                    window.open('https://instagram.com/zenkraftds?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D')
                }}/>
            </div>
        </div>

        <div className='text-center mt-10 pb-10'>
            <h1 className='font-serif text-xl pb-1'>All Rights Reserved</h1>
            <h1 className='font-serif text-2xl font-semibold'>@ZenKraftDesignStudio</h1>
        </div>
      </div>
    </div>
  )
}

export default Contact
