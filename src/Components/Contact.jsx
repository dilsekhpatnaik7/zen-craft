import React from 'react'
import {AiOutlineMail, AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineMobile, AiOutlineLinkedin} from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='mt-20' id='contact'>
      <div>
        <h1 className='text-4xl text-center font-serif font-semibold'>Contact Us</h1>
        <div>
            <div className='flex justify-center gap-9 mt-4'>
                <AiOutlineMail size={30} className='cursor-pointer' onClick={() => {
                    window.open('mailto:zenkraftds@gmail.com')
                }}/>
                <AiOutlineWhatsApp size={30} className='cursor-pointer' onClick={() => {
                    window.open(`https://wa.me/917682082193?text=I'm%20interested%20in%20your%20service`)
                }}/>
                <AiOutlineLinkedin size={30} className='cursor-pointer' onClick={() => {
                    window.open(`https://www.linkedin.com/company/zen-kraft-design-studio/`)
                }}/>
                <AiOutlineInstagram size={30} className='cursor-pointer' onClick={() => {
                    window.open('https://instagram.com/zenkraftds?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D')
                }}/>
            </div>
        </div>

        <div className='text-center mt-4'>
            <h1 className='font-serif text-xl font-semibold pb-1'>Avinash: +91 89846 27829</h1>
            <h1 className='font-serif text-xl font-semibold pb-1'>Piyush: +91 76829 25408</h1>
            <h1 className='font-serif text-xl font-semibold pb-1'>Prabin: +91 93485 79460</h1>
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
