import React, { useEffect } from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import AOS from "aos"
import 'aos/dist/aos.css'
import { reviewdata } from '../export';

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrowsL: false
  };
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    })
    AOS.refresh()
  }, [])
  return (
    <div id='testimonials' className='w-full lg:px-28 px-5 py-[88px] bg-gray-180 flex flex-col justify-center items-center gap-4'>
      <h1 data-aos="zoom-in" data-aos-delay="100" className='text-emerald-400 text-xl font-semibold capitalize'>1300+ Customer reviews</h1>
      <h1 data-aos="zoom-in" data-aos-delay="200" className='text-emerald-400 font-semibold text-[42px] leading-[50px] text-center capitalize'> Our Customer Love</h1>
      <div data-aos="zoom-in" data-aos-delay="300" className="w-full mt-10">
        <Slider className='w-full' {...settings}>
          {
            reviewdata.map((item, index) => (
              <div>
                <div key={index} className="w-full flex flex-col justify-center items-center gap-4 lg:p-10 p-3">
                  <img src={item.img} alt="" className="rounded-full w-[100px] m-auto" />
                  <div className='flex justify-center items-center gap-1'>
                    <FaStar className="text-themepurple" />
                    <FaStar className="text-themepurple" />
                    <FaStar className="text-themepurple" />
                    <FaStar className="text-themepurple" />
                    <FaStar className="text-themepurple" />
                  </div>
                  <p className="text-center text-white text-lg">{item.para}</p>
                  <div className="flex justify-center items-center gap-5">
                    <FaQuoteLeft className='fill-themepurple size-16' />
                    <div className='w-full flex flex-col justify-center items-start'> <h1 className="text-white text-xl capitalize font-semibold">
                      {item.name}</h1>
                      <h1 className='text-white capitalize'>{item.post}</h1>
                    </div>
                    </div>
                  </div>
                </div>
                ))
          }

              </Slider>
      </div>
    </div>
  )
}

export default Reviews