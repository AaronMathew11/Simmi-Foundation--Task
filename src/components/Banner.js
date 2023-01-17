import React from "react";
import "./Banner.css";
import { useState } from "react";
import data from "../data.json"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";



function Banner() {
  


  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.banner.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.banner.length-1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='max-w-[1400] h-[780px] w-full m-auto py-16 px-4 relative group '>
      <div
        style={{ backgroundImage: `url(${data.banner[currentIndex].image})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      >
        {/* left arrow */}
        <div className='hidden group-hover:block absolute top-{50%} -translate-x-0 translate-y-[290px] left-5 text-2xl rounded-full p-2 bg-back/20 text-white cursor-pointer '>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* right arrow */}
        <div className='hidden group-hover:block absolute top-{50%} -translate-x-0 translate-y-[290px] right-5 text-2xl rounded-full p-2 bg-back/20 text-white cursor-pointer '>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="banner__text">  <div className='title'>
          {data.banner[currentIndex].title}
        </div>
        <div className=' description'>
          {data.banner[currentIndex].description}
        </div></div>
      </div>
    </div>
  );
}

export default Banner;
