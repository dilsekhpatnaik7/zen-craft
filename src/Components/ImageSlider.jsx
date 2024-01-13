import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import images from '../Assets/images';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true, // Enable swipe to slide on mobile
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false, // Hide arrows on mobile
        },
      },
    ],
  };

  return (
    <div className="flex items-center justify-center mb-52 lg:mx-60 mx-10 border-2 border-red-700">
      <Slider {...settings} className="max-w-screen-lg w-full bg-gray-200">
        {images.map((imageUrl, index) => (
          <div key={index} className="flex items-center justify-center h-full">
            <div className='bg-[#e9ecef] text-center p-4  flex items-center justify-center'>
              <img src={imageUrl} alt={`Slide ${index + 1}`} className="w-auto h-auto object-cover rounded-2xl border-2 border-black m-auto" />
            </div>
          </div> 
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
