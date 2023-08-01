import React from 'react'
import head from '../Assets/head.png'

const Navbar = () => {
  const goToTop = () => {
      window.scrollTo(0, document.body.scrollHeight,)
  };


  return (
    <div className='top-0 sticky'>
        <div className='pt-7'>
            <nav class="w-max-w-full bg-gray-200 mx-7 flex justify-around h-14 pt-4 drop-shadow-2xl rounded-full">
                <div><img src={head} className='-mt-4 h-14 w-auto rouned-full'/></div>
                <div className='-mt-1'>
                    <button className='font-semibold bg-[#212529] text-[#e9ecef] px-3 py-1 rounded-2xl drop-shadow-2xl animate-pulse' onClick={goToTop}>Contact Us</button>
                </div>
            </nav>
        </div>    
    </div>

  )
}

export default Navbar
